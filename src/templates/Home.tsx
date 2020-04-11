import React from 'react'
import {graphql} from 'gatsby'
import Helmet from 'react-helmet'
import cx from 'classnames'
import HomeContainer from 'modules/Home'
import './styles.css'
import {IHomePageProps} from 'types/home'

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
  fragment HomeTrack on api_tracks {
    id
    order
    slug
    soon
    translations(where: {locale_code: {_eq: $localeEnum}}) {
      title
      description
    }
  }
  fragment HomeTranslations on TranslationsJson {
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
  fragment HomeOtherTranslations on TranslationsJson {
    locale
    localeName
    localePath
  }
  query homeQuery($locale: String!, $localeEnum: api_locales_enum!) {
    translations: translationsJson(locale: {eq: $locale}) {
      ...HomeTranslations
    }
    otherLocaleTranslations: translationsJson(locale: {ne: $locale}) {
      ...HomeOtherTranslations
    }
    api {
      tracks(limit: 3) {
        ...HomeTrack
      }
    }
  }
`
