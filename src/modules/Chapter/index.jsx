// @flow
import getWindowWidth from 'lib/getWindowWidth'
import * as React from 'react'
import Helmet from 'react-helmet'
import {withPropsOnChange} from 'recompose'
import {Strings} from '../../types'
import Header from './Header'
import PersistentDrawer from './PersistentDrawer'
import StepContent from './StepContent'
import Tab from './Tab'
import VideoIframe from './VideoIframe'
import './styles.scss'

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
  activeTab: string,
  isSideBarVisible: boolean,
}

class Chapter extends React.Component<Props, State> {
  state = {
    activeTab: this.props.data.chapter.strings.length > 1 ? 'FR' : 'AR',
    isSideBarVisible: false,
  }
  componentWillMount() {
    if (getWindowWidth() > 800) {
      this.setState({isSideBarVisible: true})
    }
  }
  toggleActiveTab: Function = (event) => {
    console.log(event.currentTarget.name)
    this.setState({
      activeTab: event.currentTarget.name,
    })
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
    const {activeTab, isSideBarVisible} = this.state
    return (
      <div className="flex">
        <Helmet title={chapterStrings.title} />
        <PersistentDrawer
          course={chapter.course}
          isOpen={isSideBarVisible}
          otherLocaleTranslations={otherLocaleTranslations}
          t={t}
          toggleDrawer={this.toggleSidebar}
        />
        <div className="w-100 flex flex-column items-stretch">
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
          <nav className="chapter-tabs w-100 flex justify-around items-center">
            {chapter.strings.length > 1 && (
              <Tab
                type="FR"
                active={activeTab === 'FR'}
                handleClick={this.toggleActiveTab}
              >
                {t.transcriptionTitle}
              </Tab>
            )}
            <Tab
              type="AR"
              active={activeTab === 'AR'}
              handleClick={this.toggleActiveTab}
            >
              {t.transcriptionTitle}
            </Tab>
            {chapterStrings.vocabulary && (
              <Tab
                type="VOC"
                active={activeTab === 'VOC'}
                handleClick={this.toggleActiveTab}
              >
                {'Voc'}
              </Tab>
            )}
            <Tab
              type="AUDIO"
              active={activeTab === 'AUDIO'}
              handleClick={this.toggleActiveTab}
            >
              {'AUDIO'}
            </Tab>
            <Tab
              type="QUIZ"
              active={activeTab === 'QUIZ'}
              handleClick={this.toggleActiveTab}
            >
              {'QUIZ'}
            </Tab>
          </nav>

          <StepContent
            active={activeTab === 'FR'}
            content={chapterStrings.transcription}
            difficultiesLinks={pathContext.difficultiesLinks}
            t={t}
          />
          <StepContent
            active={activeTab === 'AR'}
            arabic
            content={arabicTranscription}
            difficultiesLinks={pathContext.difficultiesLinks}
            t={t}
          />
          <StepContent
            active={activeTab === 'VOC'}
            content={chapterStrings.vocabulary}
            difficultiesLinks={pathContext.difficultiesLinks}
            t={t}
          />
          <StepContent
            active={activeTab === 'AUDIO'}
            difficultiesLinks={pathContext.difficultiesLinks}
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
