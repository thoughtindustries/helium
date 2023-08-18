const path = require('path');
const { readFile, writeFile } = require('fs/promises');
const Parser = require('i18next-scanner').Parser;
const { getFilePaths, filePathIsValid } = require('./helpers/filepaths');
const fsPromises = require('fs/promises');

async function processTranslations(TI_TRANSLATIONS, OP_DIR) {
  const FINAL_TRANSLATIONS = {};
  const KEYS_WITH_PLURALS = [];
  const compiledProjectPath = path.join(OP_DIR, 'dist');

  console.log('compiledProjectPath: ', compiledProjectPath);

  const compiledProjectFiles = await getFilePaths(compiledProjectPath);

  console.log('compiledProjectPath: ', compiledProjectPath);

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
      console.log('fileContents: ', fileContents);
      parser.parseFuncFromString(fileContents, { list: ['t'] });
    }
  }

  const sourceDefaultNamespace =
    TI_TRANSLATIONS.en && TI_TRANSLATIONS.en.lms ? TI_TRANSLATIONS.en.lms : {};

  console.log('sourceDefaultNamespace: ', sourceDefaultNamespace);

  gatherPluralizedKeys();

  const i18nStore = parser.get();

  // en is default lang and lms is default namespace, so all keys used should be in that object
  const i18nNSObject = i18nStore.en && i18nStore.en.lms ? i18nStore.en.lms : {};

  console.log('i18nNSObject: ', i18nNSObject);

  const usedTranslationKeys = Object.keys(i18nNSObject);

  console.log('usedTranslationsKeys: ', usedTranslationKeys);

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
  console.log('FINAL_TRANSLATIONS: ', FINAL_TRANSLATIONS);
  return FINAL_TRANSLATIONS;

  function addToTranslations(key) {
    const translatedLanguages = Object.keys(TI_TRANSLATIONS);
    for (const lang of translatedLanguages) {
      if (!FINAL_TRANSLATIONS[lang]) {
        FINAL_TRANSLATIONS[lang] = { lms: {} };
      }

      if (translationExists(lang, key)) {
        console.log('TRANSLATIONS_EXIST');
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
  function gatherPluralizedKeys() {
    const pluralizedKeys = Object.keys(TI_TRANSLATIONS.en.lms).filter(key =>
      key.includes('_other')
    );
    for (const pluralKey of pluralizedKeys) {
      KEYS_WITH_PLURALS.push(pluralKey.replace('_other', ''));
    }
  }
  function translationExists(lang, key) {
    return TI_TRANSLATIONS[lang] && TI_TRANSLATIONS[lang].lms[key];
  }
}

async function readTranslations(OP_DIR) {
  const TI_TRANSLATIONS_PATH = path.join(OP_DIR, 'locales/translations.json');
  const fileContent = await fsPromises.readFile(TI_TRANSLATIONS_PATH, 'utf8');
  const TI_TRANSLATIONS = JSON.parse(fileContent);
  return TI_TRANSLATIONS;
}

async function writeTranslations(FINAL_TRANSLATIONS, OP_DIR) {
  await writeFile(
    path.join(OP_DIR, 'locales/translations.json'),
    JSON.stringify(FINAL_TRANSLATIONS, null, 2)
  );
}

async function mainFunction() {
  try {
    const OP_DIR = process.cwd();
    const TI_TRANSLATIONS = await readTranslations(OP_DIR);
    const translation_to_write = await processTranslations(TI_TRANSLATIONS, OP_DIR);
    if (Object.keys(translation_to_write).length !== 0) {
      await writeTranslations(translation_to_write, OP_DIR);
      console.log('>>> Translations parsed');
      process.exit(0);
    }
  } catch (err) {
    console.log('>>> Error parsing translations:', err.message);
    process.exit(1);
  }
}

module.exports = { processTranslations, readTranslations, writeTranslations, mainFunction };
