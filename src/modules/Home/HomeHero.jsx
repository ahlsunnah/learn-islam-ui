// @flow
import * as React from 'react'
import HomeTrackCard from './HomeTrackCard'
import NavBar from '../../components/NavBar'
import heroPattern from '../../images/heroPattern.svg'

type Props = {
  otherLocaleTranslations: {},
  tracks: Array,
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
    className="min-vh-100 flex flex-column mdc-theme--primary-bg cover"
    style={{
      backgroundImage: `url(${heroPattern})`,
    }}
  >
    <NavBar
      localePath={t.localePath}
      otherLocaleTranslations={otherLocaleTranslations}
      translations={t}
    />
    <div className="mt64 min-h-512 flex1 flex flex-column flex-row-ns justify-between items-center">
      <div className="mt4 mt0-ns ph5 flex1 white">
        <h1 className="f3 f2-ns fw4">{t.homeTitle}</h1>
        <p className="">{t.homeDescription}</p>
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
