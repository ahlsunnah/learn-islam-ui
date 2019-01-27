import React from 'react'
import {graphql} from 'gatsby'
import * as R from 'ramda'
import Helmet from 'react-helmet'
import cx from 'classnames'
import TracksContainer from 'modules/Tracks'
import './styles.css'

interface Props {
  data: {
    tracks: {
      edges: Array<{
        node: {
          strings: Array<{
            locale: string
          }>
        }
      }>
    }
    translations: Object
  }
  pageContext: Object
}

const filterLanguage = R.curry((locale, str) =>
  R.evolve(
    {
      strings: R.find(R.propEq('locale', locale)),
    },
    str,
  ),
)

const enhance = (props, locale) =>
  R.evolve({
    data: {
      tracks: (tracks) =>
        R.map(
          (node) => filterLanguage(locale, R.prop('node', node)),
          R.prop('edges', tracks),
        ),
    },
  })(props)

const Tracks = (props: Props) => (
  <div className={cx({rtl: props.pageContext.locale === 'ar'})}>
    <Helmet>
      <html lang={props.pageContext.locale} />
    </Helmet>
    <TracksContainer {...enhance(props, props.pageContext.locale)} />
  </div>
)

export default Tracks

// $FlowIgnore
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
    tracks: allFeathersTracks(
      limit: 1000
      sort: {fields: [order], order: ASC}
    ) {
      edges {
        node {
          order
          slug
          soon
          strings: tracksStrings {
            title
            description
            locale
          }
        }
      }
    }
  }
`
