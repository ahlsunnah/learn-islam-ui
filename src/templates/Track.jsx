// @flow
import React from 'react'
import R from 'ramda'
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
type Props = {
  data: {
    track: {
      strings: Strings,
      courses: Array<{
        chapters: Array<{strings: Strings}>,
        strings: Strings,
        topic: {strings: Strings},
      }>,
    },
  },
  pathContext: {
    locale: string,
  },
}

const TrackTemplate = (props: Props) => (
  <div className={cx({'rtl arFont': props.pathContext.locale === 'ar'})}>
    <TrackContainer {...enhance(props, props.pathContext.locale)} />
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
          slug
          strings: chaptersStrings {
            locale
          }
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
    translations: feathersTranslations(locale: {eq: $locale}) {
      connect
      level
      level1
      level2
      level3
      locale
      localePath
      start
      startCourse
      toOtherLanguageCTA
      track
    }
    otherLocaleTranslations: feathersTranslations(locale: {ne: $locale}) {
      localeName
      localePath
    }
  }
`
