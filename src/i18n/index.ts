import Vue from 'vue';
import VueI18n, { LocaleMessages } from 'vue-i18n';

Vue.use(VueI18n);

/**
 * automatically loads translation json in ./locales
 * TODO: maybe add some performance improvement
 * @author The Batman
 * @date 2020-02-17
 * @returns {void}
 */
function loadLocaleMessages(): LocaleMessages {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages: LocaleMessages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

/**
 * enumerable list of supported languages
 * @date 2020-02-17
 * @returns {Enumerator}
 */
export enum SupportedLanguages {
  en = 'English (US)',
  id = 'Bahasa Indonesia',
  ru = 'русский',
  ar = 'العربية',
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages(),
});
