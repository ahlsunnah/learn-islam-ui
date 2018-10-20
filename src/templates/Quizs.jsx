// @flow
import * as React from 'react'
import R from 'ramda'
import Helmet from 'react-helmet'
import cx from 'classnames'
import QuizsContainer from 'modules/Quizs'
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
const filterQuizs = (difficulty) => R.propEq('difficulty', difficulty)
const enhanceChapter = (locale, difficulty) =>
  R.evolve({
    strings: filterLanguage(locale),
    quizs: R.compose(
      R.filter(filterQuizs(difficulty)),
      R.map(filterStrings(locale)),
    ),
    track: enhanceTrack(locale),
  })
const enhance = (props, locale, difficulty) =>
  R.over(
    R.lensPath(['data', 'course']),
    enhanceChapter(locale, difficulty),
    props,
  )

type Strings = Array<{locale: string}>
type Props = {
  data: {
    course: {
      id: string,
      slug: string,
      strings: Strings,
      quizs: Array<{
        difficulty: number,
        id: string,
        strings: Strings,
        type: string,
      }>,
      track: {
        strings: Strings,
        courses: Array<{
          strings: Strings,
        }>,
      },
    },
  },
  pathContext: {
    difficulty: number,
    locale: string,
  },
}

const Quizs = (props: Props) => (
  <div className={cx({rtl: props.pathContext.locale === 'ar'})}>
    <Helmet>
      <html lang={props.pathContext.locale} />
    </Helmet>
    <QuizsContainer
      {...enhance(
        props,
        props.pathContext.locale,
        props.pathContext.difficulty,
      )}
    />
  </div>
)

export default Quizs

// $FlowIgnore
export const pageQuery = graphql`
  query quizQuery($locale: String!, $slug: String!) {
    course: feathersCourses(slug: {eq: $slug}) {
      id
      slug
      strings: coursesStrings {
        locale
        title
      }
      quizs {
        difficulty
        id
        type
        strings: quizsStrings {
          locale
          data
        }
      }
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
    translations: feathersTranslations(locale: {eq: $locale}) {
      assessmentPerfect
      assessmentVeryGood
      assessmentGood
      assessmentFail
      average
      backToCourse
      chooseACategoryTitle
      chooseAnswer
      congratulations
      congratulationsCTA
      continue
      difficulty1
      difficulty2
      fillInTheBlankTitle
      goToTop
      goToTracks
      grade
      level
      locale
      localePath
      nextCourse
      nextTrack
      progress
      quiz
      quizTitle
      quizTrue
      quizFalse
      restartQuizs
      seeYourScore
      start
      takeExam
      yourLastScore
      yourScore
    }
    otherLocaleTranslations: feathersTranslations(locale: {ne: $locale}) {
      localeName
      localePath
    }
  }
`
