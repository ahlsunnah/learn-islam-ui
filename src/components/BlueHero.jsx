// @flow
import NavBar from 'components/NavBar'
import * as React from 'react'

type Props = {
  description?: string,
  otherLocaleTranslations: Object,
  title: string,
  translations: Object,
}
const HomeHero = ({
  description,
  otherLocaleTranslations,
  title,
  translations: t,
}: Props) => (
  <div className="flex flex-column mdc-theme--primary-bg">
    <NavBar
      localePath={t.localePath}
      otherLocaleTranslations={otherLocaleTranslations}
      translations={t}
    />
    <div className="mt64 pt4 pb3 tc white">
      <h1 className="f3 f2-ns fw4">{title}</h1>
      <p className="">{description}</p>
    </div>
  </div>
)
export default HomeHero
