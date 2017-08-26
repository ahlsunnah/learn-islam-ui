const path = require('path')

exports.onCreateNode = ({node, getNode, boundActionCreators}) => {
  const {createNodeField} = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    const relativePath = fileNode.relativePath
      .replace(`index${fileNode.ext}`, '')
      .replace(fileNode.ext, '/')
    createNodeField({
      node,
      name: `path`,
      value: `/${relativePath}`,
    })
  }
}

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

  return graphql(`{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {  
          excerpt(pruneLength: 250)
          html
          id
          fields {
            path
          }
          frontmatter {
            date
            title
          }
        }
      }
    }
  }`).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: node.fields.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}
