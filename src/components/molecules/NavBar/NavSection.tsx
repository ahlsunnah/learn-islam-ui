import cx from 'classnames'
import SwitchLanguageButton from 'components/atoms/SwitchLanguageButton/SwitchLanguageButton'
import { Link } from 'gatsby'
import React from 'react'
import { useTranslation } from 'react-i18next'
import structure from './structure'

type Props = {
  className?: string
}

const NavSection = ({ className }: Props) => {
  const { t } = useTranslation()

  return (
    <nav className={cx('flex1', className)}>
      <ul className="list flex flex-wrap justify-around items-center">
        {structure.map(({ title, link }) => (
          <li key={title}>
            <Link
              activeClassName="bb b--blue"
              className="ph2 no-underline"
              to={`${link === 'app/login/' ? '/' : t('localePath')}${link}`}
            >
              <span>{t(`${title}`) as string}</span>
            </Link>
          </li>
        ))}
        <li>
          <SwitchLanguageButton />
        </li>
        {/* <li>
      <Button rounded>{t.connect}</Button>
    </li> */}
      </ul>
    </nav>
  )
}
export default NavSection
