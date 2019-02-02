import * as React from 'react'
import * as R from 'ramda'
import {graphql} from 'gatsby'
import Helmet from 'react-helmet'
import cx from 'classnames'
import ChapterContainer from 'modules/Chapter'
import './styles.css'
import {IChapterProps} from '../types/chapter'

const Chapter = (props: IChapterProps) => (
  <div className={cx({rtl: props.pageContext.locale === 'ar'})}>
    <Helmet>
      <html lang={props.pageContext.locale} />
    </Helmet>
    <ChapterContainer {...props} />
  </div>
)

export default Chapter

export const pageQuery = graphql`
  query chapterQuery($locale: String!, $id: ID!) {
    api {
      chapter(id: $id) {
        id
        slug
        audio
        translations {
          edges {
            node {
              id
              title
              transcription
              vocabulary
              locale
              video
            }
          }
        }
        course {
          id
          slug
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
    }
    translations: translationsJson(locale: {eq: $locale}) {
      chapter
      clickHere
      chapterAudio
      congratulations
      congratulationsCTA
      course
      difficulty1
      difficulty2
      downloadAudio
      focus
      goToTracks
      iCompletedTheChapter
      listenAudio
      locale
      localeName
      localePath
      next
      nextCourse
      nextHelp
      readIn
      quiz
      tabAudio
      tabCompleted
      tabTranscription
      tabTranslation
      tabVocabulary
      takeQuiz
      track
    }
    otherLocaleTranslations: translationsJson(locale: {ne: $locale}) {
      localeName
      localePath
      readIn
    }
  }
`
