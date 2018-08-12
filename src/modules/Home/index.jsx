// @flow
import HomeFooter from 'components/HomeFooter'
import * as React from 'react'
import HomeContentPresentation from './HomeContentPresentation'
import HomeFeatures from './HomeFeatures'
import HomeHero from './HomeHero'
import HomeNewsletter from './HomeNewsletter'

type Props = {
  data: {
    otherLocaleTranslations: Object,
    tracks: Array<Object>,
    translations: Object,
  },
  pathContext: Object,
}
const HomeContainer = ({data}: Props) => (
  <div>
    <HomeHero {...data} />
    <HomeContentPresentation
      text={data.translations.siteContentPresentation}
      title={data.translations.homeContentTitle}
    />
    <HomeFeatures {...data.translations} />
    {/* <HomeCourses {...data.translations} /> */}
    {/* <div className="mdc-theme--primary-bg" style={{height: '3px'}} /> */}
    <HomeNewsletter {...data.translations} />
    <HomeFooter
      {...data.translations}
      dark
      firstTrackSlug={`${data.translations.localePath}${data.tracks[0] &&
        data.tracks[0].slug}`}
    />
  </div>
)
export default HomeContainer
