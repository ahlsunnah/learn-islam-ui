const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createLayout, createPage} = boundActionCreators
  return new Promise((resolve, reject) => {
    // We get the language path
    // prettier-ignore
    graphql(
      `
      {
        allContentfulWebsite(limit: 1000) {
          edges {
            node {
              languageName
              languagePath
              node_locale
            }
          }
        }
      }  
      `
    ).then(languagesRes => {
      if (languagesRes.errors) {
          reject(languagesRes.errors)
      }

      const MainLayout = path.resolve(`./src/templates/MainLayout.jsx`)
      const MainLayout2 = path.resolve(`./src/templates/MainLayout2.jsx`)

      const homeTemplate = path.resolve(`./src/templates/Home.jsx`)
      const sectionTemplate = path.resolve(`./src/templates/Section.jsx`)
      const courseTemplate = path.resolve(`./src/templates/Course.jsx`)
      const chapterTemplate = path.resolve(`./src/templates/Chapter.jsx`)

      // we store the list of languages with their path
      const languagePaths = {}
      // We need languages list on all pages
      // We prepare it here to be able to choose enabled languages from here
      const languages = []
      _.each(
        languagesRes.data.allContentfulWebsite.edges,
        ({node:{languageName, languagePath, node_locale}}) => {
          languagePaths[node_locale] = languagePath
          languages.push ({
            languageName,
            languagePath,
          })
        }
      )
      
      // layout for each lang
      Object.keys(languagePaths).forEach((locale, i) => {
          createLayout({
            // component: slash(MainLayout),
            component: slash(i === 1 ? MainLayout2 : MainLayout),
            id: `main-layout-${locale}`,
            context: {
              languages,
              locale,
            },
          })
      })

      // home pages
      Object.entries(languagePaths).forEach(([locale, languagePath]) => {
          createPage({
            path: languagePath,
            component: slash(homeTemplate),
            context: {
              languagePath,
              languages,
              locale,
            },
            layout: `main-layout-${locale}`
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
            // console.log(`Creating Section at path: ${languagePath}${node.slug}/`)
            createPage({
              path: `${languagePath}${node.slug}/`,
              component: slash(sectionTemplate),
              context: {
                slug: node.slug,
                languagePath,
                languages,
                locale,
              },
              layout: `main-layout-${locale}`
            })

            _.each(courses, (course) => {
              // Course pages
              // console.log(`Creating Course at path: ${languagePath}${node.slug}/${course.slug}`)
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
                // console.log(`Creating Chapter at path: ${languagePath}${node.slug}/${course.slug}/${chapter.slug}`)
                createPage({
                  path: `${languagePath}${node.slug}/${course.slug}/${chapter.slug}`,
                  component: slash(chapterTemplate),
                  context: {
                    slug: chapter.slug,
                    languagePath,
                    languages,
                    locale,
                  },
                  layout: `main-layout-${locale}`
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
