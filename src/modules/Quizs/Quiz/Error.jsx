// @flow
import clear from 'images/clear.svg'
import * as React from 'react'

type Props = {
  className?: string,
}

const ErrorSvg = ({className = ''}: Props) => (
  <img alt="Error" className={className} src={clear} />
)
export default ErrorSvg
