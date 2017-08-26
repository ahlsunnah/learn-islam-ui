import React from 'react'
import PropTypes from 'prop-types'

const BUILD_TIME = new Date().getTime()

const HTML = ({body, headComponents, postBodyComponents}) =>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>title</title>
      <meta name="author" content="name" />
      <meta name="description" content="description here" />
      <meta name="keywords" content="keywords,here" />
      {process.env.NODE_ENV === 'production' &&
        <link rel="stylesheet" href="/styles.css" type="text/css" />}
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

HTML.propTypes = {
  body: PropTypes.string,
  headComponents: PropTypes.node,
  postBodyComponents: PropTypes.node,
}

export default HTML
