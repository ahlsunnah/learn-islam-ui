import {Link} from 'gatsby'
import * as React from 'react'
import {ObjectOfStrings} from 'interfaces'
import Button from '../Button'
import structure from './structure'
import {IHomeOtherLocaleTranslations} from '../../types/home'
import {INavBarTranslations} from '../../types/navbar'

interface Props {
  otherLanguagePath: string
  otherLocaleTranslations: IHomeOtherLocaleTranslations
  t: INavBarTranslations
}

const NavSection = ({otherLanguagePath, otherLocaleTranslations, t}: Props) => (
  <section className="pv0 dn inline-flex-l mdc-toolbar__section mdc-toolbar__section mdc-toolbar__section--align-end">
    <nav className="flex1">
      <ul className="list flex flex-wrap justify-around items-center">
        {structure.map(({title, link}) => (
          <li key={title}>
            <Link
              activeClassName="bb b--blue"
              className="ph2 no-underline"
              to={`${t.localePath}${link}`}
            >
              <span className="toolbar-nav-link__text">
                {t[title] as string}
              </span>
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
