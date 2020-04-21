import cx from 'classnames'
import React from 'react'
import MaterialCard from '@material/react-card'
import '@material/react-card/dist/card.css'
import 'styles/card.scss'

interface IProps {
  children: JSX.Element | JSX.Element[]
  className?: string
  rounded?: boolean
}
const Card = ({ children, className, rounded }: IProps): JSX.Element => (
  <MaterialCard className={cx(className, { 'card-rounded': rounded })}>{children}</MaterialCard>
)
export default Card
