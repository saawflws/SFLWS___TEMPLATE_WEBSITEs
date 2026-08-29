#!/usr/bin/env node
/*
 * build-data.js — regenerate root data.js from the template shelf.
 *
 * Plain Node. Zero npm dependencies (fs + path only), so it runs in any agent
 * sandbox with no install step.
 *
 * Reads:   public-agents/INDEX.md          → frameworks + categories
 *          websites/<fw>/<cat>/INDEX.md    → template list, tags, summary
 *          websites/<fw>/<cat>/<t>/META.md → card fields
 * Writes:  data.js  (overwritten completely every run)
 *
 * data.js is a generated artifact. Never hand-edit it — fix the source
 * INDEX.md / META.md and re-run this script. See RULES.md rule 3.
 *
 * Usage:  node scripts/build-data.js [--check]
 *           --check   validate and report drift, write nothing (exit 1 on drift)
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PUBLIC_INDEX = path.join(ROOT, 'public-agents', 'INDEX.md');
const OUT = path.join(ROOT, 'data.js');
const CHECK_ONLY = process.argv.includes('--check');

const warnings = [];
const errors = [];
const warn = (m) => warnings.push(m);
const fail = (m) => errors.push(m);

const read = (p) => fs.readFileSync(p, 'utf8');
const exists = (p) => fs.existsSync(p);
const rel = (p) => path.relative(ROOT, p).split(path.sep).join('/');

/* ── markdown helpers ────────────────────────────────────────────── */

/** Split a markdown table row into trimmed cells. */
function cells(line) {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((c) => c.trim());
}

/** True for a table separator row:  | --- | --- | */
function isSeparator(line) {
  return line.includes('-') && /^\s*\|?[\s:|-]*-[\s:|-]*\|?\s*$/.test(line);
}

/** Every data row of the first markdown table found in `text`. */
function tableRows(text) {
  const lines = text.split(/\r?\n/);
  const rows = [];
  let inTable = false;
  for (const line of lines) {
    const isRow = /^\s*\|/.test(line);
    if (!isRow) {
      if (inTable) break;
      continue;
    }
    if (isSeparator(line)) {
      inTable = true;
      continue;
    }
    if (inTable) rows.push(cells(line));
  }
  return rows;
}

