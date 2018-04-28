// @flow
import * as React from 'react'
import HomeHero from '../components/HomeHero'
import HomeCourses from '../components/HomeCourses'
import HomeFeatures from '../components/HomeFeatures'
import HomeFooter from '../components/HomeFooter'
import HomeNewsletter from '../components/HomeNewsletter'
import Footer from '../components/Footer'

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
