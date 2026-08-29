#!/usr/bin/env node
/*
 * shoot-thumbs.js — regenerate template thumbnails for the showcase.
 *
 * DEV-ONLY, and run occasionally — not part of the showcase build.
 * scripts/build-data.js stays zero-dependency and never calls this.
 *
 * Zero npm dependencies. It drives a locally installed Chrome or Edge over the
 * Chrome DevTools Protocol using Node's built-in WebSocket (Node >= 21), and
 * serves the repo over a throwaway static server so templates load the same way
 * GitHub Pages serves them.
 *
 * Writes:  websites/<fw>/<cat>/<slug>/thumb.webp
 * Reads:   the websites/ shelf directly (not data.js — see discover())
 *
 * Usage:
 *   node scripts/shoot-thumbs.js               # only templates missing a thumb
 *   node scripts/shoot-thumbs.js --all         # re-shoot everything
 *   node scripts/shoot-thumbs.js --only=ironforge,devlog
 *   node scripts/shoot-thumbs.js --keep-open   # leave the browser running (debug)
 *
 * After running, make sure each template's META.md carries a Thumbnail row:
 *   | **Thumbnail** | `thumb.webp` |
 * then re-run: node scripts/build-data.js
 */

'use strict';

const fs = require('fs');
const path = require('path');
const http = require('http');
const os = require('os');
const { spawn } = require('child_process');

const ROOT = path.resolve(__dirname, '..');

/* ── tunables ─────────────────────────────────────────────────────── */

const VIEWPORT_WIDTH = 1280;   // desktop render width
const VIEWPORT_HEIGHT = 900;   // viewport before the full-page capture
const MAX_CAPTURE_HEIGHT = 2000; // clip tall pages; a card shows a 16:10 window and the
                                 // hover pan covers the rest, so height beyond this is
                                 // bytes nobody sees
const CAPTURE_SCALE = 0.5;     // 1280 -> 640px wide output
const WEBP_QUALITY = 78;
const SETTLE_MS = 1400;        // after load, before the scroll sweep
const AFTER_SWEEP_MS = 700;    // after scrolling back to top
const NAV_TIMEOUT_MS = 30000;

const OUT_NAME = 'thumb.webp';

/* ── args ─────────────────────────────────────────────────────────── */

const args = process.argv.slice(2);
const FORCE_ALL = args.includes('--all');
const KEEP_OPEN = args.includes('--keep-open');
const ONLY = (args.find((a) => a.startsWith('--only=')) || '')
  .replace('--only=', '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

/* ── find a browser ───────────────────────────────────────────────── */

function findBrowser() {
  const candidates = [
    process.env.CHROME_PATH,
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    path.join(os.homedir(), 'AppData\\Local\\Google\\Chrome\\Application\\chrome.exe'),
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ].filter(Boolean);

  for (const c of candidates) {
    try {
      if (fs.existsSync(c)) return c;
    } catch (e) {
      /* ignore */
    }
  }
  return null;
}

/* ── tiny static server ───────────────────────────────────────────── */

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.gif': 'image/gif',
  '.jpeg': 'image/jpeg',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.md': 'text/markdown; charset=utf-8',
};

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let rel = decodeURIComponent(req.url.split('?')[0]);
      if (rel.endsWith('/')) rel += 'index.html';
      const file = path.join(ROOT, path.normalize(rel).replace(/^([\\/])+/, ''));

      // never serve outside the repo, and never serve dum/ (Rule 2)
      if (!file.startsWith(ROOT) || /(^|[\\/])dum([\\/]|$)/.test(file)) {
        res.writeHead(403).end('forbidden');
        return;
      }
      fs.readFile(file, (err, buf) => {
        if (err) {
          res.writeHead(404).end('not found');
          return;
        }
        res.writeHead(200, { 'Content-Type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream' });
        res.end(buf);
      });
    });
    server.listen(0, '127.0.0.1', () => resolve({ server, port: server.address().port }));
  });
}

/* ── CDP client over the built-in WebSocket ───────────────────────── */

