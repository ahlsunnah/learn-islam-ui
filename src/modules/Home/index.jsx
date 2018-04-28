// @flow
import * as React from 'react'
import HomeHero from './HomeHero'
import HomeCourses from './HomeCourses'
import HomeFeatures from './HomeFeatures'
import HomeFooter from '../../components/HomeFooter'
import HomeNewsletter from './HomeNewsletter'
import Footer from '../../components/Footer'

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
    <HomeCourses {...data.translations} />
    <HomeNewsletter {...data.translations} />
    <HomeFooter
      {...data.translations}
      firstTrackSlug={`${data.translations.localePath}${data.tracks[0] &&
        data.tracks[0].slug}`}
    />
    <Footer />
  </div>
)
export default HomeContainer
