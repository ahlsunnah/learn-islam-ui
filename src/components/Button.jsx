// @flow
import * as React from 'react'
import styled from 'react-emotion'
import {boxShadowTransition} from '../styles'

const StyledButton = styled.button`
  ${boxShadowTransition};
`
const ElevatedButton = styled(StyledButton)`
  box-shadow: 12px 15px 20px rgba(0, 0, 0, 0.1);
  &:hover,
  &:focus {
    box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.1);
  }
`
const FlatButton = styled(StyledButton)`
  &:hover,
  &:focus {
    box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.1);
  }
`
type Props = {
  children: React.Node,
  className?: string,
  elevated?: boolean,
}
const Button = ({children, className = '', elevated}: Props) => {
  const commonClasses = `${className} ph3 pv2 pointer`
  return elevated ? (
    <ElevatedButton
      className={`${commonClasses} white bg-gold b--transparent dim`}
    >
      {children}
    </ElevatedButton>
  ) : (
    <FlatButton className={`${commonClasses} gold bg-transparent b--gold`}>
      {children}
    </FlatButton>
  )
}

export default Button
