// @flow
import * as React from 'react'
import 'styles/toolbar.scss'
import LogoSection from './LogoSection'
import MobileSection from './MobileSection'
import NavSection from './NavSection'

type Props = {
  otherLanguagePath: string,
  otherLocaleTranslations: {
    localeName: string,
    localePath: string,
  },
  translations: {
    aboutUs: string,
    connect: string,
    courses: string,
    locale: string,
    localePath: string,
    siteName: string,
    tracks: string,
  },
}

const NavBar = ({
  otherLanguagePath,
  otherLocaleTranslations,
  translations: t,
}: Props) => (
  <header className="mdc-toolbar mdc-toolbar--fixed mdc-toolbar--platform">
    <div className="dn-ns db">
      <div className="flex justify-between pv1 mdc-toolbar__row">
        <div className="flex2" />
        <LogoSection
          locale={t.locale}
          localePath={t.localePath}
          siteName={t.siteName}
        />
        <div className="flex2 tl">
          <MobileSection
            localePath={t.localePath}
            otherLanguagePath={otherLanguagePath}
            otherLocaleTranslations={otherLocaleTranslations}
            t={t}
          />
        </div>
      </div>
    </div>

    <div className="db-ns dn">
      <div className="pv1 mdc-toolbar__row">
        <LogoSection
          locale={t.locale}
          localePath={t.localePath}
          siteName={t.siteName}
        />
        <NavSection
          localePath={t.localePath}
          otherLanguagePath={otherLanguagePath}
          otherLocaleTranslations={otherLocaleTranslations}
          t={t}
        />
        <MobileSection
          localePath={t.localePath}
          otherLanguagePath={otherLanguagePath}
          otherLocaleTranslations={otherLocaleTranslations}
          t={t}
        />
      </div>
    </div>
  </header>
)
export default NavBar
