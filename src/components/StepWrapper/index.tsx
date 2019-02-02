import getWindowWidth from 'lib/getWindowWidth'
import * as React from 'react'
import cx from 'classnames'
import Header from './Header'
import Sidebar from './Sidebar'
import {IChapterTranslations, IChapterChapter} from '../../types/chapter'

interface Props {
  children: JSX.Element | JSX.Element[]
  course: IChapterChapter['course']
  otherLocaleName: string
  otherLocalePath: string
  t: IChapterTranslations
  title: string
}

interface State {
  isSideBarVisible: boolean
}
class StepWrapper extends React.Component<Props, State> {
  state = {
    isSideBarVisible: false,
  }

  componentWillMount() {
    if (getWindowWidth() > 800) {
      this.setState({isSideBarVisible: true})
    }
  }

  toggleSidebar = (): void => {
    this.setState(({isSideBarVisible}) => ({
      isSideBarVisible: !isSideBarVisible,
    }))
  }

  render() {
    const {
      children,
      course,
      otherLocaleName,
      otherLocalePath,
      t,
      title,
    } = this.props
    const {isSideBarVisible} = this.state
    return (
      <div>
        <Sidebar
          course={course}
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
