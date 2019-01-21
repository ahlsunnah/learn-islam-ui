import NavBar from 'components/NavBar'
import * as React from 'react'
import {ObjectOfStrings} from 'interfaces'

interface Props {
  description?: string
  otherLanguagePath: string
  otherLocaleTranslations: ObjectOfStrings
  title: string
  translations: ObjectOfStrings
}
const HomeHero = ({
  description,
  otherLanguagePath,
  otherLocaleTranslations,
  title,
  translations: t,
}: Props) => (
  <div className="flex flex-column mdc-theme--primary-bg">
    <NavBar
      otherLocaleTranslations={otherLocaleTranslations}
      otherLanguagePath={otherLanguagePath}
      translations={t}
    />
    <div className="mt64 pt4 pb3 tc white">
      <h1 className="f3 f2-ns fw4">{title}</h1>
      <p className="">{description}</p>
    </div>
  </div>
)
export default HomeHero
