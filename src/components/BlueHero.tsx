import NavBar from 'components/NavBar'
import * as React from 'react'
import {ITracksOtherLocaleTranslations} from '../types/tracks'
import {INavBarTranslations} from 'types/navbar'

interface Props {
  description?: string
  otherLanguagePath: string
  otherLocaleTranslations: ITracksOtherLocaleTranslations
  title: string
  translations: INavBarTranslations
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
      t={t}
    />
    <div className="mt64 pt4 pb3 tc white">
      <h1 className="f3 f2-ns fw4">{title}</h1>
      <p className="">{description}</p>
    </div>
  </div>
)
export default HomeHero
