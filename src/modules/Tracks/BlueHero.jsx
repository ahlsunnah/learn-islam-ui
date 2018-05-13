// @flow
import NavBar from 'components/NavBar'
import * as React from 'react'

type Props = {
  otherLocaleTranslations: {},
  translations: {
    localePath: string,
    tracksPageTitle: string,
    tracksPageDescription: string,
  },
}
const HomeHero = ({otherLocaleTranslations, translations: t}: Props) => (
  <div className="flex flex-column mdc-theme--primary-bg">
    <NavBar
      localePath={t.localePath}
      otherLocaleTranslations={otherLocaleTranslations}
      translations={t}
    />
    <div className="mt64 pt4 pb3 tc white">
      <h1 className="f3 f2-ns fw4">{t.tracksPageTitle}</h1>
      <p className="">{t.tracksPageDescription}</p>
    </div>
  </div>
)
export default HomeHero
