import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import cx from 'classnames'
import AboutUsContainer from 'modules/AboutUs'
import { IAboutUsProps } from 'types/aboutUs'
import './styles.css'

const AboutUs = (props: IAboutUsProps) => (
  <div className={cx({ rtl: props.pageContext.locale === 'ar' })}>
    <Helmet>
      <html lang={props.pageContext.locale} />
    </Helmet>
    <AboutUsContainer {...props} />
  </div>
)

export default AboutUs

export const pageQuery = graphql`
  fragment AboutUsTrack on api_tracks {
    id
    slug
  }

  fragment AboutUsTranslations on TranslationsJson {
    aboutUs
    aboutUsPageTitle
    aboutUsPageContent
    connect
    courses
    copyright
    footerSocialTitle
    homeFooterCTA
    homeStartTrack
    locale
    localeName
    localePath
    siteName
    siteSlogan
    tracks
    urlFacebook
    urlTelegram
    urlTwitter
    urlYoutube
  }

  fragment AboutUsOtherTranslation on TranslationsJson {
    localeName
    localePath
  }

  query aboutUsQuery($locale: String!) {
    api {
      tracks(limit: 1) {
        ...AboutUsTrack
      }
    }
    translations: translationsJson(locale: { eq: $locale }) {
      ...AboutUsTranslations
    }
    otherLocaleTranslations: translationsJson(locale: { ne: $locale }) {
      ...AboutUsOtherTranslation
    }
  }
`
