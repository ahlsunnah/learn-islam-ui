import * as React from 'react'
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
  fragment ChapterPageTrack on api_tracks {
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
      chapters {
        id
        slug
        translations(where: {locale_code: {_eq: $localeEnum}}) {
          title
        }
      }
      translations(where: {locale_code: {_eq: $localeEnum}}) {
        locale_code
        title
      }
    }
  }
  fragment ChapterPageTranslations on TranslationsJson {
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
  query chapterQuery(
    $locale: String!
    $localeEnum: api_locales_enum
    $id: Int!
  ) {
    api {
      chapter: chapters_by_pk(id: $id) {
        id
        slug
        audio
        translations {
          id
          title
          transcription
          vocabulary
          locale_code
          video
        }
        course {
          id
          slug
          track {
            ...ChapterPageTrack
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
    translations: translationsJson(locale: {eq: $locale}) {
      ...ChapterPageTranslations
    }
    otherLocaleTranslations: translationsJson(locale: {ne: $locale}) {
      localeName
      localePath
      readIn
    }
  }
`
