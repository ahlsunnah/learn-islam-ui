// @flow
import * as React from 'react'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`) // eslint-disable-line
  } catch (e) {
    console.log(e) // eslint-disable-line no-console
  }
}

// const BUILD_TIME = new Date().getTime()
type Props = {
  body: string,
  headComponents: React.Node,
  postBodyComponents: React.Node,
  preBodyComponents: React.Node,
}
const HTML = ({
  body,
  headComponents,
  postBodyComponents,
  preBodyComponents,
}: Props) => {
  let css
  if (process.env.NODE_ENV === 'production') {
    css = (
      <style
        id="gatsby-inlined-css"
        dangerouslySetInnerHTML={{__html: stylesStr}}
      />
    )
  }
  return (
    <html lang="ar">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Learn islam</title>
        <meta name="author" content="name" />
        <meta name="description" content="description here" />
        <meta name="keywords" content="keywords,here" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Amiri:400,700|Open+Sans:400,600&amp;subset=arabic"
          rel="stylesheet"
        />
        {/* <link
          rel="shortcut icon"
          href="favicon.ico"
          type="image/vnd.microsoft.icon"
        /> */}
        {headComponents}
        {css}
        {process.env.NODE_ENV === 'production' && (
          <link
            rel="stylesheet"
            href="https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css"
          />
        )}
      </head>
      <body>
        {preBodyComponents}
        <div id="___gatsby" dangerouslySetInnerHTML={{__html: body}} />
        {postBodyComponents}
      </body>
    </html>
  )
}

export default HTML
