#!/usr/bin/env node
/*
 * build-kb.js — regenerate the knowledge-base registry from kb/ entries.
 *
 * Plain Node. Zero npm dependencies (fs + path only), like build-data.js.
 *
 * Reads:   kb/<area>/<id>.md   — each with YAML frontmatter
 * Writes:  kb/INDEX.md         — human registry, grouped by area
 *          kb/registry.json    — machine registry
 *
 * Both outputs are GENERATED. Never hand-edit them; fix the entry and re-run.
 *
 * Usage:  node scripts/build-kb.js [--check]
 *           --check   validate and report drift, write nothing (exit 1 on drift)
 *
 * Frontmatter contract (see kb/schemas/kb-entry.md):
 *   id:       required. Must equal the filename without .md, and be unique.
 *   title:    required.
 *   area:     required. Must equal the containing folder name.
 *   updated:  required. ISO-8601 timestamp, bumped whenever the entry changes.
 *   summary:  required. One line; it is what INDEX.md shows.
 *   related:  optional. List of other entry ids; every one must resolve.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const KB = path.join(ROOT, 'kb');
const OUT_INDEX = path.join(KB, 'INDEX.md');
const OUT_JSON = path.join(KB, 'registry.json');
const CHECK_ONLY = process.argv.includes('--check');

/* Areas in the order they should appear — concepts before the things built on them. */
const AREA_ORDER = ['concepts', 'architecture', 'schemas', 'workflows', 'operations', 'decisions'];
const AREA_BLURB = {
  concepts: 'What the moving parts are, and the vocabulary the rest of the repo assumes.',
  architecture: 'How the pieces fit together and why they are shaped that way.',
  schemas: 'Field-by-field definitions of the files the tooling reads and writes.',
  workflows: 'End-to-end paths through the system, with the reasoning behind each step.',
  operations: 'Running the scripts, and what to do when something goes wrong.',
  decisions: 'Dated records of choices made, the alternatives, and what would reverse them.',
};

const REQUIRED = ['id', 'title', 'area', 'updated', 'summary'];

const errors = [];
const warnings = [];
const fail = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

const read = (p) => fs.readFileSync(p, 'utf8');
const exists = (p) => fs.existsSync(p);
const rel = (p) => path.relative(ROOT, p).split(path.sep).join('/');

/* ── a deliberately small YAML frontmatter reader ──────────────────
   Handles exactly what the entry contract allows: `key: value`, plus
   `related` as an inline [a, b] list or a block of `- item` lines.
   Anything richer is a sign the contract is being stretched.        */
function frontmatter(text, label) {
  if (!/^---\r?\n/.test(text)) {
    fail(label + ': no YAML frontmatter block at the top of the file');
    return null;
  }
  const end = text.indexOf('\n---', 3);
  if (end === -1) {
    fail(label + ': frontmatter block is never closed with ---');
    return null;
  }

  const body = text.slice(text.indexOf('\n') + 1, end);
  const data = {};
  let listKey = null;

  for (const raw of body.split(/\r?\n/)) {
    const line = raw.replace(/\s+$/, '');
    if (!line.trim() || line.trim().startsWith('#')) continue;

    const item = /^\s*-\s+(.*)$/.exec(line);
    if (item && listKey) {
      data[listKey].push(unquote(item[1]));
      continue;
    }

    const kv = /^([A-Za-z_][A-Za-z0-9_-]*):\s*(.*)$/.exec(line);
    if (!kv) {
      warn(label + ': unparsed frontmatter line, ignored: ' + line.trim());
      continue;
    }

    const key = kv[1];
    const value = kv[2].trim();

    if (value === '') {
      listKey = key;
      data[key] = [];
      continue;
    }
    listKey = null;

    if (value.startsWith('[') && value.endsWith(']')) {
      data[key] = value
        .slice(1, -1)
        .split(',')
        .map((v) => unquote(v.trim()))
        .filter(Boolean);
    } else {
      data[key] = unquote(value);
    }
  }
  return data;
}

function unquote(s) {
  const t = String(s).trim();
  if ((t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'"))) {
    return t.slice(1, -1);
  }
  return t;
}

const ISO = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;

/* ── collect ─────────────────────────────────────────────────────── */

function collect() {
  if (!exists(KB)) {
    fail('kb/ does not exist');
    return [];
  }

  const entries = [];
  const areas = fs
    .readdirSync(KB, { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name.indexOf('_DELETE_ME_') !== 0)
    .map((d) => d.name);

  for (const area of areas) {
    if (AREA_ORDER.indexOf(area) === -1) {
      warn('kb/' + area + '/ is not a known area — it will be listed last in INDEX.md');
    }
    const dir = path.join(KB, area);
    const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));

    if (!files.length) warn('kb/' + area + '/ contains no entries');

    for (const file of files) {
      const full = path.join(dir, file);
      const label = 'kb/' + area + '/' + file;
      const data = frontmatter(read(full), label);
      if (!data) continue;

      for (const key of REQUIRED) {
        if (!data[key]) fail(label + ': missing required frontmatter field "' + key + '"');
      }
      if (errorsFor(label)) continue;

      const expectedId = file.replace(/\.md$/, '');
      if (data.id !== expectedId) {
        fail(label + ': id "' + data.id + '" does not match the filename ("' + expectedId + '")');
      }
      if (data.area !== area) {
        fail(label + ': area "' + data.area + '" does not match the folder ("' + area + '")');
      }
      if (!ISO.test(data.updated)) {
        fail(label + ': updated "' + data.updated + '" is not an ISO-8601 timestamp (e.g. 2026-08-29T14:20:00Z)');
      }

      entries.push({
        id: data.id,
        title: data.title,
        area,
        updated: data.updated,
        summary: data.summary,
        related: Array.isArray(data.related) ? data.related : [],
        path: 'kb/' + area + '/' + file,
      });
    }
  }
  return entries;
}

