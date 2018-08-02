// @flow
import React from 'react'
import Helmet from 'react-helmet'
import cx from 'classnames'
import AboutUsContainer from 'modules/AboutUs'
import './styles.css'

type Props = {
  data: {
    firstTrack: {
      slug: string,
    },
    translations: Object,
    otherLocaleTranslations: Object,
  },
  pathContext: Object,
}

const AboutUs = (props: Props) => (
  <div className={cx({rtl: props.pathContext.locale === 'ar'})}>
    <Helmet>
      <html lang={props.pathContext.locale} />
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
    translations: feathersTranslations(locale: {eq: $locale}) {
      aboutUs
      aboutUsPageTitle
      aboutUsPageContent
      connect
      courses
      copyright
      footerSocialTitle
      homeFooterCTA
      homeStartTrack
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
    otherLocaleTranslations: feathersTranslations(locale: {ne: $locale}) {
      localeName
      localePath
    }
  }
`
