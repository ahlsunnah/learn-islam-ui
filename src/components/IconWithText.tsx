import React from 'react'
import cx from 'classnames'

interface Props {
  className?: string
  children: string
  icon: string
}
const IconWithText = ({children, className, icon}: Props) => (
  <div className={cx('flex items-center f7', className)}>
    <img className="mh1 h1-5" src={icon} alt="" />
    <span className="mh1">{children}</span>
  </div>
)
export default IconWithText
