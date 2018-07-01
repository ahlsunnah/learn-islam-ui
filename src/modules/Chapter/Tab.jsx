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
  <div
    className={cx('flex1 bb bw1 ', {
      'b--black': active,
      'b--transparent': !active,
    })}
  >
    <button
      className={cx(
        'w-100 pv0 bn hover-only-bg-black-10 b--transparent pointer outline-0',
      )}
      name={type}
      onClick={handleClick}
    >
      <div
        className={cx('pv3 flex items-center justify-center', {
          'black-80': active,
          'black-60': !active,
        })}
      >
        <TabIcon className="h2 mh0 mh1-l" height="20px" type={type} />
        <span className="mh1 dn db-l">{children}</span>
      </div>
    </button>
  </div>
)
export default Tab
