import BlueHero from 'components/molecules/Hero/BlueHero'
import HomeFooter from 'components/molecules/Footer/HomeFooter'
import React from 'react'
import Tracks from './Tracks'
import { ITracksPageProps } from 'types/tracks'

const TracksContainer = ({ data }: ITracksPageProps) => (
  <div>
    <BlueHero description={data.translations.tracksPageDescription} title={data.translations.tracksPageTitle} />
    <Tracks tracks={data.api.tracks} localePath={data.translations.localePath} soonString={data.translations.soon} />
    <HomeFooter firstTrackSlug={`${data.translations.localePath}${data.api.tracks[0] && data.api.tracks[0].slug}`} />
  </div>
)
export default TracksContainer
