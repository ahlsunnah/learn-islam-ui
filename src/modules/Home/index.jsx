// @flow
import HomeFooter from 'components/HomeFooter'
import * as React from 'react'
import HomeFeatures from './HomeFeatures'
import HomeHero from './HomeHero'
import HomeNewsletter from './HomeNewsletter'

type Props = {
  data: {
    otherLocaleTranslations: Object,
    tracks: Array,
    translations: Object,
  },
  pathContext: Object,
}
const HomeContainer = ({data}: Props) => (
  <div>
    <HomeHero {...data} />
    <HomeFeatures {...data.translations} />
    {/* <HomeCourses {...data.translations} /> */}
    <HomeNewsletter {...data.translations} />
    <HomeFooter
      {...data.translations}
      firstTrackSlug={`${data.translations.localePath}${data.tracks[0] &&
        data.tracks[0].slug}`}
    />
  </div>
)
export default HomeContainer
