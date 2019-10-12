// TODO fix https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
import cx from 'classnames'
import {Link} from 'gatsby'
import logoAr from 'images/logo-ar.png'
import logoFr from 'images/logo-fr.png'
import * as React from 'react'
import 'styles/drawer.scss'
import Button from '../Button'
import structure from './structure'
import {INavBarTranslations} from '../../types/navbar'

interface Props {
  isOpen: boolean
  otherLocaleTranslations: {
    localeName: string
    localePath: string
  }
  t: INavBarTranslations
  toggleDrawer: () => void
}
const TemporaryDrawer = ({
  isOpen,
  otherLocaleTranslations,
  t,
  toggleDrawer,
}: Props) => (
  <aside
    className={cx('mdc-drawer mdc-drawer--temporary mdc-drawer--animating', {
      'mdc-drawer--open': isOpen,
    })}
    onKeyUp={toggleDrawer}
    onClick={toggleDrawer}
  >
    <nav className="mdc-drawer__drawer">
      <header className="mdc-drawer__header">
        <div className="mdc-drawer__header-content">
          <Link to={t.localePath}>
            <img
              alt={t.siteName}
              height="60px"
              src={t.locale === 'ar' ? logoAr : logoFr}
            />
          </Link>
          <Link
            className="absolute top-1 right-1 ph2 no-underline"
            to={otherLocaleTranslations.localePath}
          >
            <Button rounded outlined>
              {otherLocaleTranslations.localeName}
            </Button>
          </Link>
        </div>
      </header>
      <nav className="mdc-drawer__content mdc-list">
        {structure.map(({title, link, Icon}) => (
          <Link
            key={title}
            activeClassName="mdc-list-item--activated"
            className="mdc-list-item"
            // activeClassName="bb b--blue"
            // className="ph2 no-underline"
            to={`${t.localePath}${link}`}
          >
            <Icon className="mdc-list-item__graphic" />
            <span className="">{t[title]}</span>
          </Link>
        ))}
      </nav>
    </nav>
  </aside>
)

export default TemporaryDrawer
