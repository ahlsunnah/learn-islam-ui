import React from 'react'
import {graphql} from 'gatsby'
import * as R from 'ramda'
import Helmet from 'react-helmet'
import cx from 'classnames'
import TrackContainer from 'modules/Track'
import './styles.css'

const filterLanguage = (locale) => R.filter(R.propEq('locale', locale))
const filterStrings = R.curry((locale, str) =>
  R.evolve(
    {
      strings: filterLanguage(locale),
    },
    str,
  ),
)
const enhanceCourse = (locale) =>
  R.evolve({
    strings: filterLanguage(locale),
    chapters: R.map(filterStrings(locale)),
    topic: filterStrings(locale),
  })
const enhanceTrack = (locale) =>
  R.evolve({
    strings: filterLanguage(locale),
    courses: R.map(enhanceCourse(locale)),
    topic: filterStrings(locale),
  })
const enhance = (props, locale) =>
  R.over(R.lensPath(['data', 'track']), enhanceTrack(locale), props)

type Strings = Array<{locale: string}>
interface Props {
  data: {
    track: {
      strings: Strings
      courses: Array<{
        chapters: Array<{strings: Strings}>
        strings: Strings
        topic: {strings: Strings}
      }>
    }
  }
  pageContext: {
    locale: string
  }
}

const TrackTemplate = (props: Props) => (
  <div className={cx({rtl: props.pageContext.locale === 'ar'})}>
    <Helmet>
      <html lang={props.pageContext.locale} />
    </Helmet>
    <TrackContainer {...enhance(props, props.pageContext.locale)} />
  </div>
)

export default TrackTemplate

// $FlowIgnore
export const pageQuery = graphql`
  query trackQuery($locale: String!, $slug: String!) {
    track: feathersTracks(slug: {eq: $slug}) {
      slug
      strings: tracksStrings {
        locale
        title
      }
      courses {
        id
        level
        order
        slug
        strings: coursesStrings {
          locale
          title
          description
        }
        chapters {
          duration
          id
          slug
          strings: chaptersStrings {
            locale
          }
        }
        quizs {
          difficulty
        }
        topic {
          color
          strings: topicsStrings {
            locale
            title
          }
        }
      }
    }
    translations: translationsJson(locale: {eq: $locale}) {
      connect
      course
      level1
      level2
      level3
      locale
      localePath
      start
      startCourse
      toOtherLanguageCTA
      track
      trackLevel
    }
    otherLocaleTranslations: translationsJson(locale: {ne: $locale}) {
      localeName
      localePath
    }
  }
`