class CDP {
  constructor(ws) {
    this.ws = ws;
    this.id = 0;
    this.pending = new Map();
    this.listeners = [];
    ws.addEventListener('message', (ev) => {
      let msg;
      try {
        msg = JSON.parse(ev.data);
      } catch (e) {
        return;
      }
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        if (msg.error) reject(new Error(msg.error.message));
        else resolve(msg.result);
      } else if (msg.method) {
        for (const fn of this.listeners.slice()) fn(msg);
      }
    });
  }

  static connect(url) {
    return new Promise((resolve, reject) => {
      const ws = new WebSocket(url);
      ws.addEventListener('open', () => resolve(new CDP(ws)));
      ws.addEventListener('error', () => reject(new Error('CDP websocket failed: ' + url)));
    });
  }

  send(method, params, sessionId) {
    const id = ++this.id;
    const payload = { id, method, params: params || {} };
    if (sessionId) payload.sessionId = sessionId;
    this.ws.send(JSON.stringify(payload));
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      setTimeout(() => {
        if (this.pending.has(id)) {
          this.pending.delete(id);
          reject(new Error('CDP timeout: ' + method));
        }
      }, NAV_TIMEOUT_MS);
    });
  }

  once(method, sessionId) {
    return new Promise((resolve) => {
      const fn = (msg) => {
        if (msg.method === method && (!sessionId || msg.sessionId === sessionId)) {
          this.listeners = this.listeners.filter((f) => f !== fn);
          resolve(msg.params);
        }
      };
      this.listeners.push(fn);
    });
  }

  close() {
    try {
      this.ws.close();
    } catch (e) {
      /* ignore */
    }
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchJSON(url, tries) {
  for (let i = 0; i < (tries || 40); i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return await res.json();
    } catch (e) {
      /* browser not up yet */
    }
    await sleep(250);
  }
  throw new Error('browser did not expose a DevTools endpoint at ' + url);
}

/* ── the sweep that makes scroll-revealed sections visible ────────── */

/*
 * Most templates hide sections until they scroll into view (IntersectionObserver,
 * or GSAP ScrollTrigger). A capture without scrolling would show a page of blank
 * panels. So: force reduced-motion, sweep to the bottom in steps to fire every
 * reveal, then return to the top and let it settle.
 */
const SWEEP = `
(async () => {
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const h = () => Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  const step = Math.round(window.innerHeight * 0.8);
  for (let y = 0; y < Math.min(h(), ${MAX_CAPTURE_HEIGHT} + 2000); y += step) {
    window.scrollTo(0, y);
    await sleep(90);
  }
  window.scrollTo(0, 0);
  await sleep(120);
  // belt and braces: anything still mid-reveal gets forced to its end state
  const css = document.createElement('style');
  css.textContent = \`*,*::before,*::after{
    animation-duration:.001s!important;animation-delay:0s!important;
    transition-duration:.001s!important;transition-delay:0s!important;}
    /* The source button self-hides off the showcase host, but this shooter serves
       from 127.0.0.1 — a localhost form — so it would otherwise appear in every
       thumbnail. A thumbnail is a picture of the template, not of our chrome. */
    #sflws-source-btn{display:none!important;}\`;
  document.head.appendChild(css);
  window.scrollTo(0, 0);
  return h();
})()
`;

/* ── shoot one template ───────────────────────────────────────────── */

async function shoot(cdp, origin, tpl) {
  const { targetId } = await cdp.send('Target.createTarget', { url: 'about:blank' });
  let sessionId;
  try {
    const attached = await cdp.send('Target.attachToTarget', { targetId, flatten: true });
    sessionId = attached.sessionId;

    await cdp.send('Page.enable', {}, sessionId);
    await cdp.send('Runtime.enable', {}, sessionId);
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: VIEWPORT_WIDTH,
      height: VIEWPORT_HEIGHT,
      deviceScaleFactor: 1,
      mobile: false,
    }, sessionId);
    await cdp.send('Emulation.setEmulatedMedia', {
      features: [{ name: 'prefers-reduced-motion', value: 'reduce' }],
    }, sessionId);

    const loaded = cdp.once('Page.loadEventFired', sessionId);
    await cdp.send('Page.navigate', { url: origin + tpl.path + '/' }, sessionId);
    await Promise.race([loaded, sleep(NAV_TIMEOUT_MS)]);
    await sleep(SETTLE_MS);

    const swept = await cdp.send('Runtime.evaluate', {
      expression: SWEEP,
      awaitPromise: true,
      returnByValue: true,
    }, sessionId);
    await sleep(AFTER_SWEEP_MS);

    const pageHeight = Math.max(600, Number(swept && swept.result && swept.result.value) || VIEWPORT_HEIGHT);
    const height = Math.min(pageHeight, MAX_CAPTURE_HEIGHT);

    let shotParams = {
      format: 'webp',
      quality: WEBP_QUALITY,
      captureBeyondViewport: true,
      clip: { x: 0, y: 0, width: VIEWPORT_WIDTH, height, scale: CAPTURE_SCALE },
    };
    let data;
    try {
      data = (await cdp.send('Page.captureScreenshot', shotParams, sessionId)).data;
    } catch (e) {
      // older builds may not accept webp — fall back to jpeg
      shotParams.format = 'jpeg';
      data = (await cdp.send('Page.captureScreenshot', shotParams, sessionId)).data;
    }

    const ext = shotParams.format === 'webp' ? '.webp' : '.jpg';
    const outFile = path.join(ROOT, tpl.path.replace(/^\//, ''), 'thumb' + ext);
    fs.writeFileSync(outFile, Buffer.from(data, 'base64'));

    return {
      file: path.relative(ROOT, outFile).split(path.sep).join('/'),
      bytes: Buffer.from(data, 'base64').length,
      pageHeight,
      captured: height,
      clipped: pageHeight > MAX_CAPTURE_HEIGHT,
    };
  } finally {
    try {
      await cdp.send('Target.closeTarget', { targetId });
    } catch (e) {
      /* ignore */
    }
  }
}

