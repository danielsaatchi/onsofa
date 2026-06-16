# ONSOFA.ai — Skills (Task Recipes)

Use these recipes as exact instructions for common site updates.
Always upload all project files when asking Claude to perform these tasks.

---

## SKILL 1 — Add a New Language

**Prompt to use:**
> "Add [LANGUAGE NAME] language to the site. Here are my files."

**What Claude will do:**

### Step 1 — Add translation block to `i18n.js`

Insert a new language object inside `TRANSLATIONS`, after the last language
block and before `}; // end TRANSLATIONS`:

```js
/* ============================================================
   JAPANESE — 日本語   ← example
   ============================================================ */
ja: {
  nav_studio:       '...',
  nav_projects:     '...',
  nav_publications: '...',
  nav_products:     '...',
  nav_collabs:      '...',
  nav_contact:      '...',
  footer:           '...',
  header_title:     'ONSOFA🛋️',
  header_sub:       '...',
  // ... all keys matching the `en` block exactly
},
```

Every key present in `en` must exist in the new language block.
Use the `en` block as the template — copy it, then translate all values.

### Step 2 — Add to LANGS array

```js
{ code: 'ja', label: 'JA', flag: '🇯🇵', name: '日本語' },
```

### Step 3 — Add to RTL_LANGS if needed

Only for right-to-left scripts (Arabic, Persian, Hebrew, Urdu etc.):
```js
const RTL_LANGS = ['fa', 'ar', 'ur']; // add new code here
```

### Step 4 — No HTML changes needed

The dropdown is built dynamically from the LANGS array. Done.

---

## SKILL 2 — Update Existing Translation Content

**Prompt to use:**
> "Update the [LANGUAGE] translation for key [KEY_NAME] to: [NEW TEXT]"
> or
> "Fix the Spanish translation for the facilities description."

**What Claude will do:**

1. Open `i18n.js`
2. Find the target language block (e.g. `es: {`)
3. Find the target key (e.g. `facilities_p:`)
4. Replace the value string with the new text
5. Leave all other languages unchanged

**Example change:**
```js
// Before
facilities_p: 'GPT API licenses...',

// After
facilities_p: 'Updated description in Spanish here.',
```

---

## SKILL 3 — Add a New Project

**Prompt to use:**
> "Add a new project called '[TITLE]' with description '[DESCRIPTION]' to projects.html"

**What Claude will do:**

### Step 1 — Add card to `projects.html`

Find the last `</section>` before `</main>` and insert after it:

```html
<section class="card">
  <h3 class="type-line" data-delay="NNNN" data-i18n="projN_h">>/: Your Project Title</h3>
  <p  class="type-line" data-delay="NNNN" data-i18n="projN_p">Your project description.</p>
</section>
```

- Replace `N` with the next number (e.g. if last was `proj7`, use `proj8`)
- Set `data-delay` ~200ms after the previous card's paragraph delay

### Step 2 — Add keys to ALL 7 language blocks in `i18n.js`

For each language (`en`, `fa`, `es`, `ko`, `fr`, `tr`, `ar`):
```js
projN_h: '>/: Translated Title',
projN_p: 'Translated description.',
```

English goes in verbatim. Other languages get translated versions.

---

## SKILL 4 — Add a New Product

**Prompt to use:**
> "Add a new product called '[TITLE]' — [phase] phase, [software/hardware]. Description: '[DESC]'"

**What Claude will do:**

### Step 1 — Add card to `products.html`

```html
<section class="card">
  <h3 class="type-line" data-delay="NNNN" data-i18n="prodN_h">>/: Product Title</h3>
  <p  class="type-line" data-delay="NNNN" data-i18n="prodN_p">
    <span style="color:var(--yellow)">[Phase · software/hardware]</span> — Description, Studio.
  </p>
</section>
```

### Step 2 — Add keys to ALL 7 language blocks in `i18n.js`

```js
prodN_h: '>/: Product Title',
prodN_p: '[Phase · software/hardware] — Description.',
```

---

## SKILL 5 — Add a New Publication

**Prompt to use:**
> "Add this publication to publications.html: [CITATION]"

**What Claude will do:**

