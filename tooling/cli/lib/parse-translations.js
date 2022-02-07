const path = require('path');
const { readFile, writeFile } = require('fs/promises');
const Parser = require('i18next-scanner').Parser;
const { getFilePaths, filePathIsValid } = require('./helpers/filepaths');

const OP_DIR = process.cwd();
const TI_TRANSLATIONS_PATH = path.join(OP_DIR, 'locales/translations-source.json');
const TI_TRANSLATIONS = require(TI_TRANSLATIONS_PATH);
const FINAL_TRANSLATIONS = {};
const KEYS_WITH_PLURALS = [];

(async function () {
  const compiledProjectPath = path.join(OP_DIR, 'dist');
  const compiledProjectFiles = await getFilePaths(compiledProjectPath);

  // i18next-scanner's pluralization uses the `_plural` suffix,
  // which isn't supported in our version of react-i18next,
  // so we disable it in the parser and handle it ourselves
  const parser = new Parser({
    defaultNs: 'lms',
    plural: false,
    interpolation: { prefix: '%{', suffix: '}' }
  });

  for (const filePath of compiledProjectFiles) {
    if (filePathIsValid(filePath)) {
      const fileContents = await readFile(filePath, 'utf8');
      parser.parseFuncFromString(fileContents, { list: ['t'] });
    }
  }

  const sourceDefaultNamespace =
    TI_TRANSLATIONS.en && TI_TRANSLATIONS.en.lms ? TI_TRANSLATIONS.en.lms : {};

  gatherPluralizedKeys();

  const i18nStore = parser.get();
  // en is default lang and lms is default namespace, so all keys used should be in that object
  const i18nNSObject = i18nStore.en && i18nStore.en.lms ? i18nStore.en.lms : {};
  const usedTranslationKeys = Object.keys(i18nNSObject);

  for (const key of usedTranslationKeys) {
    const translationValue = i18nNSObject[key];

    // while the keys are saved in TI files as home.meta-title, the parser will automatically
    // turn that to `home: { 'meta-title': translationValue }`
    if (typeof translationValue === 'object') {
      const nestedKeys = Object.keys(translationValue);
      for (const nestedKey of nestedKeys) {
        const possibleKey = `${key}.${nestedKey}`;
        if (sourceDefaultNamespace[possibleKey]) {
          addToTranslations(possibleKey);
        }
      }
    } else {
      if (sourceDefaultNamespace[key]) {
        addToTranslations(key);
      }
    }
  }

  await writeFile(
    path.join(OP_DIR, 'locales/translations.json'),
    JSON.stringify(FINAL_TRANSLATIONS, null, 2)
  );
})()
  .then(() => {
    console.log('>>> Translations parsed');
    process.exit(0);
  })
  .catch(err => {
    console.error('>>> Error parsing translations', err.message);
    process.exit(1);
  });

function addToTranslations(key) {
  const translatedLanguages = Object.keys(TI_TRANSLATIONS);
  for (const lang of translatedLanguages) {
    if (!FINAL_TRANSLATIONS[lang]) {
      FINAL_TRANSLATIONS[lang] = { lms: {} };
    }

    if (translationExists(lang, key)) {
      const sourceTranslation = TI_TRANSLATIONS[lang].lms[key];
      FINAL_TRANSLATIONS[lang].lms[key] = sourceTranslation;

      if (KEYS_WITH_PLURALS.includes(key)) {
        const pluralizedKey = `${key}_other`;
        if (translationExists(lang, pluralizedKey)) {
          FINAL_TRANSLATIONS[lang].lms[pluralizedKey] = TI_TRANSLATIONS[lang].lms[pluralizedKey];
        }
      }
    }
  }
}

function translationExists(lang, key) {
  return TI_TRANSLATIONS[lang] && TI_TRANSLATIONS[lang].lms[key];
}

function gatherPluralizedKeys() {
  const pluralizedKeys = Object.keys(TI_TRANSLATIONS.en.lms).filter(key => key.includes('_other'));
  for (const pluralKey of pluralizedKeys) {
    KEYS_WITH_PLURALS.push(pluralKey.replace('_other', ''));
  }
}
