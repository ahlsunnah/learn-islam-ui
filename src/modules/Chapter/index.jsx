// @flow
/* eslint react/no-array-index-key: 0 */
import * as React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Button from 'components/Button'
import {Strings} from '../../types'
import NavigationButtons from './NavigationButtons'
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
    if (typeof window !== 'undefined' && window.innerWidth > 1024) {
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
      <div>
        <Helmet title={chapterStrings.title} />
        <div className="tr pa3 self-end dn db-ns">
          <Link className="ph2 no-underline" to={`${otherLocaleTranslations.localePath}${chapter.course.track.slug}/${data.chapter.course.slug}/${data.chapter.slug}`}>
            <Button rounded stroked>
              {otherLocaleTranslations.localeName}
            </Button>
          </Link>
        </div>
        <div className="pv2 bg-black-90 w-100 tc">
          <h3 className="white f5 f4-ns">{chapterStrings.title}</h3>
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
    )
  }
}

export default Chapter
