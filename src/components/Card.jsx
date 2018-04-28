// @flow
import * as React from 'react'
import '../styles/card.scss'
import cx from 'classnames'

type Props = {
  children: React.Node,
  className?: string,
  rounded?: boolean,
}
const Card = ({children, className, rounded}: Props) => (
  <div className={cx('mdc-card', className, {'card-rounded': rounded})}>
    {children}
  </div>
)
export default Card
