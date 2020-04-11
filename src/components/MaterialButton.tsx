// TODO: remove this file?

// The MIT License
//
// Copyright (c) 2018 Google, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React from 'react'
import classnames from 'classnames'
import {
  withRipple,
  InjectedProps,
  RippledComponentProps, // eslint-disable-line @typescript-eslint/no-unused-vars
} from '@material/react-ripple'
import {Link} from 'gatsby'

const CSS_CLASSES = {
  ROOT: 'mdc-button',
  ICON: 'mdc-button__icon',
  LABEL: 'mdc-button__label',
  DENSE: 'mdc-button--dense',
  RAISED: 'mdc-button--raised',
  OUTLINED: 'mdc-button--outlined',
  UNELEVATED: 'mdc-button--unelevated',
}

type ButtonTypes = HTMLAnchorElement | HTMLButtonElement

export interface IButtonProps<T extends ButtonTypes>
  extends InjectedProps<T>,
    React.AnchorHTMLAttributes<T>,
    React.ButtonHTMLAttributes<T> {
  raised?: boolean
  unelevated?: boolean
  outlined?: boolean
  dense?: boolean
  disabled?: boolean
  className?: string
  icon?: React.ReactElement<React.HTMLProps<HTMLOrSVGElement>>
  href?: string
  to?: string
  trailingIcon?: React.ReactElement<React.HTMLProps<HTMLOrSVGElement>>
}

export const Button = <T extends ButtonTypes>({
  className = '',
  raised = false,
  unelevated = false,
  outlined = false,
  dense = false,
  disabled = false,
  icon,
  href,
  children,
  initRipple = () => {},
  to,
  trailingIcon,
  // eslint disabled since we do not want to include
  // this in ...otherProps.
  // if unbounded is passed to the <button> element, it will throw
  // a warning.
  unbounded = false, // eslint-disable-line @typescript-eslint/no-unused-vars
  ...otherProps
}: IButtonProps<T>) => {
  const props = {
    className: classnames(CSS_CLASSES.ROOT, className, {
      [CSS_CLASSES.RAISED]: raised,
      [CSS_CLASSES.UNELEVATED]: unelevated,
      [CSS_CLASSES.OUTLINED]: outlined,
      [CSS_CLASSES.DENSE]: dense,
    }),
    disabled,
    ref: initRipple,
    ...otherProps,
  }
  if (to) {
    return (
      <Link
        {...(props as React.HTMLProps<HTMLAnchorElement>)}
        innerRef={initRipple as Function}
        ref={null}
        to={to}
      >
        {!trailingIcon ? renderIcon(icon) : null}
        <span className={CSS_CLASSES.LABEL}>{children}</span>
        {trailingIcon ? renderIcon(trailingIcon) : null}
      </Link>
    )
  }
  if (href) {
    return (
      <a {...(props as React.HTMLProps<HTMLAnchorElement>)} href={href}>
        {!trailingIcon ? renderIcon(icon) : null}
        <span className={CSS_CLASSES.LABEL}>{children}</span>
        {trailingIcon ? renderIcon(trailingIcon) : null}
      </a>
    )
  }

  return (
    <button {...(props as React.HTMLProps<HTMLButtonElement>)}>
      {!trailingIcon ? renderIcon(icon) : null}
      <span className={CSS_CLASSES.LABEL}>{children}</span>
      {trailingIcon ? renderIcon(trailingIcon) : null}
    </button>
  )
}

const renderIcon = (
  icon?: React.ReactElement<React.HTMLProps<HTMLOrSVGElement>>,
) =>
  icon
    ? React.cloneElement(icon, {
        className: classnames(CSS_CLASSES.ICON, icon.props.className),
      })
    : null

export default withRipple<IButtonProps<ButtonTypes>, ButtonTypes>(Button)
