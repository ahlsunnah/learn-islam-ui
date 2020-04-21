import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import cx from 'classnames'
import TracksContainer from 'modules/Tracks'
import './styles.css'
import { ITracksPageProps } from 'types/tracks'

const Tracks = (props: ITracksPageProps) => (
  <div className={cx({ rtl: props.pageContext.locale === 'ar' })}>
    <Helmet>
      <html lang={props.pageContext.locale} />
    </Helmet>
    <TracksContainer {...props} />
  </div>
)

export default Tracks

export const pageQuery = graphql`
  fragment TracksPageTranslations on TranslationsJson {
    aboutUs
    connect
    copyright
    courses
    footerSocialTitle
    homeFooterCTA
    homeStartTrack
    locale
    localeName
    localePath
    siteName
    siteSlogan
    soon
    tracks
    tracksPageTitle
    tracksPageDescription
    urlFacebook
    urlTelegram
    urlTwitter
    urlYoutube
  }
  fragment TracksPageOtherTranslations on TranslationsJson {
    localeName
    localePath
  }
  fragment TracksPageTrack on api_tracks {
    id
    slug
    soon
    translations(where: { locale_code: { _eq: $localeEnum } }) {
      title
      description
    }
  }
  query tracksQuery($locale: String!, $localeEnum: api_locales_enum) {
    translations: translationsJson(locale: { eq: $locale }) {
      ...TracksPageTranslations
    }
    otherLocaleTranslations: translationsJson(locale: { ne: $locale }) {
      ...TracksPageOtherTranslations
    }
    api {
      tracks {
        ...TracksPageTrack
      }
    }
  }
`
