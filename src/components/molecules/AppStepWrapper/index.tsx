import getWindowWidth from 'lib/getWindowWidth'
import React from 'react'
import cx from 'classnames'
import Header from './Header'
import Sidebar from './Sidebar'
import { TChapterPageTrackFragment } from '../../../graphqlTypes'

interface IProps {
  children: JSX.Element | JSX.Element[]
  currentCourseSlug: string
  track: TChapterPageTrackFragment
  otherLocaleName: string
  otherLocalePath: string
  title: string
}

interface IState {
  isSideBarVisible: boolean
}

class StepWrapper extends React.Component<IProps, IState> {
  public state = {
    isSideBarVisible: false,
  }

  public componentDidMount(): void {
    if (getWindowWidth() > 800) {
      this.setState({ isSideBarVisible: true })
    }
  }

  private toggleSidebar = (): void => {
    this.setState(
      ({ isSideBarVisible }): IState => ({
        isSideBarVisible: !isSideBarVisible,
      })
    )
  }

  public render(): JSX.Element {
    const { children, currentCourseSlug, track, otherLocaleName, otherLocalePath, title } = this.props
    const { isSideBarVisible } = this.state
    return (
      <div>
        <Sidebar currentCourseSlug={currentCourseSlug} track={track} isOpen={isSideBarVisible} />
        <div>
          <Header otherLocaleName={otherLocaleName} otherLocalePath={otherLocalePath} title={title} />
          {children}
        </div>
      </div>
    )
  }
}
export default StepWrapper
