/** @jsx jsx */
import { ButtonProps } from '@material-ui/core'
import MaterialButton from '@material-ui/core/Button'
import { jsx } from 'theme-ui'
import { SystemCssProperties, CSSPseudoSelectorProps, CSSSelectorObject } from '@styled-system/css'

type Props<C extends React.ElementType> = ButtonProps<C, { component?: C }> & {
  autoSize?: boolean
  className?: string
  elevated?: boolean
  greenOutlined?: boolean
  inverse?: boolean
  pill?: boolean
  raised?: boolean
  rounded?: boolean
  outlined?: boolean
}

const Button = <C extends React.ElementType>({
  autoSize,
  className,
  pill = true,
  outlined,
  elevated,
  inverse,
  raised,
  rounded = true,
  ...props
}: Props<C>) => {
  const styles: (SystemCssProperties & CSSPseudoSelectorProps) | CSSSelectorObject = {
    textTransform: 'unset',
  }
  let variant: 'text' | 'outlined' | 'contained' = 'contained'
  let color: 'inherit' | 'primary' | 'secondary' | 'default' = 'primary'
  if (outlined) {
    variant = 'outlined'
    styles.borderWidth = 2
    styles[':hover'] = {
      borderWidth: 2,
    }
  }
  if (pill) {
    styles.borderRadius = 9999
  }
  if (elevated) {
    styles.boxShadow = '0 8px 8px rgba(0,0,0,.24),0 0 8px rgba(0,0,0,.12)'
    styles[':hover'] = {
      ...(styles[':hover'] || {}),
      boxShadow: '0 4px 4px rgba(0,0,0,.24),0 0 4px rgba(0,0,0,.12)',
    }
  }
  return <MaterialButton color={color} variant={variant} {...props} className={className} sx={styles}></MaterialButton>
}

export default Button
