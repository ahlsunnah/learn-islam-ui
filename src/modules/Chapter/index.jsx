// @flow
/* eslint react/no-unused-prop-types: 0 */
import {toggleCompleteChapter} from 'actions/chapters'
import StepWrapper from 'components/StepWrapper'
import PropTypes from 'prop-types'
import * as React from 'react'
import Helmet from 'react-helmet'
import {connect} from 'react-redux'
import {compose, setPropTypes, withPropsOnChange} from 'recompose'
import {Strings} from '../../types'
import NavigationButtons from './NavigationButtons'
import StepContent from './StepContent'
import './styles.scss'
import Tab from './Tab'
import VideoIframe from './VideoIframe'

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
  navigationButtons: React.Node,
  otherLocalePath: string,
  pathContext: {
    next: Object,
    locale: string,
    slug: string,
  },
}
type State = {
  activeTab: string,
}

class Chapter extends React.Component<Props, State> {
  constructor(props, context) {
    super(props, context)
    this.state = {
      activeTab: props.data.chapter.strings.length > 1 ? 'FR' : 'AR',
    }
  }

  toggleActiveTab: Function = (event) => {
    this.setState({
      activeTab: event.currentTarget.name,
    })
  }

  render() {
    const {
      arabicTranscription,
      chapterStrings,
      data,
      navigationButtons,
      otherLocalePath,
    } = this.props
    const {chapter, otherLocaleTranslations, translations: t} = data
    const {activeTab} = this.state
    return (
      <StepWrapper
        course={chapter.course}
        t={t}
        otherLocaleName={otherLocaleTranslations.localeName}
        otherLocalePath={otherLocalePath}
        title={chapterStrings.title}
      >
        <Helmet title={chapterStrings.title} />
        <VideoIframe
          source={chapterStrings.video}
          title={chapterStrings.title}
        />
        <nav className="chapter-tabs w-100 flex justify-around items-center">
          {chapter.strings.length > 1 && (
            <Tab
              type="FR"
              active={activeTab === 'FR'}
              handleClick={this.toggleActiveTab}
            >
              {t.tabTranslation}
            </Tab>
          )}
          <Tab
            type="AR"
            active={activeTab === 'AR'}
            handleClick={this.toggleActiveTab}
          >
            {t.tabTranscription}
          </Tab>
          {chapterStrings.vocabulary && (
            <Tab
              type="VOC"
              active={activeTab === 'VOC'}
              handleClick={this.toggleActiveTab}
            >
              {t.tabVocabulary}
            </Tab>
          )}
          <Tab
            type="AUDIO"
            active={activeTab === 'AUDIO'}
            handleClick={this.toggleActiveTab}
          >
            {t.tabAudio}
          </Tab>
          <Tab
            type="NEXT"
            active={activeTab === 'NEXT'}
            handleClick={this.toggleActiveTab}
          >
            {t.tabQuiz}
          </Tab>
        </nav>

        <StepContent
          active={activeTab === 'FR'}
          content={chapterStrings.transcription}
        >
          {navigationButtons}
        </StepContent>
        <StepContent
          active={activeTab === 'AR'}
          arabic
          content={arabicTranscription}
        >
          {navigationButtons}
        </StepContent>
        <StepContent
          active={activeTab === 'VOC'}
          content={chapterStrings.vocabulary}
        >
          {navigationButtons}
        </StepContent>
        <StepContent active={activeTab === 'AUDIO'}>
          <div className="mv4">
            <h3 className="">
              {"Vous voulez ecouter l'audio au lieu de la video ?"}
            </h3>
            <audio className="w-100" controls src={chapter.audio} />
            <h3 className="">
              {"Si vous voulez telecharger l'audio, "}
              <a
                href={chapter.audio}
                title={chapterStrings.title}
                download
                rel="noopener noreferrer"
                target="_blank"
              >
                cliquez ici
              </a>
            </h3>
            {navigationButtons}
          </div>
        </StepContent>
        <StepContent active={activeTab === 'NEXT'}>
          {navigationButtons}
        </StepContent>
      </StepWrapper>
    )
  }
}

const enhance = compose(
  connect(
    ({chapters}, {data}) => ({
      isChapterComplete: chapters[data.chapter.id] || false,
    }),
    (dispatch: Function, {data}) => ({
      dToggleCompleteChapter: () =>
        dispatch(toggleCompleteChapter(data.chapter.id)),
    }),
  ),
  withPropsOnChange(['data'], ({data, pathContext}: Props) => ({
    arabicTranscription: (
      data.chapter.strings.find(({locale}) => locale === 'ar') || {}
    ).transcription,
    chapterStrings:
      data.chapter.strings.find(({locale}) => locale === pathContext.locale) ||
      {},
    otherLocalePath: `${data.otherLocaleTranslations.localePath}${
      data.chapter.course.track.slug
    }/${data.chapter.course.slug}/${data.chapter.slug}`,
  })),
  setPropTypes({
    data: PropTypes.object.isRequired,
    dToggleCompleteChapter: PropTypes.func.isRequired,
    isChapterComplete: PropTypes.bool.isRequired,
    pathContext: PropTypes.object.isRequired,
  }),
  withPropsOnChange(
    ['data', 'isChapterComplete'],
    function createNavigationButtons({
      data: {translations},
      dToggleCompleteChapter,
      isChapterComplete,
      pathContext: {next},
    }) {
      return {
        navigationButtons: (
          <NavigationButtons
            isChapterComplete={isChapterComplete}
            next={next}
            t={translations}
            toggleCompleteChapter={dToggleCompleteChapter}
          />
        ),
      }
    },
  ),
)

export default enhance(Chapter)
