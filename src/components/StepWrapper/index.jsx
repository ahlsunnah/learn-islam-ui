// @flow
import getWindowWidth from 'lib/getWindowWidth'
import * as React from 'react'
import cx from 'classnames'
import Header from './Header'
import Sidebar from './Sidebar'

type Props = {
  children: React.Node,
  course: {
    slug: string,
    track: Object,
  },
  otherLocaleName: string,
  otherLocalePath: string,
  t: Object,
  title: string,
}

type State = {
  isSideBarVisible: boolean,
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

  toggleSidebar: Function = () => {
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
