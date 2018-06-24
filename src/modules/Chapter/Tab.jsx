// @flow
import cx from 'classnames'
import * as React from 'react'
import TabIcon from './TabIcon'

type Props = {
  active: boolean,
  children: string,
  handleClick: Function,
  type: string,
}
const Tab = ({active, children, handleClick, type}: Props) => (
  <button
    className={cx('mdc-tab bn', {
      'mdc-tab--active black-80': active,
    })}
    name={type}
    onClick={handleClick}
  >
    <div className="flex items-center justify-center">
      <TabIcon className="h2 mh1" height="20px" type={type} />
      <span className="mh1 dn db-l">{children}</span>
      <span className="mdc-tab__indicator" />
    </div>
  </button>
)
export default Tab
