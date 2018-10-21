// @flow
import { Link } from 'gatsby'
import * as React from 'react'
import Button from '../Button'
import structure from './structure'

type Props = {
  localePath: string,
  otherLanguagePath: string,
  otherLocaleTranslations: {
    localeName: string,
  },
  t: {},
}
const NavSection = ({
  localePath,
  otherLanguagePath,
  otherLocaleTranslations,
  t,
}: Props) => (
  <section className="pv0 dn inline-flex-l mdc-toolbar__section mdc-toolbar__section mdc-toolbar__section--align-end">
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
          <Link className="ph2 no-underline" to={otherLanguagePath}>
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
