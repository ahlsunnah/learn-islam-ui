declare module '*.jpg' {
  const value: string
  export = value
}
declare module '*.png' {
  const value: string
  export = value
}
declare module '*.svg' {
  const value: string
  export = value
}

declare module 'react-icons/lib/*' {
  const value: React.FC<{className?: string}>
  export = value
}

declare module 'gatsby-plugin-mailchimp' {
  const addToMailchimp: (
    email: string,
  ) => Promise<{msg: string; result: string}>
  export = addToMailchimp
}
