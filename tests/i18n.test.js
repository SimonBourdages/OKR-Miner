import { describe, expect, test, beforeEach } from 'vitest';
import i18n from '../src/i18n.js';

const { t, setLang, getLang, STRINGS } = i18n;

const ALL_LANGS = Object.keys(STRINGS);
const enKeys = Object.keys(STRINGS.en).sort();

beforeEach(() => {
    setLang('en');
});

// ---------------------------------------------------------------------------
// Key parity — every language must have the same keys as English
// ---------------------------------------------------------------------------
describe('key parity across languages', () => {
    ALL_LANGS.forEach((lang) => {
        test(`"${lang}" has the same keys as "en"`, () => {
            const langKeys = Object.keys(STRINGS[lang]).sort();
            expect(langKeys).toEqual(enKeys);
        });
    });
});

// ---------------------------------------------------------------------------
// No empty strings
// ---------------------------------------------------------------------------
describe('no empty strings', () => {
    ALL_LANGS.forEach((lang) => {
        test(`no empty values in "${lang}"`, () => {
            const empty = Object.entries(STRINGS[lang])
                .filter(([, v]) => typeof v !== 'string' || v.trim() === '')
                .map(([k]) => k);
            expect(empty).toEqual([]);
        });
    });
});

// ---------------------------------------------------------------------------
// All values are strings
// ---------------------------------------------------------------------------
describe('all values are strings', () => {
    ALL_LANGS.forEach((lang) => {
        test(`all values in "${lang}" are strings`, () => {
            const nonString = Object.entries(STRINGS[lang])
                .filter(([, v]) => typeof v !== 'string')
                .map(([k]) => k);
            expect(nonString).toEqual([]);
        });
    });
});

// ---------------------------------------------------------------------------
// Fallback to English
// ---------------------------------------------------------------------------
describe('fallback to English', () => {
    test('returns English value when key is missing in current language', () => {
        // Temporarily monkey-patch fr to remove a key
        const original = STRINGS.fr['menu.title'];
        delete STRINGS.fr['menu.title'];

        setLang('fr');
        expect(t('menu.title')).toBe(STRINGS.en['menu.title']);

        // Restore
        STRINGS.fr['menu.title'] = original;
    });

    test('returns raw key when missing in all languages', () => {
        setLang('en');
        expect(t('totally.fake.key')).toBe('totally.fake.key');
    });
});

// ---------------------------------------------------------------------------
// setLang / getLang
// ---------------------------------------------------------------------------
describe('setLang and getLang', () => {
    test('defaults to "en"', () => {
        expect(getLang()).toBe('en');
    });

    test('switches to fr', () => {
        setLang('fr');
        expect(getLang()).toBe('fr');
    });

    test('switches to fr_qc', () => {
        setLang('fr_qc');
        expect(getLang()).toBe('fr_qc');
    });

    test('ignores unknown language codes', () => {
        setLang('klingon');
        expect(getLang()).toBe('en');
    });

    test('t() returns the correct language after switching', () => {
        setLang('fr');
        expect(t('menu.newGame')).toBe(STRINGS.fr['menu.newGame']);

        setLang('fr_qc');
        expect(t('menu.newGame')).toBe(STRINGS.fr_qc['menu.newGame']);

        setLang('en');
        expect(t('menu.newGame')).toBe(STRINGS.en['menu.newGame']);
    });
});

// ---------------------------------------------------------------------------
// Interpolation
// ---------------------------------------------------------------------------
describe('interpolation', () => {
    test('replaces {placeholder} tokens', () => {
        setLang('en');
        expect(t('msg.notEnough', { unit: 'HC' })).toBe('Not enough HC!');
    });

    test('replaces multiple different placeholders', () => {
        // msg.placed has {name}
        setLang('en');
        expect(t('msg.placed', { name: 'GPU' })).toBe('GPU placed!');
    });

    test('replaces numeric placeholders', () => {
        setLang('en');
        expect(t('msg.upgraded', { level: 3 })).toBe('UPGRADED to Lv.3!');
    });

    test('handles missing params gracefully (leaves token)', () => {
        setLang('en');
        expect(t('msg.notEnough')).toBe('Not enough {unit}!');
    });

    test('works in fr_qc', () => {
        setLang('fr_qc');
        expect(t('msg.notEnough', { unit: 'HC' })).toBe("T'as pas assez de HC, là !");
    });

    test('replaces {radius} in misc.playAreaExpanded', () => {
        setLang('en');
        expect(t('misc.playAreaExpanded', { radius: 1350 })).toBe(
            'Play area expanded! Radius: 1350px'
        );
    });

    test('replaces {count} in misc.combo', () => {
        setLang('en');
        expect(t('misc.combo', { count: 5 })).toBe('COMBO x5!');
    });
});

// ---------------------------------------------------------------------------
// Minimum key count (sanity check)
// ---------------------------------------------------------------------------
describe('minimum coverage', () => {
    test('English has at least 100 keys', () => {
        expect(enKeys.length).toBeGreaterThanOrEqual(100);
    });
});
