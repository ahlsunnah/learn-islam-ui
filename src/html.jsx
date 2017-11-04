// @flow
import * as React from 'react'

// const BUILD_TIME = new Date().getTime()
type Props = {
  body: string,
  headComponents: React.Node,
  postBodyComponents: React.Node,
}
const HTML = ({body, headComponents, postBodyComponents}: Props) => (
  <html lang="ar">
    <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>title</title>
      <meta name="author" content="name" />
      <meta name="description" content="description here" />
      <meta name="keywords" content="keywords,here" />
      {process.env.NODE_ENV === 'production' && (
        <link rel="stylesheet" href="/styles.css" type="text/css" />
      )}

      {/* <link
          rel="shortcut icon"
          href="favicon.ico"
          type="image/vnd.microsoft.icon"
        /> */}
      {headComponents}
    </head>
    <body>
      <div id="___gatsby" dangerouslySetInnerHTML={{__html: body}} />
      {postBodyComponents}
    </body>
  </html>
)

export default HTML
