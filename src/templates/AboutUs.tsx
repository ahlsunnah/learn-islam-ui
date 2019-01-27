import React from 'react'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import cx from 'classnames'
import AboutUsContainer from 'modules/AboutUs'
import './styles.css'

interface Props {
  data: {
    firstTrack: {
      slug: string
    }
    translations: Object
    otherLocaleTranslations: Object
  }
  pageContext: Object
}

const AboutUs = (props: Props) => (
  <div className={cx({rtl: props.pageContext.locale === 'ar'})}>
    <Helmet>
      <html lang={props.pageContext.locale} />
    </Helmet>
    <AboutUsContainer {...props} />
  </div>
)

export default AboutUs

// $FlowIgnore
export const pageQuery = graphql`
  query aboutUsQuery($locale: String!) {
    firstTrack: feathersTracks(order: {eq: 1}) {
      slug
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
