import * as React from 'react'

interface Props {
  className: string
  path: string
}

const TabIcon = ({className, path}: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
  >
    <path fill="currentColor" fillRule="evenodd" d={path} />
  </svg>
)

export default TabIcon
