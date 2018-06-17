// @flow
import React from 'react'
import R from 'ramda'
import cx from 'classnames'
import TracksContainer from 'modules/Tracks'
import './styles.css'

type Props = {
  data: {
    tracks: {
      edges: Array<{
        node: {
          strings: Array<{
            locale: string,
          }>,
        },
      }>,
    },
    translations: Object,
  },
  pathContext: Object,
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
  <div className={cx({rtl: props.pathContext.locale === 'ar'})}>
    <TracksContainer {...enhance(props, props.pathContext.locale)} />
  </div>
)

export default Tracks

// $FlowIgnore
export const pageQuery = graphql`
  query tracksQuery($locale: String!) {
    translations: feathersTranslations(locale: {eq: $locale}) {
      aboutUs
      connect
      courses
      footerSocialTitle
      homeFooterCTA
      homeStartTrack
      localeName
      localePath
      siteName
      siteSlogan
      tracks
      tracksPageTitle
      tracksPageDescription
      urlFacebook
      urlTelegram
      urlTwitter
      urlYoutube
    }
    otherLocaleTranslations: feathersTranslations(locale: {ne: $locale}) {
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
