import getWindowWidth from 'lib/getWindowWidth'
import React from 'react'
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
    return <div></div>
  }
}
export default StepWrapper
