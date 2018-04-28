// @flow
import * as React from 'react'
import Link from 'gatsby-link'
import structure from './structure'
import Button from '../Button'

type Props = {
  localePath: string,
  otherLocaleTranslations: {
    localeName: string,
    localePath: string,
  },
  t: {},
}
const NavSection = ({localePath, otherLocaleTranslations, t}: Props) => (
  <section className="pv0 dn db-l mdc-toolbar__section mdc-toolbar__section mdc-toolbar__section--align-end">
    <nav className="flex1">
      <ul className="list flex flex-wrap justify-around items-center">
        {structure.map(({title, link}) => (
          <li key={title}>
            <Link
              activeClassName="bb b--blue"
              className="ph2 no-underline"
              to={`${localePath}${link}`}
            >
              <span className="toolbar-nav-link__text">{t[title]}</span>
            </Link>
          </li>
        ))}
        <li>
          <Link
            className="ph2 no-underline"
            to={otherLocaleTranslations.localePath}
          >
            <Button rounded stroked>
              {otherLocaleTranslations.localeName}
            </Button>
          </Link>
        </li>
        {/* <li>
      <Button rounded>{t.connect}</Button>
    </li> */}
      </ul>
    </nav>
  </section>
)
export default NavSection
