import HomeFooter from 'components/HomeFooter'
import * as React from 'react'
import HomeContentPresentation from './HomeContentPresentation'
import HomeFeatures from './HomeFeatures'
import HomeHero from './HomeHero'
import HomeNewsletter from './HomeNewsletter'
import {ObjectOfStrings} from 'interfaces/index'
import {IHomePageProps} from 'types/home'

interface Props {
  data: {
    otherLocaleTranslations: Object
    tracks: Array<Object>
    translations: ObjectOfStrings
  }
  pageContext: {
    otherLanguagePath: string
  }
}

const HomeContainer = ({
  data,
  pageContext: {otherLanguagePath},
}: IHomePageProps) => (
  <div>
    <HomeHero {...data} otherLanguagePath={otherLanguagePath} />
    <HomeContentPresentation
      text={data.translations.siteContentPresentation}
      title={data.translations.homeContentTitle}
    />
    <HomeFeatures {...data.translations} />
    {/* <HomeCourses {...data.translations} /> */}
    {/* <div className="mdc-theme--primary-bg" style={{height: '3px'}} /> */}
    <HomeNewsletter {...data.translations} />
    <HomeFooter
      t={data.translations}
      dark
      firstTrackSlug={`${data.translations.localePath}${data.api.tracks
        .edges[0] && data.api.tracks.edges[0].node.slug}`}
    />
  </div>
)
export default HomeContainer
