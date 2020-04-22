import { Link } from 'gatsby'
import cx from 'classnames'
import { useLocation } from '@reach/router'
import React, { useCallback, useMemo } from 'react'
import Button from '../../atoms/Button/Button'
import structure from './structure'
import { useTranslation } from 'react-i18next'

const cleanPathName = (previousPath: string, currentLocale: string) => {
  return previousPath.replace(`/${currentLocale === 'ar' ? '' : currentLocale}`, '')
}

const removeExtraSlashes = (string: string) => string.replace(/^\/+/g, '')

type Props = {
  className?: string
}

const NavSection = ({ className }: Props) => {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const otherTranslationsLocale = useMemo(() => t('otherTranslationsLocale'), [t])

  const destination = useMemo(
    () =>
      location.pathname === '/login'
        ? 'login'
        : removeExtraSlashes(
            `${otherTranslationsLocale === 'ar' ? '' : otherTranslationsLocale}/${cleanPathName(
              location.pathname,
              t('locale')
            )}`
          ),
    [location, otherTranslationsLocale, t]
  )

  const changeLanguage = useCallback(() => {
    i18n.changeLanguage(t('otherTranslationsLocale'))
  }, [i18n, t])

  return (
    <nav className={cx('flex1', className)}>
      <ul className="list flex flex-wrap justify-around items-center">
        {structure.map(({ title, link }) => (
          <li key={title}>
            <Link activeClassName="bb b--blue" className="ph2 no-underline" to={`${t('localePath')}${link}`}>
              <span>{t(`${title}`) as string}</span>
            </Link>
          </li>
        ))}
        <li>
          <Link className="ph2 no-underline" to={`/${destination}`}>
            <Button rounded outlined onClick={changeLanguage}>
              {t('otherTranslationsLocaleName')}
            </Button>
          </Link>
        </li>
        {/* <li>
      <Button rounded>{t.connect}</Button>
    </li> */}
      </ul>
    </nav>
  )
}
export default NavSection
