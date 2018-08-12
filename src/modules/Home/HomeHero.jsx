// @flow
import * as React from 'react'
import cx from 'classnames'
import NavBar from 'components/NavBar'
import heroPattern from 'images/heroPattern2.svg'
import HomeTrackCard from './HomeTrackCard'

type Props = {
  otherLocaleTranslations: {},
  tracks: Array<Object>,
  translations: {
    homeDescription: string,
    homeTitle: string,
    localePath: string,
    soon: string,
    start: string,
  },
}
const HomeHero = ({
  otherLocaleTranslations,
  tracks,
  translations: t,
}: Props) => (
  <div
    className="min-vh-100 flex flex-column mdc-theme--primary-bg"
    style={{
      backgroundImage: `url(${heroPattern})`,
      backgroundSize: '30%',
    }}
  >
    <NavBar
      localePath={t.localePath}
      otherLocaleTranslations={otherLocaleTranslations}
      translations={t}
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
        {tracks.map((track) => (
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
export default HomeHero
