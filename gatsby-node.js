/* eslint no-console: 0 */
const R = require(`ramda`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

const locales = ['ar', 'fr']
const localesPaths = {
  ar: '/',
  fr: '/fr/',
}
const otherLocalesPaths = locales
  .slice()
  .reverse()
  .reduce((prev, curr, currIndex) => {
    prev[curr] = localesPaths[locales[currIndex]] // eslint-disable-line no-param-reassign
    return prev
  }, {})

exports.onCreateWebpackConfig = ({actions, getConfig}) => {
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

exports.createPages = ({graphql, actions: {createPage, createRedirect}}) =>
  new Promise((resolve, reject) => {
    // const MainLayout = path.resolve(`./src/templates/MainLayout.jsx`)
    const homeTemplate = path.resolve(`./src/templates/Home.tsx`)
    const tracksTemplate = path.resolve(`./src/templates/Tracks.tsx`)
    const aboutUsTemplate = path.resolve(`./src/templates/AboutUs.tsx`)
    const trackTemplate = path.resolve(`./src/templates/Track.tsx`)
    const chapterTemplate = path.resolve(`./src/templates/Chapter.tsx`)
    const quizsTemplate = path.resolve(`./src/templates/Quizs.tsx`)

    // home pages
    console.log('Creating home pages')
    locales.forEach((locale) => {
      createPage({
        path: localesPaths[locale],
        component: slash(homeTemplate),
        context: {
          locale,
          localesPaths,
          otherLanguagePath: otherLocalesPaths[locale],
        },
      })
    })

    // tracks pages
    console.log('Creating tracks pages')
    locales.forEach((locale) => {
      createPage({
        path: `${localesPaths[locale]}masar/`,
        component: slash(tracksTemplate),
        context: {
          locale,
          localesPaths,
          otherLanguagePath: `${otherLocalesPaths[locale]}masar/`,
        },
      })
    })

    // about us pages
    console.log('Creating about us pages')
    locales.forEach((locale) => {
      createPage({
        path: `${localesPaths[locale]}nahnu/`,
        component: slash(aboutUsTemplate),
        context: {
          locale,
          localesPaths,
          otherLanguagePath: `${otherLocalesPaths[locale]}nahnu/`,
        },
      })
    })

    console.log('fetching data')
    graphql(
      `
        {
          api {
            tracks: allTracks {
              edges {
                node {
                  id
                  slug
                  translations {
                    edges {
                      node {
                        id
                        locale
                        title
                      }
                    }
                  }
                  courses: courseSet {
                    edges {
                      node {
                        id
                        slug
                        quizDifficulties
                        translations {
                          edges {
                            node {
                              id
                              locale
                              title
                            }
                          }
                        }
                        chapters: chapterSet {
                          edges {
                            node {
                              id
                              slug
                              translations {
                                edges {
                                  node {
                                    id
                                    locale
                                    title
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
    ).then((result) => {
      if (result.errors) {
        result.errors.forEach((error) => console.error(error.message))
        reject()
        return
      }
      const {
        api: {tracks},
      } = result.data

      tracks.edges.forEach(({node: track}) => {
        const {courses, id: trackId, slug: trackSlug, translations} = track
        if (courses && courses.edges.length) {
          // create track pages
          translations.edges.forEach(({node: {locale}}) => {
            console.log(
              `creating TRACK page for slug (${trackSlug}) and locale (${locale}) `,
            )
            createPage({
              path: `${localesPaths[locale]}${trackSlug}/`,
              component: slash(trackTemplate),
              context: {
                id: trackId,
                locale,
                localesPaths,
                slug: trackSlug,
              },
            })
          })

          courses.edges.forEach(({node: course}, courseIndex) => {
            const {
              chapters,
              id: courseId,
              quizDifficulties,
              slug: courseSlug,
            } = course

            // create chapter pages
            chapters.edges.forEach(({node: chapter}, chapterIndex) => {
              const {
                id: chapterId,
                slug: chapterSlug,
                translations: chaptersTranslations,
              } = chapter
              chaptersTranslations.edges.forEach(({node: {locale}}) => {
                console.log(
                  `creating CHAPTER page for slug (${chapterSlug}) and locale (${locale}) `,
                )
                const next = {}
                if (chapterIndex < chapters.edges.length - 1) {
                  next.type = 'chapter'
                  next.path = `${
                    localesPaths[locale]
                  }${trackSlug}/${courseSlug}/${
                    chapters.edges[chapterIndex + 1].node.slug
                  }/`
                  next.title = chapters.edges[
                    chapterIndex + 1
                  ].node.translations.edges.find(
                    ({node: item}) => item.locale === locale,
                  ).node.title
                } else if (quizDifficulties.length) {
                  next.type = 'quiz'
                  next.path = `${
                    localesPaths[locale]
                  }${trackSlug}/${courseSlug}/ikhtibar-${quizDifficulties[0]}/`
                  next.title = `difficulty${quizDifficulties[0]}`
                } else if (courseIndex < courses.edges.length - 1) {
                  const nextCourse = courses.edges[courseIndex + 1].node
                  next.type = 'course'
                  next.path = `${localesPaths[locale]}${trackSlug}/${
                    nextCourse.slug
                  }/${nextCourse.chapters.edges[0].node.slug}/`
                  next.title = nextCourse.translations.edges.find(
                    ({node: item}) => item.locale === locale,
                  ).node.title
                } else {
                  // TODO next track
                  next.type = 'tracks'
                  next.path = '/masar/'
                  next.title = translations.find(
                    ({node: item}) => item.locale === locale,
                  ).node.title
                }

                const chapterPath = `${
                  localesPaths[locale]
                }${trackSlug}/${courseSlug}/${chapterSlug}/`
                createPage({
                  path: chapterPath,
                  component: slash(chapterTemplate),
                  context: {
                    locale,
                    localesPaths,
                    next,
                    slug: chapterSlug,
                    id: chapterId,
                  },
                })

                if (chapterIndex === 0) {
                  // course link redirects to first chapter
                  createRedirect({
                    fromPath: `${
                      localesPaths[locale]
                    }${trackSlug}/${courseSlug}/`,
                    isPermanent: true,
                    redirectInBrowser: true,
                    toPath: chapterPath,
                  })
                }
              })
            })

            // Create quizs:
            if (quizDifficulties && quizDifficulties.length) {
              locales.forEach((locale) => {
                quizDifficulties.forEach((difficulty, difficultyIndex) => {
                  console.log(
                    `Create QUIZS page for course ${courseSlug} and locale ${locale} and difficulty ${difficulty}`,
                  )
                  let nextQuiz

                  if (difficultyIndex < quizDifficulties.length - 1) {
                    nextQuiz = {
                      type: 'quiz',
                      path: `${
                        localesPaths[locale]
                      }${trackSlug}/${courseSlug}/ikhtibar-${difficultyIndex +
                        1}/`,
                      title: `difficulty${
                        quizDifficulties[difficultyIndex + 1]
                      }`,
                    }
                  }
                  const next = {}
                  if (courseIndex < courses.length - 1) {
                    const nextCourse = courses[courseIndex + 1]
                    next.type = 'course'
                    next.path = `${localesPaths[locale]}${trackSlug}/${
                      nextCourse.slug
                    }/${nextCourse.chapters[0].slug}/`
                    next.title = nextCourse.coursesStrings.find(
                      (item) => item.locale === locale,
                    ).title
                  } else {
                    // TODO next track
                    next.type = 'tracks'
                    next.path = '/masar/'
                    next.title = translations.edges.find(
                      ({node: item}) => item.locale === locale,
                    ).title
                  }

                  createPage({
                    path: `${
                      localesPaths[locale]
                    }${trackSlug}/${courseSlug}/ikhtibar-${difficulty}/`,
                    title: `difficulty${quizDifficulties[difficulty]}`,
                    component: slash(quizsTemplate),
                    context: {
                      difficulty,
                      locale,
                      localesPaths,
                      next,
                      nextQuiz,
                      slug: courseSlug,
                      id: courseId,
                    },
                  })
                })
              })
            }
          })
        }
      })

      resolve()
    })
  })
