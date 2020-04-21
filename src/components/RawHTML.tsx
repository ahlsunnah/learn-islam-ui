import React from 'react'

interface IProps {
  children: string
  className?: string
}
const RawHTML = ({ children, className = '' }: IProps) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: children,
    }}
  />
)

export default RawHTML
