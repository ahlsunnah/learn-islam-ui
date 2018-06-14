// @flow
import cx from 'classnames'
import * as React from 'react'
import 'styles/button.scss'

type Props = {
  children: React.Node,
  className?: string,
  elevated?: boolean,
  inverse?: boolean,
  greenStroked?: boolean,
  pill?: boolean,
  raised?: boolean,
  rounded?: boolean,
  secondary?: boolean,
  stroked?: boolean,
}
const Button = ({
  children,
  className = '',
  elevated,
  inverse,
  greenStroked,
  raised,
  rounded = true,
  secondary,
  stroked,
  ...props
}: Props) => (
  <button
    className={cx('mdc-button', className, {
      // br11: rounded,
      'br-pill': rounded,
      'button-color_and_outlined__secondary': stroked && secondary,
      'button-fill__secondary': secondary && !stroked,
      'button-inverse': inverse,
      'button-elevated': elevated,
      'mdc-button--raised': raised,
      'mdc-button--outlined': stroked,
      'button-stroked-green': greenStroked,
    })}
    {...props}
  >
    {children}
  </button>
)

export default Button
