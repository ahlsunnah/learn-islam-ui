import * as React from 'react'

interface Props {
  children: string
  className?: string
}
const RawHTML = ({children, className = ''}: Props) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: children,
    }}
  />
)

export default RawHTML
