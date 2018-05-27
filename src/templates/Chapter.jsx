// @flow
import ChapterContainer from 'modules/Chapter'
import R from 'ramda'
import * as React from 'react'

const filterLanguage = (locale) => R.filter(R.propEq('locale', locale))
const filterLanguageWithArabic = (locale) =>
  R.filter(R.either(R.propEq('locale', locale), R.propEq('locale', 'ar')))
const filterStrings = R.curry((locale, str) =>
  R.evolve(
    {
      strings: filterLanguage(locale),
    },
    str,
  ),
)
const enhanceSubCourse = (locale) =>
  R.evolve({
    strings: filterLanguage(locale),
    chapters: R.map(filterStrings(locale)),
  })
const enhanceTrack = (locale) =>
  R.evolve({
    strings: filterLanguage(locale),
    courses: R.map(enhanceSubCourse(locale)),
  })
const enhanceCourse = (locale) =>
  R.evolve({
    track: enhanceTrack(locale),
  })
const enhanceChapter = (locale) =>
  R.evolve({
    strings: filterLanguageWithArabic(locale),
    course: enhanceCourse(locale),
  })
const enhance = (props, locale) =>
  R.over(R.lensPath(['data', 'chapter']), enhanceChapter(locale), props)

type Strings = Array<{locale: string}>
type Props = {
  data: {
    chapter: {
      strings: Strings,
      course: {
        track: {
          strings: Strings,
          courses: Array<{
            strings: Strings,
          }>,
        },
      },
    },
  },
  pathContext: {
    locale: string,
  },
}

const Chapter = (props: Props) => (
  <ChapterContainer {...enhance(props, props.pathContext.locale)} />
)

export default Chapter

// $FlowIgnore
export const pageQuery = graphql`
  query chapterQuery($locale: String!, $slug: String!) {
    chapter: feathersChapters(slug: {eq: $slug}) {
      slug
      audio
      strings: chaptersStrings {
        locale
        title
        transcription
        vocabulary
        focus
        video
      }
      course {
        slug
        track {
          slug
          strings: tracksStrings {
            title
            locale
          }
          courses {
            order
            slug
            strings: coursesStrings {
              locale
              title
            }
            chapters {
              slug
              order
              strings: chaptersStrings {
                locale
                title
              }
            }
          }
        }
      }
    }
    translations: feathersTranslations(locale: {eq: $locale}) {
      downloadChapter
      focus
      localeName
      nextCourse
      readIn
      takeQuiz
      transcriptionTitle
      vocabulary
    }
    otherLocaleTranslations: feathersTranslations(locale: {ne: $locale}) {
      localeName
      localePath
      readIn
    }
  }
`
