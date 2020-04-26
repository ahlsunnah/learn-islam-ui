import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const isBrowser = () => typeof window !== 'undefined'

const localStorageName = 'LearnIslam-i18nextLng'

const languageDetectorOptions = {
  // order and from where user language should be detected
  order: ['localStorage'],

  // keys or params to lookup language from
  lookupLocalStorage: localStorageName,

  // cache user language on
  caches: ['localStorage'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

  // only detect languages that are in the whitelist
  checkWhitelist: false,
}

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    detection: languageDetectorOptions,
    fallbackLng: 'ar',
    debug: process.env.NODE_ENV === 'development',
    resources: {
      ar: {
        translations: require('../locales/ar.json'),
      },
      fr: {
        translations: require('../locales/fr.json'),
      },
    },
    lng: (isBrowser() && window.localStorage[localStorageName]) || 'ar',
    ns: ['translations'],
    defaultNS: 'translations',
    returnObjects: true,
    react: {
      wait: true,
    },
  })

i18n.languages = ['ar', 'fr']

export default i18n
