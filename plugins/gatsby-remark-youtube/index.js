/* eslint no-param-reassign:0 */
const Promise = require(`bluebird`)
const visit = require(`unist-util-visit`)

const youtubeRE = /https?:\/\/www.youtube.com\/watch\?v=(\w+).*/

module.exports = ({markdownAST}) =>
  new Promise((resolve) => {
    visit(markdownAST, (node, index, parent) => {
      if (youtubeRE.test(node.url)) {
        const youtubeID = node.url.match(youtubeRE)[1]
        const rawHTML = `<div class="w-100 aspect-ratio aspect-ratio--4x3"><iframe class="aspect-ratio--object" frameBorder="0" type="text/html" src="https://www.youtube.com/embed/${youtubeID}?autoplay=0"></iframe></div>`

        // We change the parent because it is a paragraph and div cannot be inside a paragraph
        parent.type = 'html'
        parent.value = rawHTML
        delete parent.children
        delete node.type
        delete node.value
        return visit.EXIT
      }
      return visit.CONTINUE
    })
    return resolve(markdownAST)
  })
