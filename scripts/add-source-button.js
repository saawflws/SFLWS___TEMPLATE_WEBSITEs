#!/usr/bin/env node
/*
 * add-source-button.js — inject the "view source on GitHub" button into every template.
 *
 * Plain Node. Zero npm dependencies (fs + path only).
 *
 * The button is a small rainbow pill fixed to the bottom-right of a template page,
 * linking to that template's folder on GitHub. It exists so anyone looking at a
 * rendered template can get to its source in one click.
 *
 * IDEMPOTENT. The injected markup is wrapped in a delimited block:
 *
 *   <!-- sflws:source-button:start -->  …  <!-- sflws:source-button:end -->
 *
 * Re-running replaces that block rather than stacking copies, so this is safe to run
 * as often as you like and safe to run after editing a template.
 *
 * SELF-HIDING. The button renders only on the showcase host or a localhost form. A
 * template cloned for a real client site shows nothing and needs no cleanup, which is
 * what lets templates stay single-file and copyable.
 *
 * Reads:   data.js  (so it targets exactly what the showcase lists)
 * Writes:  each template's entry HTML, in place
 *
 * Usage:
 *   node scripts/add-source-button.js            # add or refresh on every template
 *   node scripts/add-source-button.js --check    # report only, exit 1 if any is missing/stale
 *   node scripts/add-source-button.js --remove   # strip the block entirely
 *   node scripts/add-source-button.js --only=ironforge,devlog
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const REPO = 'https://github.com/saawflws/SFLWS___TEMPLATE_WEBSITEs';
const BRANCH = 'main';

const START = '<!-- sflws:source-button:start -->';
const END = '<!-- sflws:source-button:end -->';

/* Hosts the button is allowed to appear on. Anything else — a client site built from
   a clone — renders nothing. Kept in sync with CNAME. */
const SHOWCASE_HOST = 'sflwsts.aasimahmed.com';

