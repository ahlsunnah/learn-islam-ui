// @flow
import * as React from 'react'
import styled from 'react-emotion'
import cx from 'classnames'

const HeaderDiv = styled.div`
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
`

type Props = {
  children: React.Node,
  className?: string,
}
type State = {}
class Header extends React.Component<Props, State> {
  state = {}
  render() {
    const {children, className = ''} = this.props
    return (
      <div className={cx('pa3', className)}>
        <HeaderDiv
          className={cx('pa3 fixed top-0 right-0 left-0 z-999', className)}
        >
          {children}
        </HeaderDiv>
      </div>
    )
  }
}
export default Header
