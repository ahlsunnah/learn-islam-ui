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
  pathContext: Object,
}
const TracksContainer = ({data}: Props) => (
  <div>
    <BlueHero
      {...data}
      title={data.translations.tracksPageTitle}
      description={data.translations.tracksPageDescription}
    />
    <Tracks tracks={data.tracks} localePath={data.translations.localePath} />
    <HomeFooter
      {...data.translations}
      firstTrackSlug={`${data.translations.localePath}${data.tracks[0] &&
        data.tracks[0].slug}`}
    />
  </div>
)
export default TracksContainer
