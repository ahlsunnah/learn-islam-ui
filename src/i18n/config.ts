import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
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
    lng: 'ar',
    ns: ['translations'],
    defaultNS: 'translations',
    returnObjects: true,
    react: {
      wait: true,
    },
  })

i18n.languages = ['ar', 'fr']

export default i18n
