import React from 'react'
import {graphql} from 'gatsby'
import Helmet from 'react-helmet'
import cx from 'classnames'
import TracksContainer from 'modules/Tracks'
import './styles.css'
import {ITracksPageProps} from 'types/tracks'

const Tracks = (props: ITracksPageProps) => (
  <div className={cx({rtl: props.pageContext.locale === 'ar'})}>
    <Helmet>
      <html lang={props.pageContext.locale} />
    </Helmet>
    <TracksContainer {...props} />
  </div>
)

export default Tracks

export const pageQuery = graphql`
  query tracksQuery($locale: String!) {
    translations: translationsJson(locale: {eq: $locale}) {
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
    otherLocaleTranslations: translationsJson(locale: {ne: $locale}) {
      localeName
      localePath
    }
    api {
      tracks: allTracks {
        edges {
          node {
            id
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