/** Body of a `## Heading` section, up to the next heading of level 1 or 2. */
function section(text, heading) {
  const re = new RegExp('^##[ \\t]+' + heading + '[ \\t]*$', 'im');
  const m = re.exec(text);
  if (!m) return '';
  const rest = text.slice(m.index + m[0].length);
  const end = rest.search(/^#{1,2}[ \t]+/m);
  return (end === -1 ? rest : rest.slice(0, end)).trim();
}

/**
 * Strip markdown links, bold/italic asterisks and code ticks down to plain text.
 * Underscores are deliberately NOT stripped: category and template slugs are
 * snake_case (boutique_yoga_studio), and treating `_` as emphasis mangles them.
 */
function plain(s) {
  return String(s == null ? '' : s)
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[`*]/g, '')
    .trim();
}

/** All `backticked` tokens in a chunk of text, deduped, in order. */
function ticked(text) {
  const out = [];
  const re = /`([^`]+)`/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    const v = m[1].trim();
    if (v && out.indexOf(v) === -1) out.push(v);
  }
  return out;
}

/* ── stage 1: frameworks + categories ────────────────────────────── */

function readPublicIndex() {
  if (!exists(PUBLIC_INDEX)) {
    fail('missing ' + rel(PUBLIC_INDEX) + ' — cannot determine frameworks or categories');
    return [];
  }

  const out = [];
  let framework = null;

  for (const line of read(PUBLIC_INDEX).split(/\r?\n/)) {
    const head = /^##[ \t]+([A-Za-z0-9_-]+)\/?[ \t]*$/.exec(line);
    if (head) {
      framework = head[1];
      continue;
    }
    if (!framework) continue;

    // - `gym` → [`websites/static/gym/INDEX.md`](../websites/static/gym/INDEX.md)
    const item = /^\s*[-*][ \t]+`([^`]+)`[ \t]*(?:→|->)[ \t]*\[`?([^`\]]+)`?\]/.exec(line);
    if (!item) continue;

    const category = item[1].trim();
    const indexPath = path.join(ROOT, item[2].trim());

    if (!exists(indexPath)) {
      fail(framework + '/' + category + ': listed in public-agents/INDEX.md but no INDEX.md at ' + rel(indexPath));
      continue;
    }
    out.push({ framework, category, indexPath, dir: path.dirname(indexPath) });
  }

  // Drift the other way: a category folder that exists on disk with its own INDEX.md
  // but was never added to public-agents/INDEX.md. Without this check it is silently
  // skipped and never reaches the shelf or the showcase.
  const frameworks = [];
  for (const c of out) {
    if (frameworks.indexOf(c.framework) === -1) frameworks.push(c.framework);
  }
  for (const framework of frameworks) {
    const fwDir = path.join(ROOT, 'websites', framework);
    if (!exists(fwDir)) continue;
    const dirs = fs
      .readdirSync(fwDir, { withFileTypes: true })
      .filter((d) => d.isDirectory() && d.name.indexOf('_DELETE_ME_') !== 0)
      .map((d) => d.name);
    for (const name of dirs) {
      if (!exists(path.join(fwDir, name, 'INDEX.md'))) continue;
      if (!out.some((c) => c.framework === framework && c.category === name)) {
        fail(
          'websites/' + framework + '/' + name + '/ has an INDEX.md but is not listed under "## ' +
            framework + '/" in public-agents/INDEX.md — add it there or the category is invisible'
        );
      }
    }
  }

  return out;
}

/* ── stage 2: templates in a category ────────────────────────────── */

function readCategoryIndex(cat) {
  const label = cat.framework + '/' + cat.category;
  const rows = tableRows(read(cat.indexPath));
  const listed = [];

  if (!rows.length) {
    warn(label + ': INDEX.md has no template table — category will be empty');
  }

  for (const row of rows) {
    // | Template | Path | Tags | Summary |
    const slug = plain(row[1]).replace(/\/$/, '');
    if (!slug) {
      warn(label + ': INDEX.md row with no path — skipped: ' + row.join(' | '));
      continue;
    }
    listed.push({
      slug,
      name: plain(row[0]) || slug,
      tags: ticked(row[2] || ''),
      summary: plain(row[3]),
    });
  }

  // drift check: a template folder carrying a META.md that INDEX.md never lists
  const onDisk = fs
    .readdirSync(cat.dir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name.indexOf('_DELETE_ME_') !== 0)
    .map((d) => d.name);

  for (const dirName of onDisk) {
    if (!exists(path.join(cat.dir, dirName, 'META.md'))) continue;
    if (!listed.some((t) => t.slug === dirName)) {
      fail(label + ': ' + dirName + '/ has a META.md but is not listed in ' + rel(cat.indexPath));
    }
  }

  return listed;
}

/* ── stage 3: one template's META.md ─────────────────────────────── */

function readMeta(cat, entry) {
  const label = cat.framework + '/' + cat.category + '/' + entry.slug;
  const dir = path.join(cat.dir, entry.slug);
  const metaPath = path.join(dir, 'META.md');

  if (!exists(dir)) {
    fail(rel(cat.indexPath) + ' lists "' + entry.slug + '" but ' + rel(dir) + ' does not exist');
    return null;
  }
  if (!exists(metaPath)) {
    fail(label + ': no META.md');
    return null;
  }

  const text = read(metaPath);

  // the field table at the top: | **Name** | Value |
  const fields = {};
  for (const row of tableRows(text)) {
    const key = plain(row[0]).toLowerCase();
    if (key) fields[key] = plain(row[1]);
  }

  // blockquote directly under the H1 — the one-line card description
  const quote = /^>[ \t]*(.+)$/m.exec(text);

  const tags = ticked(section(text, 'Style tags'));
  if (!tags.length) warn(label + ': META.md has no style tags');

  // INDEX.md holds the short brand name used on the card; META.md's Name is the
  // full page title, kept alongside it for agents that want the real thing.
  const title = entry.name || fields.name;
  const fullTitle = fields.name && fields.name !== title ? fields.name : '';
  const desc = plain(quote ? quote[1] : '') || entry.summary;
  if (!desc) warn(label + ': META.md has no summary line and INDEX.md gives no summary');

  // sanity: META.md must agree with where it actually sits (Rule 4)
  const declared = (fields.category || '').toLowerCase();
  if (declared && declared !== cat.category.toLowerCase()) {
    fail(label + ': META.md declares category "' + fields.category + '" but sits in "' + cat.category + '"');
  }
  const declaredFw = (fields.framework || '').toLowerCase();
  if (declaredFw && declaredFw !== cat.framework.toLowerCase()) {
    fail(label + ': META.md declares framework "' + fields.framework + '" but sits in "' + cat.framework + '"');
  }

  const sitePath = '/websites/' + cat.framework + '/' + cat.category + '/' + entry.slug;

  // Thumbnail: META.md carries a filename relative to the template folder
  // (`thumb.webp`), which is resolved to a site-root path here. An absolute
  // path is passed through untouched. A declared-but-missing file is an error,
  // not a warning — the card would render a broken image.
  let thumb = '';
  const thumbField = fields.thumbnail || fields.thumb || '';
  if (thumbField && thumbField !== '—' && thumbField !== '-') {
    if (thumbField.charAt(0) === '/') {
      thumb = thumbField;
    } else if (!exists(path.join(dir, thumbField))) {
      fail(label + ': META.md declares thumbnail "' + thumbField +
        '" but no such file in ' + rel(dir) + ' — run: node scripts/shoot-thumbs.js');
    } else {
      thumb = sitePath + '/' + thumbField;
    }
  }

  // INDEX.md tags first (curated for search), then any extra from META.md
  const allTags = [];
  for (const t of entry.tags.concat(tags)) {
    if (allTags.indexOf(t) === -1) allTags.push(t);
  }

  // Provenance: AI-generated, or derived from an open-source project (which keeps
  // its own licence). Carried into data.js so the showcase can surface it.
  const origin = fields.origin || '';

  const out = {
    title,
    slug: entry.slug,
    path: sitePath,
    framework: cat.framework,
    category: cat.category,
    desc,
    tags: allTags,
    meta: sitePath + '/META.md',
  };
  if (origin) out.origin = origin;
  if (fullTitle) out.fullTitle = fullTitle;
  if (thumb) out.thumb = thumb;
  return out;
}

/* ── emit ────────────────────────────────────────────────────────── */

function serialize(templates, categories) {
  const frameworks = [];
  for (const c of categories) {
    if (frameworks.indexOf(c.framework) === -1) frameworks.push(c.framework);
  }
  const stamp = new Date().toISOString().slice(0, 10);
  const plural = categories.length === 1 ? 'category' : 'categories';

  return [
    '/* ============================================================',
    ' * data.js — GENERATED FILE. DO NOT EDIT BY HAND.',
    ' *',
    ' * Produced by scripts/build-data.js from:',
    ' *   public-agents/INDEX.md',
    ' *   websites/<framework>/<category>/INDEX.md',
    ' *   websites/<framework>/<category>/<template>/META.md',
    ' *',
    ' * Any manual change here is overwritten on the next run. To change',
    ' * what the showcase shows, edit the source INDEX.md / META.md files',
    ' * and run:  node scripts/build-data.js',
    ' *',
    ' * Generated: ' + stamp,
    ' * Templates: ' + templates.length + ' across ' + categories.length + ' ' + plural,
    ' * ============================================================ */',
    '',
    'const FRAMEWORKS = ' + JSON.stringify(frameworks) + ';',
    '',
    'const TEMPLATES = ' + JSON.stringify(templates, null, 2) + ';',
    '',
    "if (typeof module !== 'undefined' && module.exports) {",
    '  module.exports = { TEMPLATES, FRAMEWORKS };',
    '}',
    '',
  ].join('\n');
}

/* ── main ────────────────────────────────────────────────────────── */

function main() {
  const categories = readPublicIndex();
  const templates = [];

  for (const cat of categories) {
    for (const entry of readCategoryIndex(cat)) {
      const t = readMeta(cat, entry);
      if (t) templates.push(t);
    }
  }

  for (const w of warnings) console.warn('  warn  ' + w);
  for (const e of errors) console.error('  ERROR ' + e);

  if (errors.length) {
    console.error('\n✗ ' + errors.length + ' error(s). data.js not written — fix the source files and re-run.');
    process.exit(1);
  }

  const next = serialize(templates, categories);

  if (CHECK_ONLY) {
    const current = exists(OUT) ? read(OUT) : '';
    const strip = (s) => s.replace(/^ \* Generated: .*$/m, '');
    if (strip(current) !== strip(next)) {
      console.error('✗ data.js is out of date. Run: node scripts/build-data.js');
      process.exit(1);
    }
    console.log('✓ data.js is up to date — ' + templates.length + ' templates, ' + categories.length + ' ' + plural(categories));
    return;
  }

  fs.writeFileSync(OUT, next, 'utf8');
  console.log('✓ wrote data.js — ' + templates.length + ' templates across ' + categories.length + ' categories');
  for (const cat of categories) {
    const n = templates.filter((t) => t.category === cat.category && t.framework === cat.framework).length;
    console.log('    ' + cat.framework + '/' + cat.category + '  ' + n);
  }
  if (warnings.length) console.log('  (' + warnings.length + ' warning(s) above)');
}

function plural(categories) {
  return categories.length === 1 ? 'category' : 'categories';
}

main();
