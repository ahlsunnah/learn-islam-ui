import cx from 'classnames'
import * as React from 'react'
import 'styles/card.scss'

interface Props {
  children: JSX.Element | JSX.Element[]
  className?: string
  rounded?: boolean
}
const Card = ({children, className, rounded}: Props) => (
  <div className={cx('mdc-card', className, {'card-rounded': rounded})}>
    {children}
  </div>
)
export default Card
