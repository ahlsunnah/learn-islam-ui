import createPagesScript from './src/build/createPages'

export const onCreateWebpackConfig = ({ actions, getConfig }: any) => {
  const config = getConfig()
  config.node.fs = 'empty' // fixes antlr4 build
  config.resolve.modules = ['src', 'node_modules']

  actions.replaceWebpackConfig(config)
}

export const createPages = createPagesScript

export const onCreatePage = async ({ page, actions }: any) => {
  const { createPage } = actions
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = '/app/*'
    // Update the page.
    createPage(page)
  }
}
