// @flow
import * as React from 'react'
import cx from 'classnames'
import 'styles/button.scss'

type Props = {
  children: React.Node,
  className?: string,
  elevated?: boolean,
  inverse?: boolean,
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
      'button-color_and_stroke__secondary': stroked && secondary,
      'button-fill__secondary': secondary && !stroked,
      'button-inverse': inverse,
      'button-elevated': elevated,
      'mdc-button--raised': raised,
      'mdc-button--stroked': stroked,
    })}
    {...props}
  >
    {children}
  </button>
)

export default Button
