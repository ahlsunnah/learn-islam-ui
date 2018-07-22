// @flow
import completeChapter from 'actions/chapters'
import StepWrapper from 'components/StepWrapper'
import * as React from 'react'
import Helmet from 'react-helmet'
import {connect} from 'react-redux'
import {compose, withPropsOnChange} from 'recompose'
import {Strings} from '../../types'
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
  dCompleteChapter: Function,
  otherLocalePath: string,
  pathContext: {
    difficulties: Array<{}>,
    locale: string,
    slug: string,
  },
}
type State = {
  activeTab: string,
}

class Chapter extends React.Component<Props, State> {
  state = {
    activeTab: this.props.data.chapter.strings.length > 1 ? 'FR' : 'AR',
  }

  componentDidMount() {
    const {dCompleteChapter} = this.props
    this.completeTimeout = setTimeout(() => {
      dCompleteChapter()
      this.completeTimeout = null
    }, 10000)
  }

  componentWillUnmount() {
    if (this.completeTimeout) {
      clearTimeout(this.completeTimeout)
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
      otherLocalePath,
      pathContext,
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
            type="QUIZ"
            active={activeTab === 'QUIZ'}
            handleClick={this.toggleActiveTab}
          >
            {t.tabQuiz}
          </Tab>
        </nav>

        <StepContent
          active={activeTab === 'FR'}
          content={chapterStrings.transcription}
          difficulties={pathContext.difficulties}
          t={t}
        />
        <StepContent
          active={activeTab === 'AR'}
          arabic
          content={arabicTranscription}
          difficulties={pathContext.difficulties}
          t={t}
        />
        <StepContent
          active={activeTab === 'VOC'}
          content={chapterStrings.vocabulary}
          difficulties={pathContext.difficulties}
          t={t}
        />
        <StepContent
          active={activeTab === 'AUDIO'}
          difficulties={pathContext.difficulties}
          t={t}
        >
          <div className="mv4">
            <h3 className="">
              Vous voulez ecouter l'audio au lieu de la video ?
            </h3>
            <audio className="w-100" controls src={chapter.audio} />
            <h3 className="">
              Si vous voulez telecharger l'audio,{' '}
              <a
                href={chapter.audio}
                title={chapterStrings.title}
                download
                target="_blank"
              >
                cliquez ici
              </a>
            </h3>
          </div>
        </StepContent>
        <StepContent
          active={activeTab === 'QUIZ'}
          content={"Fini ? il est temps de passer a l'examen !"}
          difficulties={pathContext.difficulties}
          t={t}
        />
      </StepWrapper>
    )
  }
}

const enhance = compose(
  connect(
    ({chapters}, {data}) => ({
      isChapterComplete: chapters[data.chapter.id] || false,
    }),
    (dispatch, {data}) => ({
      dCompleteChapter: () => dispatch(completeChapter(data.chapter.id)),
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
)

export default enhance(Chapter)
