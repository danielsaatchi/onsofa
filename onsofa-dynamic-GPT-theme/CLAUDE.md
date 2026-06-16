# ONSOFA.ai — Claude Automation Guide

This file tells Claude exactly how this codebase works so it can make
precise, surgical edits without breaking anything. Always read this file
before touching any other file in this project.

---

## Project Structure

```
onsofa/
├── index.html          — Studio page (research areas, facilities, creator bio)
├── projects.html       — Projects list
├── publications.html   — Journals, conferences, startup venues, LinkedIn articles
├── products.html       — Products list
├── collaborations.html — Present & past collaborations
├── contact.html        — Contact details
├── style.css           — All styling (dark + light themes via CSS variables)
├── typing.js           — Typewriter animation engine (do not modify)
├── theme.js            — Dark/light toggle, persists to localStorage (do not modify)
├── i18n.js             — ALL translations + language switcher engine
├── CLAUDE.md           — This file (automation guide for Claude)
└── SKILLS.md           — Skill recipes for common tasks
```

---

## How the Translation System Works

### File: `i18n.js`

All translatable text lives in one object at the top of `i18n.js`:

```js
const TRANSLATIONS = {
  en: { key: 'value', ... },
  fa: { key: 'value', ... },  // RTL
  es: { key: 'value', ... },
  ko: { key: 'value', ... },
  fr: { key: 'value', ... },
  tr: { key: 'value', ... },
  ar: { key: 'value', ... },  // RTL
};
```

### How HTML elements are linked to translations

Every translatable element in the HTML has a `data-i18n="key"` attribute:

```html
<h3 data-i18n="facilities_h">Facilities</h3>
<p  data-i18n="facilities_p">GPT API licenses...</p>
<li data-i18n="r1">>/: Applied Math [4]...</li>
```

The engine in `i18n.js` swaps `textContent` of every `[data-i18n]` element
on language change. It is purely client-side — no server needed.

### RTL languages

Arabic (`ar`) and Persian (`fa`) are in `RTL_LANGS`. When selected, the
engine sets `dir="rtl"` on `<html>` and CSS handles mirroring automatically.

### Language list (LANGS array in i18n.js)

```js
const LANGS = [
  { code: 'en', label: 'EN', flag: '🇬🇧', name: 'English'  },
  { code: 'fa', label: 'FA', flag: '🇮🇷', name: 'فارسی'    },
  { code: 'es', label: 'ES', flag: '🇪🇸', name: 'Español'  },
  { code: 'ko', label: 'KO', flag: '🇰🇷', name: '한국어'    },
  { code: 'fr', label: 'FR', flag: '🇫🇷', name: 'Français' },
  { code: 'tr', label: 'TR', flag: '🇹🇷', name: 'Türkçe'   },
  { code: 'ar', label: 'AR', flag: '🇸🇦', name: 'العربية'  },
];
const RTL_LANGS = ['fa', 'ar'];
```

---

## Key Naming Conventions in i18n.js

| Prefix      | Used for                                      |
|-------------|-----------------------------------------------|
| `nav_`      | Navigation link labels                        |
| `r1`–`r15`  | Research area list items (index.html)         |
| `proj1_h/p` | Project card heading / paragraph              |
| `prod1_h/p` | Product card heading / paragraph              |
| `cp1`–`cp18`| Current collaboration list items              |
| `cc1`–`cc9` | Past collaboration list items                 |
| `pub_ch1_label` | Publication section chapter label        |
| `edu1`–`edu3`   | Education entries                        |
| `footer`        | Footer copyright text                    |

---

## HTML Patterns to Know

### A card block (projects, products)
```html
<section class="card">
  <h3 class="type-line" data-delay="700" data-i18n="proj1_h">>/: Title</h3>
  <p  class="type-line" data-delay="900" data-i18n="proj1_p">Description.</p>
</section>
```

- `class="type-line"` — enables the typewriter animation
- `data-delay="N"` — milliseconds before typing starts (increment by ~200 per card)
- `data-i18n="key"` — links to translation key

### A chapter marker (section divider)
```html
<div class="chapter-marker">
  <span>01</span>
  <span class="chapter-line"></span>
  <span data-i18n="ch1_label">Research Areas</span>
</div>
```

### A collaboration list item
```html
<li class="type-line" data-delay="1000" data-i18n="cp1">>/: Text here</li>
```

### Publications (NOT translated — kept in English as academic citations)
Publication entries in `publications.html` do NOT use `data-i18n`. They are
static HTML with author names, DOIs, and links. Only the section chapter
headings (`pub_ch1_label` etc.) are translated.

---

## Theme System

`style.css` uses CSS custom properties under two selectors:
- `:root, [data-theme="dark"]` — dark theme (default)
- `[data-theme="light"]` — light theme (warm paper)

`theme.js` sets `data-theme` on `<html>` and persists to localStorage.
Do not hardcode colours in HTML — always use `var(--accent)`, `var(--text)`,
`var(--muted)`, `var(--card-bg)` etc.

---

## Important Rules

1. **Never edit `typing.js` or `theme.js`** — they are stable utilities.
2. **All new text elements must have `data-i18n`** — otherwise they won't
   translate. Add the key to ALL 7 language blocks in `i18n.js`.
3. **Publications in `publications.html` stay in English** — only add
   `data-i18n` to section headings, not to paper entries.
4. **Increment `data-delay` values** when adding new cards — keep ~150–200ms
   gaps so the typing animation staggers correctly.
5. **RTL layout is handled by CSS** — no JS changes needed for new RTL content.
6. **New languages need an entry in both `TRANSLATIONS` and `LANGS`** — and
   if RTL, also in `RTL_LANGS`.
