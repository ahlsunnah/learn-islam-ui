import cx from 'classnames'
import React from 'react'
import TabIcon from './TabIcon'

interface Props {
  active: boolean
  children: string
  handleClick: (event: React.MouseEvent) => void
  svgClassName?: string
  svgPath: string
  type: string
}
const Tab = ({ active, children, handleClick, svgClassName, svgPath, type }: Props) => (
  <div
    className={cx('flex1 bb bw1 ', {
      'b--black': active,
      'b--transparent': !active,
    })}
  >
    <button
      className={cx('w-100 pv0 bn hover-only-bg-black-10 b--transparent pointer outline-0')}
      name={type}
      onClick={handleClick}
      type="button"
    >
      <div
        className={cx('pv3 flex items-center justify-center transition-color hover-black-80', {
          'black-80': active,
          'black-60': !active,
        })}
      >
        <TabIcon className={cx('h2 mh0 mh1-l', svgClassName)} path={svgPath} />
        <span className="mh1 dn db-l">{children}</span>
      </div>
    </button>
  </div>
)
export default Tab