/* ── discover templates from the filesystem ───────────────────────
   Deliberately NOT from data.js. A template's META.md declares its thumbnail
   before the thumbnail exists, which makes data.js unbuildable until the
   thumbnail is shot — and reading data.js here would deadlock that. Walking
   the shelf has no such ordering dependency. */

function discover() {
  const out = [];
  const shelf = path.join(ROOT, 'websites');
  if (!fs.existsSync(shelf)) return out;

  const dirs = (p) =>
    fs.readdirSync(p, { withFileTypes: true })
      .filter((d) => d.isDirectory() && d.name.indexOf('_DELETE_ME_') !== 0)
      .map((d) => d.name);

  for (const framework of dirs(shelf)) {
    const fwDir = path.join(shelf, framework);
    for (const category of dirs(fwDir)) {
      const catDir = path.join(fwDir, category);
      for (const slug of dirs(catDir)) {
        const dir = path.join(catDir, slug);
        if (!fs.existsSync(path.join(dir, 'META.md'))) continue;
        out.push({
          slug: slug,
          framework: framework,
          category: category,
          path: '/websites/' + framework + '/' + category + '/' + slug,
          dir: dir,
        });
      }
    }
  }
  return out;
}

/* ── main ─────────────────────────────────────────────────────────── */

async function main() {
  if (typeof WebSocket === 'undefined') {
    console.error('✗ This script needs Node 21+ for the built-in WebSocket. Node here: ' + process.version);
    process.exit(1);
  }

  const browser = findBrowser();
  if (!browser) {
    console.error('✗ No Chrome or Edge found. Set CHROME_PATH to a Chromium binary and retry.');
    process.exit(1);
  }

  let targets = discover();
  if (ONLY.length) targets = targets.filter((t) => ONLY.includes(t.slug));
  if (!FORCE_ALL && !ONLY.length) {
    targets = targets.filter((t) => !fs.existsSync(path.join(ROOT, t.path.replace(/^\//, ''), OUT_NAME)));
  }

  if (!targets.length) {
    console.log('Nothing to shoot. Use --all to re-shoot, or --only=<slug>.');
    return;
  }

  const { server, port } = await startServer();
  const origin = 'http://127.0.0.1:' + port;
  console.log('serving ' + ROOT + ' on ' + origin);
  console.log('browser: ' + browser + '\n');

  const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'sflws-shot-'));
  const debugPort = 9222 + Math.floor(Math.random() * 400);

  const proc = spawn(browser, [
    '--headless=new',
    '--remote-debugging-port=' + debugPort,
    '--user-data-dir=' + userDataDir,
    '--hide-scrollbars',
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-extensions',
    '--disable-background-timer-throttling',
    '--disable-renderer-backgrounding',
    '--force-color-profile=srgb',
    '--enable-unsafe-swiftshader', // lets the WebGL hero render without a GPU
    'about:blank',
  ], { stdio: 'ignore' });

  let cdp;
  const results = [];
  const failures = [];

  try {
    const version = await fetchJSON('http://127.0.0.1:' + debugPort + '/json/version');
    cdp = await CDP.connect(version.webSocketDebuggerUrl);

    for (const tpl of targets) {
      process.stdout.write('  ' + tpl.slug.padEnd(22));
      try {
        const r = await shoot(cdp, origin, tpl);
        results.push(r);
        console.log(
          String(Math.round(r.bytes / 1024)).padStart(4) + ' KB   ' +
          'page ' + r.pageHeight + 'px' + (r.clipped ? ' (clipped to ' + r.captured + ')' : '')
        );
      } catch (e) {
        failures.push({ slug: tpl.slug, error: e.message });
        console.log('FAILED — ' + e.message);
      }
    }
  } finally {
    if (cdp) cdp.close();
    if (!KEEP_OPEN) {
      try {
        proc.kill();
      } catch (e) {
        /* ignore */
      }
    }
    server.close();
  }

  const total = results.reduce((n, r) => n + r.bytes, 0);
  console.log('\n✓ ' + results.length + '/' + targets.length + ' thumbnails, ' + Math.round(total / 1024) + ' KB total');
  if (failures.length) {
    console.log('✗ failed: ' + failures.map((f) => f.slug).join(', '));
  }
  console.log('\nNext: add  | **Thumbnail** | `' + OUT_NAME + '` |  to each META.md field table,');
  console.log('then run:  node scripts/build-data.js');

  if (failures.length) process.exit(1);
}

main().catch((e) => {
  console.error('✗ ' + e.stack);
  process.exit(1);
});
