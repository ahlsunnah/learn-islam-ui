import * as React from 'react'
import 'styles/toolbar.scss'
import LogoSection from './LogoSection'
import MobileSection from './MobileSection'
import NavSection from './NavSection'
import {IHomeOtherLocaleTranslations, IHomeTranslations} from 'types/home'
import {INavBarTranslations} from '../../types/navbar'

interface Props {
  otherLanguagePath: string
  otherLocaleTranslations: IHomeOtherLocaleTranslations
  t: INavBarTranslations
}

const NavBar = ({otherLanguagePath, otherLocaleTranslations, t}: Props) => (
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
          otherLanguagePath={otherLanguagePath}
          otherLocaleTranslations={otherLocaleTranslations}
          t={t}
        />
        <MobileSection
          otherLocaleTranslations={otherLocaleTranslations}
          t={t}
        />
      </div>
    </div>
  </header>
)
export default NavBar
