// @flow
import BlueHero from 'components/BlueHero'
import HomeFooter from 'components/HomeFooter'
import * as React from 'react'
import Tracks from './Tracks'

type Props = {
  data: {
    otherLocaleTranslations: Object,
    tracks: Array<Object>,
    translations: Object,
  },
  pageContext: {
    otherLanguagePath: string,
  },
}
const TracksContainer = ({data, pageContext: {otherLanguagePath}}: Props) => (
  <div>
    <BlueHero
      description={data.translations.tracksPageDescription}
      otherLanguagePath={otherLanguagePath}
      otherLocaleTranslations={data.otherLocaleTranslations}
      translations={data.translations}
      title={data.translations.tracksPageTitle}
    />
    <Tracks
      tracks={data.tracks}
      localePath={data.translations.localePath}
      soonString={data.translations.soon}
    />
    <HomeFooter
      {...data.translations}
      firstTrackSlug={`${data.translations.localePath}${data.tracks[0] &&
        data.tracks[0].slug}`}
    />
  </div>
)
export default TracksContainer
