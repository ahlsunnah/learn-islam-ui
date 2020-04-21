/** @jsx jsx */
import { jsx } from 'theme-ui'
import cx from 'classnames'
import MaterialButton, { IButtonProps } from './MaterialButton'
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
}: IProps & IButtonProps<ButtonTypes>) => (
  <MaterialButton
    className={cx(className, {
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
