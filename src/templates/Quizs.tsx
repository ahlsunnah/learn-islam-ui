import * as React from 'react'
import {graphql} from 'gatsby'
import Helmet from 'react-helmet'
import cx from 'classnames'
import QuizsContainer from 'modules/Quizs'
import './styles.css'
import {IQuizsPageProps} from '../types/quizs'

const Quizs = (props: IQuizsPageProps): JSX.Element => (
  <div className={cx({rtl: props.pageContext.locale === 'ar'})}>
    <Helmet>
      <html lang={props.pageContext.locale} />
    </Helmet>
    <QuizsContainer {...props} />
  </div>
)

export default Quizs

export const pageQuery = graphql`
  fragment QuizzesPageQuiz on api_quizzes {
    id
    type_slug
    translations(where: {locale_code: {_eq: $localeEnum}}) {
      id
      data
    }
  }

  fragment QuizzesPageTranslations on TranslationsJson {
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

  query QuizQuery(
    $locale: String!
    $localeEnum: api_locales_enum
    $id: Int!
    $difficulty: Int!
  ) {
    api {
      course: courses_by_pk(id: $id) {
        id
        slug
        translations(where: {locale_code: {_eq: $localeEnum}}) {
          id
          title
        }
        quizzes(where: {difficulty: {_eq: $difficulty}}) {
          ...QuizzesPageQuiz
        }
        track {
          id
          slug
          translations(where: {locale_code: {_eq: $localeEnum}}) {
            title
          }
          courses {
            id
            slug
            quiz_difficulties {
              quiz_difficulties
            }
            translations(where: {locale_code: {_eq: $localeEnum}}) {
              locale_code
              title
            }
            chapters {
              id
              slug
              translations(where: {locale_code: {_eq: $localeEnum}}) {
                title
              }
            }
          }
        }
      }
    }
    translations: translationsJson(locale: {eq: $locale}) {
      ...QuizzesPageTranslations
    }
    otherLocaleTranslations: translationsJson(locale: {ne: $locale}) {
      localeName
      localePath
    }
  }
`
