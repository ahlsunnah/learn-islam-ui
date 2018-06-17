// @flow
/* eslint react/no-array-index-key: 0 */
import Button from 'components/Button'
import Link from 'gatsby-link'
import hamburgerSvg from 'images/hamburger.svg'
import getWindowWidth from 'lib/getWindowWidth'
import * as React from 'react'
import Helmet from 'react-helmet'
import {Strings} from '../../types'
import NavigationButtons from './NavigationButtons'
import PersistentDrawer from './PersistentDrawer'
import StepContent from './StepContent'
import Transcription from './Transcription'
import VideoIframe from './VideoIframe'

type Props = {
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
              strings: Strings,
            }>,
          }>,
        },
      },
      strings: Array<{
        title: string,
      }>,
    },
    translations: Object,
    otherLocaleTranslations: {
      localeName: string,
      localePath: string,
    },
  },
  pathContext: {
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
    const {data, pathContext} = this.props
    const {chapter, otherLocaleTranslations, translations: t} = data
    const {isSideBarVisible} = this.state
    const chapterStrings = chapter.strings.find(
      ({locale}) => locale === pathContext.locale,
    )
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
          <div className="flex justify-between items-center bg-black-90 w-100">
            <div className="flex-grow1 flex-no-shrink">
              <button
                className="mh2 mh3-ns bg-transparent bn pointer"
                onClick={this.toggleSidebar}
              >
                <img alt="menu" className="mt2 h2" src={hamburgerSvg} />
              </button>
            </div>
            <h3 className="white f5 f4-ns">{chapterStrings.title}</h3>
            <div className="flex1 flex justify-end">
              <Link
                className="mh2 mh3-ns no-underline"
                to={`${otherLocaleTranslations.localePath}${
                  chapter.course.track.slug
                }/${data.chapter.course.slug}/${data.chapter.slug}`}
              >
                <Button rounded stroked className="white">
                  {otherLocaleTranslations.localeName}
                </Button>
              </Link>
            </div>
          </div>
          <VideoIframe
            source={chapterStrings.video}
            title={chapterStrings.title}
          />
          <Transcription
            title={t.transcriptionTitle}
            arabicContent={
              (chapter.strings.find(({locale}) => locale === 'ar') || {})
                .transcription
            }
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

export default Chapter
