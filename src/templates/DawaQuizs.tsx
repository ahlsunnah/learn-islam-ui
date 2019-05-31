import * as React from 'react'
import {graphql} from 'gatsby'
import Helmet from 'react-helmet'
import cx from 'classnames'
import QuizsContainer from 'modules/Quizs'
import './styles.css'
import {IQuizsPageProps} from '../types/quizs'

const DawaQuizs = (props: IQuizsPageProps): JSX.Element => (
  <div className={cx({rtl: props.pageContext.locale === 'ar'})}>
    <Helmet>
      <html lang={props.pageContext.locale} />
    </Helmet>
    <QuizsContainer {...props} />
  </div>
)

export default DawaQuizs

export const pageQuery = graphql`
  query dawaQuizQuery($locale: String!, $id: ID!) {
    api {
      course(id: $id) {
        id
        slug
        translations(locale: $locale) {
          edges {
            node {
              id
              title
            }
          }
        }
        quizs: quizSet {
          edges {
            node {
              id
              difficulty
              type
              translations(locale: $locale) {
                edges {
                  node {
                    id
                    data
                  }
                }
              }
            }
          }
        }
        track {
          id
          slug
          translations(locale: $locale) {
            edges {
              node {
                title
              }
            }
          }
          courses: courseSet {
            edges {
              node {
                id
                slug
                quizDifficulties
                translations(locale: $locale) {
                  edges {
                    node {
                      locale
                      title
                    }
                  }
                }
                chapters: chapterSet {
                  edges {
                    node {
                      id
                      slug
                      translations(locale: $locale) {
                        edges {
                          node {
                            title
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    translations: translationsJson(locale: {eq: $locale}) {
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
    otherLocaleTranslations: translationsJson(locale: {ne: $locale}) {
      localeName
      localePath
    }
  }
`
