// @flow
import * as React from 'react'
import R from 'ramda'
import Helmet from 'react-helmet'
import cx from 'classnames'
import ChapterContainer from 'modules/Chapter'
import './styles.css'

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
  <div className={cx({rtl: props.pathContext.locale === 'ar'})}>
    <Helmet>
      <html lang={props.pathContext.locale} />
    </Helmet>
    <ChapterContainer {...enhance(props, props.pathContext.locale)} />
  </div>
)

export default Chapter

// $FlowIgnore
export const pageQuery = graphql`
  query chapterQuery($locale: String!, $slug: String!) {
    chapter: feathersChapters(slug: {eq: $slug}) {
      id
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
            id
            order
            slug
            strings: coursesStrings {
              locale
              title
            }
            chapters {
              id
              slug
              order
              strings: chaptersStrings {
                locale
                title
              }
            }
            quizs {
              difficulty
            }
          }
        }
      }
    }
    translations: feathersTranslations(locale: {eq: $locale}) {
      chapter
      clickHere
      congratulations
      congratulationsCTA
      course
      courseSAudio
      difficulty1
      difficulty2
      downloadAudio
      downloadChapter
      focus
      goToTracks
      iCompletedTheChapter
      listenAudio
      localeName
      localePath
      next
      nextCourse
      readIn
      quiz
      tabAudio
      tabCompleted
      tabTranscription
      tabTranslation
      tabVocabulary
      takeQuiz
    }
    otherLocaleTranslations: feathersTranslations(locale: {ne: $locale}) {
      localeName
      localePath
      readIn
    }
  }
`
