// @flow
import * as React from 'react'
import cx from 'classnames'

type Props = {
  children: React.Node,
  className?: string,
}

const Header = ({children, className = ''}: Props) => (
  <div className="pa3-ns">
    <div
      className={cx(
        'pa3 fixed-ns static top-0 right-0 left-0 z-999 raised-header',
        className,
      )}
    >
      {children}
    </div>
  </div>
)
export default Header