/* true if we already recorded an error for this file — skip further checks on it */
function errorsFor(label) {
  return errors.some((e) => e.indexOf(label + ':') === 0);
}

/* ── validate across entries ─────────────────────────────────────── */

function crossValidate(entries) {
  const byId = new Map();
  for (const e of entries) {
    if (byId.has(e.id)) {
      fail('duplicate id "' + e.id + '" in ' + e.path + ' and ' + byId.get(e.id).path);
      continue;
    }
    byId.set(e.id, e);
  }
  for (const e of entries) {
    for (const r of e.related) {
      if (!byId.has(r)) {
        fail(e.path + ': related entry "' + r + '" does not exist');
      }
      if (r === e.id) {
        warn(e.path + ': lists itself as related');
      }
    }
  }
  return byId;
}

/* ── emit ────────────────────────────────────────────────────────── */

function areaRank(a) {
  const i = AREA_ORDER.indexOf(a);
  return i === -1 ? AREA_ORDER.length : i;
}

function renderIndex(entries) {
  const areas = [...new Set(entries.map((e) => e.area))].sort((a, b) => areaRank(a) - areaRank(b));
  const day = new Date().toISOString().slice(0, 10);

  const out = [
    '<!-- GENERATED by scripts/build-kb.js — do not edit by hand. -->',
    '',
    '# Knowledge base',
    '',
    'Every entry in `kb/`, grouped by area and newest-updated first within each.',
    'Regenerate with `node scripts/build-kb.js`. See [`README.md`](README.md) for how the',
    'KB works and [`schemas/kb-entry.md`](schemas/kb-entry.md) for the entry contract.',
    '',
    '`' + entries.length + ' entries · ' + areas.length + ' areas · index generated ' + day + '`',
    '',
  ];

  for (const area of areas) {
    const rows = entries
      .filter((e) => e.area === area)
      .sort((a, b) => (a.updated < b.updated ? 1 : a.updated > b.updated ? -1 : a.id < b.id ? -1 : 1));

    out.push('## ' + area);
    out.push('');
    if (AREA_BLURB[area]) {
      out.push(AREA_BLURB[area]);
      out.push('');
    }
    out.push('| Entry | Summary | Updated |');
    out.push('| --- | --- | --- |');
    for (const e of rows) {
      const link = '[' + e.title + '](' + e.area + '/' + e.id + '.md)';
      out.push('| ' + link + ' | ' + e.summary + ' | ' + e.updated.slice(0, 10) + ' |');
    }
    out.push('');
  }

  return out.join('\n');
}

function renderJSON(entries) {
  const payload = {
    generated: new Date().toISOString(),
    count: entries.length,
    areas: [...new Set(entries.map((e) => e.area))].sort((a, b) => areaRank(a) - areaRank(b)),
    entries: entries
      .slice()
      .sort((a, b) => (areaRank(a.area) - areaRank(b.area)) || (a.id < b.id ? -1 : 1)),
  };
  return JSON.stringify(payload, null, 2) + '\n';
}

/* ── main ────────────────────────────────────────────────────────── */

function main() {
  const entries = collect();
  crossValidate(entries);

  for (const w of warnings) console.warn('  warn  ' + w);
  for (const e of errors) console.error('  ERROR ' + e);

  if (errors.length) {
    console.error('\n✗ ' + errors.length + ' error(s). Nothing written — fix the entries and re-run.');
    process.exit(1);
  }

  const nextIndex = renderIndex(entries);
  const nextJSON = renderJSON(entries);

  if (CHECK_ONLY) {
    // ignore the generated-on stamps when comparing
    const stripMd = (s) => s.replace(/index generated \d{4}-\d{2}-\d{2}/, '');
    const stripJson = (s) => s.replace(/"generated": "[^"]*"/, '');
    const curMd = exists(OUT_INDEX) ? read(OUT_INDEX) : '';
    const curJson = exists(OUT_JSON) ? read(OUT_JSON) : '';

    if (stripMd(curMd) !== stripMd(nextIndex) || stripJson(curJson) !== stripJson(nextJSON)) {
      console.error('✗ kb registry is out of date. Run: node scripts/build-kb.js');
      process.exit(1);
    }
    console.log('✓ kb registry is up to date — ' + entries.length + ' entries.');
    return;
  }

  fs.writeFileSync(OUT_INDEX, nextIndex, 'utf8');
  fs.writeFileSync(OUT_JSON, nextJSON, 'utf8');

  console.log('✓ wrote kb/INDEX.md and kb/registry.json — ' + entries.length + ' entries');
  for (const area of [...new Set(entries.map((e) => e.area))].sort((a, b) => areaRank(a) - areaRank(b))) {
    console.log('    ' + area.padEnd(14) + entries.filter((e) => e.area === area).length);
  }
  if (warnings.length) console.log('  (' + warnings.length + ' warning(s) above)');
}

main();
