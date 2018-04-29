// @flow
/* eslint react/no-array-index-key: 0 */
import * as React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import FaBars from 'react-icons/lib/fa/bars'
import GoMoveLeft from 'react-icons/lib/go/move-left'
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
      strings: Strings,
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
    if (window && window.innerWidth > 1024) {
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
    const {isSideBarVisible} = this.state
    console.log(data)
    return (
      <div className="flex">
        <Helmet title={`title`} />
      </div>
    )
  }
}

export default Chapter
