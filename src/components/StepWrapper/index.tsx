import getWindowWidth from 'lib/getWindowWidth'
import * as React from 'react'
import cx from 'classnames'
import Header from './Header'
import Sidebar from './Sidebar'
import {
  ISidebarTranslations,
  ISidebarTrack,
  IDawaSidebarTrack,
} from '../../types/sidebar'

interface IProps {
  children: JSX.Element | JSX.Element[]
  currentCourseSlug: string
  track: ISidebarTrack | IDawaSidebarTrack
  otherLocaleName: string
  otherLocalePath: string
  t: ISidebarTranslations
  title: string
}

interface IState {
  isSideBarVisible: boolean
}
class StepWrapper extends React.Component<IProps, IState> {
  public state = {
    isSideBarVisible: false,
  }

  public componentWillMount(): void {
    if (getWindowWidth() > 800) {
      this.setState({isSideBarVisible: true})
    }
  }

  private toggleSidebar = (): void => {
    this.setState(
      ({isSideBarVisible}): IState => ({
        isSideBarVisible: !isSideBarVisible,
      }),
    )
  }

  public render(): JSX.Element {
    const {
      children,
      currentCourseSlug,
      track,
      otherLocaleName,
      otherLocalePath,
      t,
      title,
    } = this.props
    const {isSideBarVisible} = this.state
    return (
      <div>
        <Sidebar
          currentCourseSlug={currentCourseSlug}
          track={track}
          isOpen={isSideBarVisible}
          t={t}
          toggleDrawer={this.toggleSidebar}
        />
        <div
          className={cx('absolute w-100 flex flex-column items-stretch', {
            wrapperWithoutSidebar: isSideBarVisible,
          })}
        >
          <Header
            otherLocaleName={otherLocaleName}
            otherLocalePath={otherLocalePath}
            title={title}
            toggleSidebar={this.toggleSidebar}
          />
          {children}
        </div>
      </div>
    )
  }
}
export default StepWrapper
