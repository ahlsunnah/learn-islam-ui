import { useLocation } from '@reach/router'
import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

const cleanPathName = (previousPath: string, currentLocale: string) => {
  return previousPath.replace(`/${currentLocale === 'ar' ? '' : currentLocale}`, '')
}

const removeExtraSlashes = (string: string) => string.replace(/^\/+/g, '/')

const useLanguageSwitcher = () => {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const otherTranslationsLocale = useMemo(() => t('otherTranslationsLocale'), [t])

  const otherLanguagePath = useMemo(
    () =>
      location.pathname.includes('/app')
        ? location.pathname
        : removeExtraSlashes(
            `${otherTranslationsLocale === 'ar' ? '' : otherTranslationsLocale}/${cleanPathName(
              location.pathname,
              t('locale')
            )}`
          ),
    [location, otherTranslationsLocale, t]
  )

  const handleChangeLanguage = useCallback(() => {
    i18n.changeLanguage(t('otherTranslationsLocale'))
  }, [i18n, t])
  return {
    otherLanguagePath,
    handleChangeLanguage,
  }
}

export default useLanguageSwitcher
