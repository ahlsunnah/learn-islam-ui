// @flow
import getWindowWidth from 'lib/getWindowWidth'
import * as React from 'react'
import Helmet from 'react-helmet'
import {withPropsOnChange} from 'recompose'
import Header from './Header'
import NavigationButtons from './NavigationButtons'
import PersistentDrawer from './PersistentDrawer'
import StepContent from './StepContent'
import Transcription from './Transcription'
import VideoIframe from './VideoIframe'
import type {Strings} from '../../types'

type Props = {
  arabicTranscription: string,
  chapterStrings: {
    locale: string,
    title: string,
    transcription: string,
    video: string,
    vocabulary?: string,
  },
  data: {
    chapter: {
      audio: string,
      slug: string,
      course: {
        slug: string,
        track: {
          slug: string,
          strings: Strings,
          courses: Array<{
            order: number,
            slug: string,
            strings: Strings,
            chapters: Array<{
              order: number,
              slug: string,
              strings: Array<{
                title: string,
              }>,
            }>,
          }>,
        },
      },
      strings: Array<{
        locale: string,
        title: string,
        transcription: string,
        video: string,
        vocabulary?: string,
      }>,
    },
    translations: Object,
    otherLocaleTranslations: {
      readIn: string,
      localeName: string,
      localePath: string,
    },
  },
  otherLocalePath: string,
  pathContext: {
    difficultiesLinks: {},
    locale: string,
    slug: string,
  },
}
type State = {
  isSideBarVisible: boolean,
}

class Chapter extends React.Component<Props, State> {
  state = {
    isSideBarVisible: false,
  }
  componentWillMount() {
    if (getWindowWidth() > 800) {
      this.setState({isSideBarVisible: true})
    }
  }
  toggleSidebar: Function = () => {
    this.setState(({isSideBarVisible}) => ({
      isSideBarVisible: !isSideBarVisible,
    }))
  }
  render() {
    const {
      arabicTranscription,
      chapterStrings,
      data,
      otherLocalePath,
      pathContext,
    } = this.props
    const {chapter, otherLocaleTranslations, translations: t} = data
    const {isSideBarVisible} = this.state
    return (
      <div className="inline-flex">
        <Helmet title={chapterStrings.title} />
        <PersistentDrawer
          course={chapter.course}
          isOpen={isSideBarVisible}
          otherLocaleTranslations={otherLocaleTranslations}
          t={t}
          toggleDrawer={this.toggleSidebar}
        />
        <div>
          <Header
            otherLocaleName={otherLocaleTranslations.localeName}
            otherLocalePath={otherLocalePath}
            title={chapterStrings.title}
            toggleSidebar={this.toggleSidebar}
          />
          <VideoIframe
            source={chapterStrings.video}
            title={chapterStrings.title}
          />
          <Transcription
            title={t.transcriptionTitle}
            arabicContent={arabicTranscription}
            otherLanguageContent={
              chapter.strings.length > 1
                ? chapterStrings.transcription
                : undefined
            }
            otherLanguageCTA={`${otherLocaleTranslations.readIn}${
              otherLocaleTranslations.localeName
            }`}
            currentLanguageCTA={`${t.readIn} ${t.localeName}`}
          />
          {chapterStrings.vocabulary && (
            <StepContent
              title={t.vocabulary}
              content={chapterStrings.vocabulary}
            />
          )}
          <NavigationButtons
            difficultiesLinks={pathContext.difficultiesLinks}
            t={t}
          />
        </div>
      </div>
    )
  }
}

const enhance = withPropsOnChange(['data'], ({data, pathContext}: Props) => ({
  arabicTranscription: (
    data.chapter.strings.find(({locale}) => locale === 'ar') || {}
  ).transcription,
  chapterStrings:
    data.chapter.strings.find(({locale}) => locale === pathContext.locale) ||
    {},
  otherLocalePath: `${data.otherLocaleTranslations.localePath}${
    data.chapter.course.track.slug
  }/${data.chapter.course.slug}/${data.chapter.slug}`,
}))

export default enhance(Chapter)
