// @flow
import * as React from 'react'
import styled from 'react-emotion'

const StyledDiv = styled.div`
  text-indent: -9999em;
  width: 1em;
  height: 1em;
  margin: 72px auto;
  transform: translateZ(0);
  animation: load6 1.7s infinite ease, round 1.7s infinite ease;
  @keyframes round {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`
type Props = {
  className: string,
}
const Loader = ({className}: Props) => (
  <StyledDiv
    className={`${className} relative gold f-6 br-pill overflow-hidden`}
  />
)
export default Loader
