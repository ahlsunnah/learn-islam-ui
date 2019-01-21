import cx from 'classnames'
import * as React from 'react'
import 'styles/button.scss'

interface Props {
  autoSize?: boolean
  children: JSX.Element | string
  className?: string
  elevated?: boolean
  greenStroked?: boolean
  inverse?: boolean
  pill?: boolean
  raised?: boolean
  rounded?: boolean
  secondary?: boolean
  stroked?: boolean
}

const Button = ({
  autoSize,
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
}: Props & React.HTMLProps<HTMLButtonElement>) => (
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
      'pv2 h-auto lh-title': autoSize,
    })}
    {...props}
    type="button"
  >
    {children}
  </button>
)

export default Button
