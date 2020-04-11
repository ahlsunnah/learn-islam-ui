import NavBar from 'components/NavBar'
import React from 'react'
import {
  TTracksPageOtherTranslationsFragment,
  TAboutUsOtherTranslationFragment,
  TTracksPageTranslationsFragment,
  TAboutUsTranslationsFragment,
} from '../graphqlTypes'

interface IProps {
  description?: string
  otherLanguagePath: string
  otherLocaleTranslations:
    | TTracksPageOtherTranslationsFragment
    | TAboutUsOtherTranslationFragment
  title: string
  translations: TTracksPageTranslationsFragment | TAboutUsTranslationsFragment
}
const BlueHero: React.FC<IProps> = ({
  description,
  otherLanguagePath,
  otherLocaleTranslations,
  title,
  translations: t,
}) => (
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
export default BlueHero
