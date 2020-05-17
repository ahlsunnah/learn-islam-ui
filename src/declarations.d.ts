declare module '*.jpg' {
  const value: string
  export = value
}
declare module '*.png' {
  const value: string
  export = value
}

declare module '*.svg' {
  import * as React from 'react'

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>

  const src: string
  export default src
}
declare module 'react-icons/lib/*' {
  const value: React.FC<{ className?: string }>
  export = value
}

declare module 'gatsby-plugin-mailchimp' {
  const addToMailchimp: (email: string) => Promise<{ msg: string; result: string }>
  export = addToMailchimp
}
