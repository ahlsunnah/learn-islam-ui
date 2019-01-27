import BlueHero from 'components/BlueHero'
import HomeFooter from 'components/HomeFooter'
import * as React from 'react'
import Tracks from './Tracks'
import {ITracksPageProps} from 'types/tracks'

const TracksContainer = ({
  data,
  pageContext: {otherLanguagePath},
}: ITracksPageProps) => (
  <div>
    <BlueHero
      description={data.translations.tracksPageDescription}
      otherLanguagePath={otherLanguagePath}
      otherLocaleTranslations={data.otherLocaleTranslations}
      translations={data.translations}
      title={data.translations.tracksPageTitle}
    />
    <Tracks
      tracks={data.api.tracks.edges}
      localePath={data.translations.localePath}
      soonString={data.translations.soon}
    />
    <HomeFooter
      t={data.translations}
      firstTrackSlug={`${data.translations.localePath}${data.api.tracks
        .edges[0] && data.api.tracks.edges[0].node.slug}`}
    />
  </div>
)
export default TracksContainer
