/* eslint no-console: 0 */
// const _ = require(`lodash`)
const R = require(`ramda`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

const locales = ['ar', 'fr']
const localesPaths = {
  ar: '/',
  fr: '/fr/',
}

exports.createPages = ({
  graphql,
  boundActionCreators: {createPage, createRedirect},
}) =>
  new Promise((resolve, reject) => {
    // const MainLayout = path.resolve(`./src/templates/MainLayout.jsx`)
    const homeTemplate = path.resolve(`./src/templates/Home.jsx`)
    const tracksTemplate = path.resolve(`./src/templates/Tracks.jsx`)
    const trackTemplate = path.resolve(`./src/templates/Track.jsx`)
    // const courseTemplate = path.resolve(`./src/templates/Course.jsx`)
    const chapterTemplate = path.resolve(`./src/templates/Chapter.jsx`)
    const quizsTemplate = path.resolve(`./src/templates/Quizs.jsx`)

    // home pages
    console.log('Creating home pages')
    locales.forEach((locale) => {
      createPage({
        path: localesPaths[locale],
        component: slash(homeTemplate),
        context: {
          locale,
          localesPaths,
        },
      })
    })

    // tracks pages
    console.log('Creating tracks pages')
    locales.forEach((locale) => {
      createPage({
        path: `${localesPaths[locale]}masar`,
        component: slash(tracksTemplate),
        context: {
          locale,
          localesPaths,
        },
      })
    })

    console.log('fetching data')
    // prettier-ignore-start
    graphql(
      `
        {
          tracks: allFeathersTracks(limit: 1000) {
            edges {
              node {
                slug
                strings: tracksStrings {
                  locale
                }
                courses {
                  id
                  slug
                  coursesStrings {
                    locale
                  }
                  chapters {
                    slug
                    chaptersStrings {
                      locale
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
      // prettier-ignore-end
    ).then((result) => {
      if (result.errors) {
        console.error(result.errors[0].message)
        reject()
        return
      }
      const {tracks} = result.data
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

          courses.forEach((course) => {
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
                        !acc[locale].some(({title}) => title == currentTitle)
                      ) {
                        acc[locale].push({
                          title: currentTitle,
                          path: `${
                            localesPaths[locale]
                          }${slug}/${courseSlug}/ikhtibar-${difficulty}`,
                        })
                        acc[locale].sort((a, b) => (a.title > b.title ? 1 : -1))
                      }
                    })
                    return acc
                  }, {})
                : {}
            // create chapter pages
            chapters.forEach((chapter, i) => {
              const {slug: chapterSlug, chaptersStrings} = chapter
              chaptersStrings.forEach(({locale}) => {
                console.log(
                  `creating CHAPTER page for slug (${chapterSlug}) and locale (${locale}) `,
                )
                const path = `${
                  localesPaths[locale]
                }${slug}/${courseSlug}/${chapterSlug}`
                createPage({
                  path,
                  component: slash(chapterTemplate),
                  context: {
                    difficulties: difficultiesByLocale[locale],
                    locale,
                    localesPaths: R.pick(
                      R.map(R.prop('locale'), strings),
                      localesPaths,
                    ),
                    slug: chapterSlug,
                  },
                })

                if (i === 0) {
                  // We don't have course page => we redirect to first chapter
                  createRedirect({
                    fromPath: `${localesPaths[locale]}${slug}/${courseSlug}`,
                    isPermanent: true,
                    redirectInBrowser: true,
                    toPath: path,
                  })
                }
              })
            })

            // Create quizs:
            if (quizs && quizs.length) {
              Object.entries(difficultiesByLocale).forEach(
                ([locale, difficulties]) => {
                  difficulties.forEach((difficulty) => {
                    console.log(
                      `Create QUIZS page for course ${courseSlug} and locale ${locale} and difficulty ${
                        difficulty.title
                      }`,
                    )
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
