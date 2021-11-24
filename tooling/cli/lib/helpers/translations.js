const fetch = require('isomorphic-unfetch');
const path = require('path');
const fs = require('fs-extra');

const TRANSLATIONS_QUERY = /* GraphQL */ `
  query CompanyTranslationsQuery($namespace: String!) {
    CompanyTranslations(namespace: $namespace) {
      id
      lang
      translations
    }
  }
`;

const fetchTranslations = async instance => {
  return new Promise((resolve, reject) => {
    const endpoint = `${instance.instanceUrl}/helium?apiKey=${instance.apiKey}`;
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: TRANSLATIONS_QUERY,
        variables: { namespace: 'lms' }
      })
    };

    fetch(endpoint, options)
      .then(r => r.json())
      .then(res => {
        const resObj = res[0];
        if (resObj.data && resObj.data.CompanyTranslations) {
          resolve(resObj.data.CompanyTranslations);
        } else {
          const err = resObj.errors[0];
          reject(err.message);
        }
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const writeTranslationFile = async (dir, translations) => {
  const dirPath = path.join(dir, 'locales');

  const translationsHash = translations.reduce((hash, translationObj) => {
    const { lang, translations } = translationObj;
    const formattedTranslations = reKeyPluralizations(translations);

    hash[lang] = { lms: formattedTranslations };
    return hash;
  }, {});

  const fileName = path.join(dirPath, 'translations-source.json');

  return fs.writeFile(fileName, JSON.stringify(translationsHash, null, 2));
};

// react-i18next handles pluralizations differently than the
// i18 library used in the TI app, so plurals have to be reformatted
const reKeyPluralizations = translations => {
  for (const key of Object.keys(translations)) {
    const translationValue = translations[key];
    if (translationValue.includes('||||')) {
      const [singular, plural] = translationValue.split('||||');
      translations[key] = singular.trim();
      translations[`${key}_other`] = plural.trim();
    }
  }

  return translations;
};

module.exports = { fetchTranslations, writeTranslationFile };