const args = process.argv.slice(2);
const CHECK_ONLY = args.includes('--check');
const REMOVE = args.includes('--remove');
const ONLY = (args.find((a) => a.startsWith('--only=')) || '')
  .replace('--only=', '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

const read = (p) => fs.readFileSync(p, 'utf8');
const exists = (p) => fs.existsSync(p);

/* ── the injected block ──────────────────────────────────────────── */

function block(href) {
  return [
    START,
    '<style>',
    '#sflws-source-btn{position:fixed;right:18px;bottom:18px;z-index:2147483000;display:none;',
    'padding:2px;border-radius:999px;text-decoration:none;line-height:0;',
    'background:linear-gradient(90deg,#ff4d4d,#ffb347,#ffe66d,#7bed9f,#48dbfb,#a29bfe,#ff4d4d);',
    'background-size:300% 100%;animation:sflws-rainbow 6s linear infinite;',
    'box-shadow:0 4px 20px rgba(0,0,0,.32);transition:transform .2s ease}',
    '#sflws-source-btn:hover{transform:translateY(-2px)}',
    '#sflws-source-btn>span{display:flex;align-items:center;gap:7px;padding:9px 15px;',
    'border-radius:999px;background:#0d0d0f;color:#f4f4f5;',
    "font:600 12px/1 ui-sans-serif,system-ui,-apple-system,'Segoe UI',sans-serif;",
    'letter-spacing:.02em;white-space:nowrap}',
    '#sflws-source-btn>span>b{font:inherit;color:#9aa0a6;letter-spacing:0}',
    '@keyframes sflws-rainbow{to{background-position:300% 0}}',
    '@media(prefers-reduced-motion:reduce){#sflws-source-btn{animation:none}',
    '#sflws-source-btn:hover{transform:none}}',
    '@media(max-width:600px){#sflws-source-btn{right:12px;bottom:12px}',
    '#sflws-source-btn>span{padding:8px 13px;font-size:11px}}',
    '</style>',
    '<a id="sflws-source-btn" href="' + href + '" target="_blank" rel="noopener noreferrer"',
    ' aria-label="View this template&#39;s source code on GitHub">',
    '<span><b aria-hidden="true">&lt;/&gt;</b>view source</span></a>',
    '<script>',
    '(function(){',
    'var h=location.hostname;',
    "var ok=h==='" + SHOWCASE_HOST + "'||h==='localhost'||h==='127.0.0.1'||h==='[::1]'",
    "||/\\.github\\.io$/.test(h);",
    "var b=document.getElementById('sflws-source-btn');",
    "if(b&&ok)b.style.display='block';",
    '})();',
    '</script>',
    END,
  ].join('\n');
}

/* One <a> (the animated gradient, acting as a 2px border) wrapping exactly one <span>
   (the dark pill). The glyph is a <b> inside that span, so there is a single pill in a
   single flex row — two sibling spans would each become their own pill and stack. */

function githubHref(tpl) {
  return REPO + '/tree/' + BRANCH + tpl.path;
}

/* ── entry file for a template ───────────────────────────────────── */

function entryFile(tpl) {
  const dir = path.join(ROOT, tpl.path.replace(/^\//, ''));
  const candidate = path.join(dir, 'index.html');
  return exists(candidate) ? candidate : null;
}

/* ── inject / strip ──────────────────────────────────────────────── */

function strip(html) {
  const s = html.indexOf(START);
  if (s === -1) return { html, had: false };
  const e = html.indexOf(END, s);
  if (e === -1) return { html, had: false };
  let out = html.slice(0, s) + html.slice(e + END.length);
  out = out.replace(/\n{3,}(<\/body>)/i, '\n$1');
  return { html: out.replace(/[ \t]*\n[ \t]*\n(?=<\/body>)/i, '\n'), had: true };
}

function inject(html, wanted) {
  const cleaned = strip(html).html;
  const m = /<\/body\s*>/i.exec(cleaned);
  if (!m) return null; // no </body> — refuse rather than guess
  return cleaned.slice(0, m.index) + wanted + '\n' + cleaned.slice(m.index);
}

/* ── main ────────────────────────────────────────────────────────── */

function main() {
  const dataPath = path.join(ROOT, 'data.js');
  if (!exists(dataPath)) {
    console.error('✗ data.js not found. Run: node scripts/build-data.js');
    process.exit(1);
  }

  let templates = require(dataPath).TEMPLATES;
  if (ONLY.length) templates = templates.filter((t) => ONLY.indexOf(t.slug) !== -1);

  const changed = [];
  const stale = [];
  const skipped = [];
  const ok = [];

  for (const tpl of templates) {
    const file = entryFile(tpl);
    if (!file) {
      skipped.push(tpl.slug + ' (no index.html — framework templates inject into their layout instead)');
      continue;
    }

    const html = read(file);
    const wanted = block(githubHref(tpl));

    if (REMOVE) {
      const res = strip(html);
      if (res.had) {
        if (!CHECK_ONLY) fs.writeFileSync(file, res.html, 'utf8');
        changed.push(tpl.slug);
      } else {
        ok.push(tpl.slug);
      }
      continue;
    }

    if (html.indexOf(wanted) !== -1) {
      ok.push(tpl.slug);
      continue;
    }

    const had = html.indexOf(START) !== -1;
    (had ? stale : changed).push(tpl.slug);

    if (!CHECK_ONLY) {
      const next = inject(html, wanted);
      if (next === null) {
        console.error('  ERROR ' + tpl.slug + ': no </body> in ' + path.relative(ROOT, file));
        process.exitCode = 1;
        continue;
      }
      fs.writeFileSync(file, next, 'utf8');
    }
  }

  for (const s of skipped) console.log('  skip  ' + s);

  if (CHECK_ONLY) {
    if (changed.length) console.error('  missing: ' + changed.join(', '));
    if (stale.length) console.error('  stale:   ' + stale.join(', '));
    if (changed.length || stale.length) {
      console.error('\n✗ ' + (changed.length + stale.length) + ' template(s) need the button. Run: node scripts/add-source-button.js');
      process.exit(1);
    }
    console.log('✓ all ' + ok.length + ' template(s) carry a current source button.');
    return;
  }

  if (REMOVE) {
    console.log('✓ removed the button from ' + changed.length + ' template(s); ' + ok.length + ' had none.');
    return;
  }

  console.log('✓ source button current on ' + (changed.length + stale.length + ok.length) + ' template(s)');
  if (changed.length) console.log('    added:     ' + changed.join(', '));
  if (stale.length) console.log('    refreshed: ' + stale.join(', '));
  if (ok.length) console.log('    unchanged: ' + ok.length);
}

main();
