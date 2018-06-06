// @flow
import HomeFooter from 'components/HomeFooter'
import * as React from 'react'
import BlueHero from './BlueHero'
import Tracks from './Tracks'

type Props = {
  data: {
    otherLocaleTranslations: Object,
    tracks: Array,
    translations: Object,
  },
  pathContext: Object,
}
const TracksContainer = ({data}: Props) => (
  <div>
    <BlueHero {...data} />
    <Tracks tracks={data.tracks} localePath={data.translations.localePath} />
    <HomeFooter
      {...data.translations}
      firstTrackSlug={`${data.translations.localePath}${data.tracks[0] &&
        data.tracks[0].slug}`}
    />
  </div>
)
export default TracksContainer
