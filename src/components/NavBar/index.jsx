// @flow
import * as React from 'react'
import 'styles/toolbar.scss'
import LogoSection from './LogoSection'
import MobileSection from './MobileSection'
import NavSection from './NavSection'

type Props = {
  otherLocaleTranslations: {
    localeName: string,
    localePath: string,
  },
  translations: {
    aboutUs: string,
    connect: string,
    courses: string,
    localePath: string,
    siteName: string,
    tracks: string,
  },
}

const NavBar = ({otherLocaleTranslations, translations: t}: Props) => (
  <header className="mdc-toolbar mdc-toolbar--fixed mdc-toolbar--platform">
    <div className="pv1 mdc-toolbar__row">
      <LogoSection
        localePath={t.localePath}
        siteName={t.siteName}
        otherLocaleTranslations={otherLocaleTranslations}
      />
      <NavSection
        localePath={t.localePath}
        otherLocaleTranslations={otherLocaleTranslations}
        t={t}
      />
      <MobileSection
        localePath={t.localePath}
        otherLocaleTranslations={otherLocaleTranslations}
        t={t}
      />
    </div>
  </header>
)
export default NavBar
