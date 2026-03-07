# OKR Miner — Localization / i18n

## Overview

The i18n system lives in **`src/i18n.js`** and exposes a single `GameI18n` global (or CommonJS export) with:

| Export | Description |
|--------|-------------|
| `t(key, params?)` | Returns the translated string for the current language. |
| `setLang(code)` | Switches the active language and persists it to `localStorage`. |
| `getLang()` | Returns the current language code (e.g. `'en'`). |
| `STRINGS` | The raw string tables for all languages. |

The file uses the same ES5-compatible UMD wrapper as `game-logic.js`, so it works as a `<script>` tag in the browser **and** as a `require()` in Node/Vitest tests.

---

## Supported languages

| Code | Name | Notes |
|------|------|-------|
| `en` | English | Default & fallback language |
| `fr` | Français | Standard Canadian French |
| `fr_qc` | Québécois 🍁 | Colloquial Quebec French with humor |

---

## How it works

### String lookup & fallback

```
t("menu.newGame")
  → look up key in STRINGS[currentLang]
  → if not found, look up key in STRINGS['en']
  → if still not found, return the raw key string
```

This means **English is always the ultimate fallback**. If you add a new key only to `en`, the game will still work in every language — it will just show the English text until a translation is added.

### Interpolation

Strings can contain `{placeholder}` tokens:

```javascript
// Definition:  'msg.notEnough': 'Not enough {unit}!'
t('msg.notEnough', { unit: 'HC' })  // → "Not enough HC!"
```

Pass an object as the second argument to `t()`. All occurrences of `{key}` are replaced.

### Persistence

The selected language is stored in `localStorage` under the key `okrMinerLang`. On page load the module reads this value and restores the language automatically.

---

## How to add a new language

1. Add a new object to `STRINGS` in `src/i18n.js`:

```javascript
STRINGS.de = {
    'menu.title': 'OKR MINER',
    'menu.newGame': 'NEUES SPIEL',
    // ... all keys
};
```

2. Add a language name entry inside all existing tables:

```javascript
// in en:
'lang.de': 'Deutsch',
// in fr:
'lang.de': 'Allemand',
```

3. Add the language to any UI language switcher.

4. Add the new language to the test in `tests/i18n.test.js` so key-parity is enforced.

---

## How to add a new string key

1. Add the key to **all three** language tables in `src/i18n.js` (at minimum, add it to `en`).
2. Use it in game code: `GameI18n.t('your.new.key')` or `GameI18n.t('your.new.key', { n: 42 })`.
3. The tests will catch any language that is missing the new key.

---

## Key naming convention

Keys use **dot notation** organized by feature area:

| Prefix | Area |
|--------|------|
| `menu.*` | Main menu |
| `controls.*` | In-game HUD controls |
| `stats.*` | Stats panel |
| `building.<type>.name/desc` | Building names & descriptions |
| `msg.*` | Placement & upgrade messages |
| `ai.*` | AI Rights decision |
| `aiOrg.*` | AI Organization event |
| `confront.*` | AI Confrontation event |
| `ttt.*` | Tic-tac-toe mini-game |
| `recruit.*` | Recruitment event |
| `war.*` | Robot War |
| `gameover.*` | Game Over screens |
| `victory.*` | Victory screens |
| `milestone.*` | Milestone popups |
| `economy.*` | Economy transition |
| `phishing.*` | Phishing event |
| `event.*` | Generic events |
| `misc.*` | Everything else |
| `lang.*` | Language names (for the switcher) |

---

## Quebec French humor guidelines

The `fr_qc` variant is meant to be **genuinely fun** for Quebec players. Guidelines:

- **Sacres** (tabarnac, calisse, crisse, ostie…) are used **sparingly** and only for big moments — legendary upgrades, game over, war escalation. Never more than one per screen.
- Casual speech patterns: *"t'as"* instead of *"tu as"*, *"pis"* instead of *"et puis"*, *"moé/toé"* instead of *"moi/toi"*.
- Quebec expressions: *"enweille"* (let's go), *"lâche pas"* (don't give up), *"mon chum"* (my buddy), *"pas pire pantoute"* (not bad at all), *"péter une coche"* (lose it).
- The tone is **affectionate**, like a friend trash-talking during a game night. Never mean-spirited.
- Technical terms (GPU, TFLOPS, OKR) stay untranslated — everyone uses them as-is.

---

## Testing

Run the i18n tests:

```bash
npm test -- tests/i18n.test.js
```

The test suite verifies:
- All languages have the same set of keys (key parity).
- No string value is empty in any language.
- Fallback to English works for missing keys.
- `setLang` / `getLang` round-trips correctly.
- Interpolation replaces `{placeholder}` tokens.