Publications are NOT translated (they are academic citations).
No `data-i18n` attributes are used on publication entries.

### Step 1 — Identify the correct section

- Journal/preprint → inside the first `<section class="card">` under `pub_ch1_label`
- Conference → second card under `pub_ch2_label`
- Startup venue → third card under `pub_ch3_label`
- LinkedIn article → fourth card under `pub_ch4_label`

### Step 2 — Add a `<li>` entry at the top of the list (newest first)

```html
<li>
  <strong style="color:var(--yellow)">(YEAR)</strong>
  <strong style="color:orange">Author Name</strong>,
  <em>"Paper Title"</em>,
  Journal/Venue, Month Year.<br>
  <a href="https://doi.org/..." target="_blank">↗ DOI</a>
</li>
```

For LinkedIn articles, simpler format:
```html
<li>
  <strong style="color:var(--yellow)">(Mon YYYY)</strong>
  <strong style="color:orange">Daniel Saatchi</strong>,
  <em>"Article Title"</em> —
  <a href="https://linkedin.com/..." target="_blank">↗ LinkedIn</a>
</li>
```

---

## SKILL 6 — Add a New Collaboration

**Prompt to use:**
> "Add '[INSTITUTION], [LOCATION]' to the present/past collaborations."

**What Claude will do:**

### Step 1 — Add `<li>` to `collaborations.html`

For Present section, add after the last `<li>` with `data-i18n="cp18"`:
```html
<li class="type-line" data-delay="NNNN" data-i18n="cp19">>/: Institution Name, Location</li>
```

For Past section, increment `cc` keys accordingly.

### Step 2 — Add key to ALL 7 language blocks in `i18n.js`

```js
cp19: '>/: Institution Name, Location',          // en
cp19: '>/: Translated Institution Name, ...',    // fa, es, ko, fr, tr, ar
```

---

## SKILL 7 — Update a Research Area

**Prompt to use:**
> "Change research area #3 to: '[NEW TEXT]'"
> or "Add a new research area: '[TEXT]'"

**What Claude will do:**

### Updating an existing area
In `i18n.js`, find key `r3` (or whichever number) in ALL 7 language blocks
and update the value.

In `index.html`, find the `<li data-i18n="r3">` and update its text content.

### Adding a new area (e.g. r16)
1. Add `<li class="type-line" data-delay="NNNN" data-i18n="r16">>/: New area</li>` in `index.html`
2. Add `r16: '>/: New area text'` to ALL 7 language blocks in `i18n.js`

---

## SKILL 8 — Add a New Page

**Prompt to use:**
> "Add a new page called '[PAGE NAME]' to the site."

**What Claude will do:**

1. Copy the structure of `projects.html` as a template
2. Add the nav link to ALL 6 existing HTML files with `data-i18n="nav_newpage"`
3. Add `nav_newpage` key to ALL 7 language blocks in `i18n.js`
4. Add LANGS dropdown automatically (already injected via `.lang-switcher` div)

---

## SKILL 9 — Change Theme Colors

**Prompt to use:**
> "Change the accent color from yellow to [COLOR]."

**What Claude will do:**

In `style.css`, update the CSS variables in both theme blocks:

```css
/* Dark theme */
:root, [data-theme="dark"] {
  --accent:      #NEW_COLOR;
  --accent-dim:  rgba(R,G,B,0.12);
  --accent-glow: rgba(R,G,B,0.35);
  ...
}
/* Light theme */
[data-theme="light"] {
  --accent:      #DARKER_VERSION;
  ...
}
```

All other elements inherit from these variables — no other changes needed.

---

## Quick Reference: Files to Edit Per Task

| Task                        | Files to edit                    |
|-----------------------------|----------------------------------|
| Add language                | `i18n.js` only                   |
| Update translation text     | `i18n.js` only                   |
| Add project                 | `projects.html` + `i18n.js`      |
| Add product                 | `products.html` + `i18n.js`      |
| Add publication             | `publications.html` only         |
| Add collaboration           | `collaborations.html` + `i18n.js`|
| Update research area        | `index.html` + `i18n.js`         |
| Change theme colors         | `style.css` only                 |
| Add new page                | new `.html` + all nav files + `i18n.js` |
