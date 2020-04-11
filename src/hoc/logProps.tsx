/* eslint react/display-name:0 */
import React from 'react'

const logProps = (Component: any): any => (props: object): React.ReactNode => {
  console.log(props)
  return <Component {...props} />
}

export default logProps
