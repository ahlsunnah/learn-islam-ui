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
          tracks: allFeathersTracks(
            limit: 1000
            sort: {fields: [order], order: ASC}
          ) {
            edges {
              node {
                slug
                order
                strings: tracksStrings {
                  locale
                  title
                }
                courses {
                  id
                  order
                  slug
                  coursesStrings {
                    locale
                    title
                  }
                  chapters {
                    order
                    slug
                    chaptersStrings {
                      locale
                      title
                    }
                  }
                  quizs {
                    difficulty
                    quizsStrings {
                      locale
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
        console.error(result.errors[0].message)
        reject()
        return
      }
      const {tracks} = result.data

      // sort courses and chapters:
      tracks.edges.forEach(({node: {courses}}) => {
        if (courses && courses.length) {
          courses.sort((a, b) => a.order - b.order)
          courses.forEach(({chapters}) => {
            chapters.sort((a, b) => a.order - b.order)
          })
        }
      })

      tracks.edges.forEach(({node}) => {
        const {courses, slug, strings} = node
        if (courses && courses.length) {
          // create track pages
          strings.forEach(({locale}) => {
            console.log(
              `creating TRACK page for slug (${slug}) and locale (${locale}) `,
            )
            createPage({
              path: `${localesPaths[locale]}${slug}/`,
              component: slash(trackTemplate),
              context: {
                locale,
                localesPaths: R.pick(
                  R.map(R.prop('locale'), strings),
                  localesPaths,
                ),
                slug,
              },
            })
          })

          courses.forEach((course, courseIndex) => {
            const {chapters, quizs, slug: courseSlug} = course
            // Which quiz difficulties do we have ?
            const difficultiesByLocale =
              quizs && quizs.length
                ? quizs.reduce((acc, {difficulty, quizsStrings}) => {
                    const currentTitle = `difficulty${difficulty}`
                    quizsStrings.forEach(({locale}) => {
                      if (!acc[locale]) {
                        acc[locale] = []
                      }
                      if (
                        !acc[locale].some(({title}) => title === currentTitle)
                      ) {
                        acc[locale].push({
                          title: currentTitle,
                          path: `${
                            localesPaths[locale]
                          }${slug}/${courseSlug}/ikhtibar-${difficulty}/`,
                        })
                        acc[locale].sort((a, b) => (a.title > b.title ? 1 : -1))
                      }
                    })
                    return acc
                  }, {})
                : {}
            // create chapter pages
            chapters.forEach((chapter, chapterIndex) => {
              const {slug: chapterSlug, chaptersStrings} = chapter
              chaptersStrings.forEach(({locale}) => {
                console.log(
                  `creating CHAPTER page for slug (${chapterSlug}) and locale (${locale}) `,
                )
                const next = {}
                if (chapterIndex < chapters.length - 1) {
                  next.type = 'chapter'
                  next.path = `${localesPaths[locale]}${slug}/${courseSlug}/${
                    chapters[chapterIndex + 1].slug
                  }/`
                  next.title = chapters[chapterIndex + 1].chaptersStrings.find(
                    (item) => item.locale === locale,
                  ).title
                } else if (
                  difficultiesByLocale[locale] &&
                  difficultiesByLocale[locale].length
                ) {
                  next.type = 'quiz'
                  next.path = difficultiesByLocale[locale][0].path
                  next.title = difficultiesByLocale[locale][0].title
                } else if (courseIndex < courses.length - 1) {
                  const nextCourse = courses[courseIndex + 1]
                  next.type = 'course'
                  next.path = `${localesPaths[locale]}${slug}/${
                    nextCourse.slug
                  }/${nextCourse.chapters[0].slug}/`
                  next.title = nextCourse.coursesStrings.find(
                    (item) => item.locale === locale,
                  ).title
                } else {
                  // TODO next track
                  next.type = 'tracks'
                  next.path = '/masar/'
                  next.title = strings.find(
                    (item) => item.locale === locale,
                  ).title
                }

                const chapterPath = `${
                  localesPaths[locale]
                }${slug}/${courseSlug}/${chapterSlug}/`
                createPage({
                  path: chapterPath,
                  component: slash(chapterTemplate),
                  context: {
                    locale,
                    localesPaths: R.pick(
                      R.map(R.prop('locale'), strings),
                      localesPaths,
                    ),
                    next,
                    slug: chapterSlug,
                  },
                })

                if (chapterIndex === 0) {
                  // course link redirects to first chapter
                  createRedirect({
                    fromPath: `${localesPaths[locale]}${slug}/${courseSlug}/`,
                    isPermanent: true,
                    redirectInBrowser: true,
                    toPath: chapterPath,
                  })
                }
              })
            })

            // Create quizs:
            if (quizs && quizs.length) {
              Object.entries(difficultiesByLocale).forEach(
                ([locale, difficulties]) => {
                  difficulties.forEach((difficulty, difficultyIndex) => {
                    console.log(
                      `Create QUIZS page for course ${courseSlug} and locale ${locale} and difficulty ${
                        difficulty.title
                      }`,
                    )
                    let nextQuiz
                    if (difficultyIndex < difficulties.length - 1) {
                      nextQuiz = {
                        type: 'quiz',
                        path: difficulties[difficultyIndex + 1].path,
                        title: difficulties[difficultyIndex + 1].title,
                      }
                    }
                    const next = {}
                    if (courseIndex < courses.length - 1) {
                      const nextCourse = courses[courseIndex + 1]
                      next.type = 'course'
                      next.path = `${localesPaths[locale]}${slug}/${
                        nextCourse.slug
                      }/${nextCourse.chapters[0].slug}/`
                      next.title = nextCourse.coursesStrings.find(
                        (item) => item.locale === locale,
                      ).title
                    } else {
                      // TODO next track
                      next.type = 'tracks'
                      next.path = '/masar/'
                      next.title = strings.find(
                        (item) => item.locale === locale,
                      ).title
                    }

                    createPage({
                      path: difficulty.path,
                      component: slash(quizsTemplate),
                      context: {
                        difficulty: parseInt(difficulty.title.slice(-1), 10),
                        locale,
                        localesPaths: R.pick(
                          R.map(R.prop('locale'), strings),
                          localesPaths,
                        ),
                        next,
                        nextQuiz,
                        slug: courseSlug,
                      },
                    })
                  })
                },
              )
            }
          })
        }
      })

      resolve()
    })
  })
