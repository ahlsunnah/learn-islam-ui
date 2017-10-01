const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators
  return new Promise((resolve, reject) => {
    // We get the language path
    // prettier-ignore
    graphql(
      `
      {
        allContentfulWebsite(limit: 1000) {
          edges {
            node {
              languagePath
              node_locale
            }
          }
        }
      }  
      `
    ).then(languages => {
      if (languages.errors) {
          reject(languages.errors)
      }

      const homeTemplate = path.resolve(`./src/templates/Home.jsx`)
      const sectionTemplate = path.resolve(`./src/templates/Section.jsx`)
      const courseTemplate = path.resolve(`./src/templates/Course.jsx`)
      const chapterTemplate = path.resolve(`./src/templates/Chapter.jsx`)

      // we store the list of languages with their path
      const languagePaths = {}
      _.each(
        languages.data.allContentfulWebsite.edges,
        ({node:{languagePath, node_locale}}) => {
          languagePaths[node_locale] = languagePath
        }
      )
  
      // home pages
      Object.entries(languagePaths).forEach(([locale, languagePath]) => {
          createPage({
            path: languagePath,
            component: slash(homeTemplate),
            context: {
              languagePath,
              locale,
            },
          })
      })

      // get slugs of pages
      graphql(
        `
        {
          allContentfulSection(limit: 1000) {
            edges {
              node {
                slug
                node_locale
                course {
                  slug
                  chapter {
                    slug
                  }
                }
              }
            }
          }
        }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        _.each(result.data.allContentfulSection.edges, ({node}) => {
          const locale = node.node_locale
          const languagePath = languagePaths[locale]
          const courses = node.course

          if (languagePath) {
            // Section pages
            console.log(`Creating Section at path: ${languagePath}${node.slug}/`)
            createPage({
              path: `${languagePath}${node.slug}/`,
              component: slash(sectionTemplate),
              context: {
                slug: node.slug,
                languagePath,
                locale,
              },
            })

            _.each(courses, (course) => {
              // Course pages
              console.log(`Creating Course at path: ${languagePath}${node.slug}/${course.slug}`)
              createPage({
                path: `${languagePath}${node.slug}/${course.slug}/`,
                component: slash(courseTemplate),
                context: {
                  slug: course.slug,
                  languagePath,
                  locale,
                },
              })

              // Chapter pages
              _.each(course.chapter, (chapter) => {
                console.log(`Creating Chapter at path: ${languagePath}${node.slug}/${course.slug}/${chapter.slug}`)
                createPage({
                  path: `${languagePath}${node.slug}/${course.slug}/${chapter.slug}`,
                  component: slash(chapterTemplate),
                  context: {
                    slug: chapter.slug,
                    languagePath,
                    locale,
                  },
                })
              })
            })

          }  
        })
        resolve()
        })
      // end of section pages
      


      // Create section pages
    })
  })
}
