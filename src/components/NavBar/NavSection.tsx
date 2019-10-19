import {Link} from 'gatsby'
import cx from 'classnames'
import * as React from 'react'
import Button from '../Button'
import structure from './structure'
import {IHomeOtherLocaleTranslations} from '../../types/home'
import {INavBarTranslations} from '../../types/navbar'

interface Props {
  className?: string
  otherLanguagePath: string
  otherLocaleTranslations: IHomeOtherLocaleTranslations
  t: INavBarTranslations
}

const NavSection = ({
  className,
  otherLanguagePath,
  otherLocaleTranslations,
  t,
}: Props) => (
  <nav className={cx('flex1', className)}>
    <ul className="list flex flex-wrap justify-around items-center">
      {structure.map(({title, link}) => (
        <li key={title}>
          <Link
            activeClassName="bb b--blue"
            className="ph2 no-underline"
            to={`${t.localePath}${link}`}
          >
            <span>{t[title] as string}</span>
          </Link>
        </li>
      ))}
      <li>
        <Link className="ph2 no-underline" to={otherLanguagePath}>
          <Button rounded outlined>
            {otherLocaleTranslations.localeName}
          </Button>
        </Link>
      </li>
      {/* <li>
      <Button rounded>{t.connect}</Button>
    </li> */}
    </ul>
  </nav>
)
export default NavSection
