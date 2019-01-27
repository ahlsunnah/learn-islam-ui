import React from 'react'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import cx from 'classnames'
import AboutUsContainer from 'modules/AboutUs'
import './styles.css'
import {IAboutUsProps} from 'types/aboutUs'

const AboutUs = (props: IAboutUsProps) => (
  <div className={cx({rtl: props.pageContext.locale === 'ar'})}>
    <Helmet>
      <html lang={props.pageContext.locale} />
    </Helmet>
    <AboutUsContainer {...props} />
  </div>
)

export default AboutUs

export const pageQuery = graphql`
  query aboutUsQuery($locale: String!) {
    api {
      tracks: allTracks(first: 1) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
    translations: translationsJson(locale: {eq: $locale}) {
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
    otherLocaleTranslations: translationsJson(locale: {ne: $locale}) {
      localeName
      localePath
    }
  }
`
