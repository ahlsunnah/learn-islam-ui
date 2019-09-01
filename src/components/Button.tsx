import cx from 'classnames'
import * as React from 'react'
import MaterialButton, {ButtonProps} from './MaterialButton'
import '@material/react-button/dist/button.css'
import 'styles/button.scss'

interface IProps {
  autoSize?: boolean
  children: JSX.Element | string
  className?: string
  elevated?: boolean
  greenOutlined?: boolean
  inverse?: boolean
  pill?: boolean
  raised?: boolean
  rounded?: boolean
  outlined?: boolean
}

type ButtonTypes = HTMLAnchorElement | HTMLButtonElement

const Button = ({
  autoSize,
  children,
  className = '',
  elevated,
  inverse,
  greenOutlined,
  rounded = true,
  outlined,
  ...props
}: IProps & ButtonProps<ButtonTypes>) => (
  <MaterialButton
    className={cx('mdc-button', className, {
      'br-pill': rounded,
      'button-inverse': inverse,
      'button-elevated': elevated,
      'button-outlined-green': greenOutlined,
      'pv2 h-auto lh-title': autoSize,
    })}
    outlined={outlined}
    {...props}
  >
    {children}
  </MaterialButton>
)

export default Button
