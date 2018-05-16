// @flow
/* eslint react/no-array-index-key: 0 */
import * as React from 'react'
import Helmet from 'react-helmet'
import VideoIframe from './VideoIframe'
import StepContent from './StepContent'
import {Strings} from '../../types'

type Props = {
  data: {
    chapter: {
      audio: string,
      slug: string,
      course: {
        chapters: Array<{
          order: number,
          slug: string,
          strings: Strings,
        }>,
        slug: string,
        strings: Strings,
        track: {
          slug: string,
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
    const {data, pathContext, chapter, strings} = this.props
    const {isSideBarVisible} = this.state
    return (
      <div>
        <Helmet title={data.chapter.strings[0].title} />
        <div className="pv2 bg-black-90 w-100 tc">
          <h3 className="white f5 f4-ns">{data.chapter.strings[0].title}</h3>
        </div>
        <VideoIframe source={data.chapter.strings[0].video} />
        {data.chapter.strings[0].transcription && (
          <StepContent
            title={data.translations.transcriptionTitle}
            content={data.chapter.strings[0].transcription}
          />
        )}
        {data.chapter.strings[0].vocabulary && (
          <StepContent
            title={data.translations.vocabulary}
            content={data.chapter.strings[0].vocabulary}
          />
        )}
      </div>
    )
  }
}

export default Chapter
