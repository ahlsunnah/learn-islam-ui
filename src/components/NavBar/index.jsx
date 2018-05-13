// @flow
import * as React from 'react'
import 'styles/toolbar.scss'
import LogoSection from './LogoSection'
import MobileSection from './MobileSection'
import NavSection from './NavSection'

type Props = {
  localePath: string,
  otherLocaleTranslations: {
    localeName: string,
    localePath: string,
  },
  translations: {
    courses: string,
    tracks: string,
    aboutUs: string,
    connect: string,
    siteName: string,
  },
}

const NavBar = ({
  localePath,
  otherLocaleTranslations,
  translations: t,
}: Props) => (
  <header className="mdc-toolbar mdc-toolbar--fixed mdc-toolbar--platform">
    <div className="pv1 mdc-toolbar__row">
      <LogoSection localePath={localePath} siteName={t.siteName} />
      <NavSection
        localePath={localePath}
        otherLocaleTranslations={otherLocaleTranslations}
        t={t}
      />
      <MobileSection
        localePath={localePath}
        otherLocaleTranslations={otherLocaleTranslations}
        t={t}
      />
    </div>
  </header>
)
export default NavBar
