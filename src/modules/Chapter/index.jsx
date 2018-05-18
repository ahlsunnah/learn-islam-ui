// @flow
/* eslint react/no-array-index-key: 0 */
import * as React from 'react'
import Helmet from 'react-helmet'
import {Strings} from '../../types'
import StepContent from './StepContent'
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
    const {chapter, translations} = data
    const {isSideBarVisible} = this.state
    return (
      <div>
        <Helmet title={chapter.strings[0].title} />
        <div className="pv2 bg-black-90 w-100 tc">
          <h3 className="white f5 f4-ns">{chapter.strings[0].title}</h3>
        </div>
        <VideoIframe source={chapter.strings[0].video} />
        {chapter.strings[0].transcription && (
          <StepContent
            title={translations.transcriptionTitle}
            content={chapter.strings[0].transcription}
          />
        )}
        {chapter.strings[0].vocabulary && (
          <StepContent
            title={translations.vocabulary}
            content={chapter.strings[0].vocabulary}
          />
        )}
      </div>
    )
  }
}

export default Chapter
