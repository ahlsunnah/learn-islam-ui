import * as React from 'react'
import {graphql} from 'gatsby'
import Helmet from 'react-helmet'
import cx from 'classnames'
import HomeContainer from 'modules/Home'
import {IHomePageProps} from 'types/home'
import './styles.css'

const Home = (props: IHomePageProps): React.ReactNode => (
  <div className={cx({rtl: props.pageContext.locale === 'ar'})}>
    <Helmet>
      <html lang={props.pageContext.locale} />
    </Helmet>
    <HomeContainer {...props} />
  </div>
)

export default Home

// $FlowIgnore
export const pageQuery = graphql`
  query homeQuery($locale: String!) {
    translations: translationsJson(locale: {eq: $locale}) {
      aboutUs
      connect
      copyright
      courses
      enroll
      feature1Text
      feature2Text
      feature3Text
      feature1Title
      feature2Title
      feature3Title
      featuredCoursesTitle
      featuresTitle
      footerSocialTitle
      homeTitle
      homeDescription
      homeEmailTitle
      homeEmailPlaceHolder
      homeFooterCTA
      homeStartTrack
      locale
      localeName
      localePath
      newsletterEmailNotValid
      newsletterSubscribed
      newsletterSuccess
      siteContentPresentation
      homeContentTitle
      siteName
      siteSlogan
      soon
      start
      tracks
      urlFacebook
      urlTelegram
      urlTwitter
      urlYoutube
    }
    otherLocaleTranslations: translationsJson(locale: {ne: $locale}) {
      locale
      localeName
      localePath
    }
    api {
      tracks: allTracks(first: 3) {
        edges {
          node {
            id
            order
            slug
            soon
            translations(locale: $locale) {
              edges {
                node {
                  title
                  description
                }
              }
            }
          }
        }
      }
    }
  }
`
