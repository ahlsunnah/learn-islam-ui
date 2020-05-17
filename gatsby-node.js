'use strict'

// Load ts files in gatsby.node
require('source-map-support').install()
require('ts-node').register()

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig()
  config.node.fs = 'empty' // fixes antlr4 build
  config.resolve.modules = ['src', 'node_modules']

  actions.replaceWebpackConfig(config)
}

// exports.onCreateBabelConfig = ({actions}) => {
//   actions.setBabelPlugin({
//     name: `babel-plugin-flow-react-proptypes`,
//   })
// }

exports.createPages = require('./src/build/createPages.ts').default

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = '/app/*'
    // Update the page.
    createPage(page)
  }
}
