import * as React from 'react'
import cx from 'classnames'
import NavBar from 'components/NavBar'
import HomeTrackCard from './HomeTrackCard'
import {
  IHomeOtherLocaleTranslations,
  IHomeTracks,
  IHomeTranslations,
} from 'types/home'

interface Props {
  api: {tracks: IHomeTracks}
  otherLanguagePath: string
  otherLocaleTranslations: IHomeOtherLocaleTranslations
  translations: IHomeTranslations
}
const HomeHero = ({
  api: {tracks},
  otherLanguagePath,
  otherLocaleTranslations,
  translations: t,
}: Props) => {
  return (
    <div className="min-vh-100 flex flex-column mdc-theme--primary-bg bg-pattern">
      <NavBar
        otherLanguagePath={otherLanguagePath}
        otherLocaleTranslations={otherLocaleTranslations}
        t={t}
      />
      <div className="mt64 min-h-512-ns flex1 flex flex-column flex-row-ns justify-between items-center">
        <div className="mt4 mt0-ns ph5 flex1 white">
          <div
            className={cx('tc f4 f3-ns fw4 title-with-subtitle', {
              'tr-ns': otherLocaleTranslations.localeName === 'Français',
              'tl-ns': otherLocaleTranslations.localeName !== 'Français',
            })}
            dangerouslySetInnerHTML={{__html: t.homeTitle}}
          />
          <p className="mt4 pv3-ns f3-ns">{t.homeDescription}</p>
        </div>
        <div className="ph4 flex1">
          {tracks.edges.map(({node: track}) => (
            <HomeTrackCard
              key={track.slug}
              {...track}
              localePath={t.localePath}
              t={t}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default HomeHero
