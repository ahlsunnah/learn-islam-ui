// @flow
import * as React from 'react'
import styled from 'react-emotion'
import Link from 'gatsby-link'

import {boxShadowTransition} from '../styles'

const CardDiv = styled.div`
  box-shadow: 5px 5px 25px 0px rgba(46, 61, 73, 0.2);
`

const DescendingCardDiv = styled(CardDiv)`
  &:hover {
    box-shadow: 2px 4px 8px 0px rgba(46, 61, 73, 0.2);
  }
  ${boxShadowTransition};
`
type Props = {
  children: React.Node,
  className?: string,
  to: string,
}
type State = {
  collapsed: boolean,
}
class Card extends React.Component<Props, State> {
  // TODO make a collapsed state
  state = {collapsed: false}
  render() {
    const {children, className = '', to} = this.props
    const commonClasses = `br2 ${className}`
    return to ? (
      <Link to={to}>
        <DescendingCardDiv className={commonClasses}>
          {children}
        </DescendingCardDiv>
      </Link>
    ) : (
      <CardDiv className={commonClasses}>{children}</CardDiv>
    )
  }
}

export default Card
