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

exports.createPages = ({graphql, boundActionCreators: {createPage}}) =>
  new Promise((resolve, reject) => {
    // const MainLayout = path.resolve(`./src/templates/MainLayout.jsx`)
    const homeTemplate = path.resolve(`./src/templates/Home.jsx`)
    const tracksTemplate = path.resolve(`./src/templates/Tracks.jsx`)
    const trackTemplate = path.resolve(`./src/templates/Track.jsx`)
    // const courseTemplate = path.resolve(`./src/templates/Course.jsx`)
    const chapterTemplate = path.resolve(`./src/templates/Chapter.jsx`)
    const quizTemplate = path.resolve(`./src/templates/Quiz.jsx`)

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
            const {chapters, slug: courseSlug} = course
            // create course pages (redirect)
            // TODO

            // create chapter pages
            chapters.forEach((chapter) => {
              const {slug: chapterSlug, chaptersStrings, quizs} = chapter
              chaptersStrings.forEach(({locale}) => {
                console.log(
                  `creating CHAPTER page for slug (${chapterSlug}) and locale (${locale}) `,
                )
                createPage({
                  path: `${
                    localesPaths[locale]
                  }${slug}/${courseSlug}/${chapterSlug}`,
                  component: slash(chapterTemplate),
                  context: {
                    locale,
                    localesPaths: R.pick(
                      R.map(R.prop('locale'), strings),
                      localesPaths,
                    ),
                    slug: chapterSlug,
                  },
                })

                // Create quizs:
                if (quizs && quizs.length) {
                  // Which difficulties do we have ?
                  const difficulties = quizs.reduce(
                    (acc, {difficulty, quizsStrings}) => {
                      if (
                        !acc.includes(difficulty) &&
                        quizsStrings.some((item) => item.locale === locale)
                      ) {
                        acc.push(difficulty)
                      }
                      return acc
                    },
                    [],
                  )

                  difficulties.forEach((difficulty) => {
                    console.log(
                      `Create QUIZ page for chapter ${chapterSlug} and locale ${locale} and difficulty ${difficulty}`,
                    )
                    createPage({
                      path: `${
                        localesPaths[locale]
                      }${slug}/${courseSlug}/${chapterSlug}/ikhtibar-${difficulty}`,
                      component: slash(quizTemplate),
                      context: {
                        difficulty,
                        locale,
                        localesPaths: R.pick(
                          R.map(R.prop('locale'), strings),
                          localesPaths,
                        ),
                        slug: chapterSlug,
                      },
                    })
                  })
                }
              })
            })
          })
        }
      })

      // create chapter pages

      resolve()
    })
    //   if (result.errors) {
    //     reject(result.errors)
    //   }
    //   _.each(result.data.allContentfulSection.edges, ({node}) => {
    //     const locale = node.node_locale
    //     const languagePath = languagePaths[locale]
    //     const courses = node.course

    //     if (languagePath) {
    //       // Section pages
    //       // console.log(`Creating Section at path: ${languagePath}${node.slug}/`)
    //       createPage({
    //         path: `${languagePath}${node.slug}/`,
    //         component: slash(sectionTemplate),
    //         context: {
    //           slug: node.slug,
    //           languagePath,
    //           languages,
    //           locale,
    //         },
    //         layout: `main-layout-${locale}`,
    //       })

    //       _.each(courses, (course) => {
    //         // Course pages
    //         // console.log(`Creating Course at path: ${languagePath}${node.slug}/${course.slug}`)
    //         createPage({
    //           path: `${languagePath}${node.slug}/${course.slug}/`,
    //           component: slash(courseTemplate),
    //           context: {
    //             slug: course.slug,
    //             languagePath,
    //             locale,
    //           },
    //         })

    //         // Chapter pages
    //         _.each(course.chapter, (chapter) => {
    //           // console.log(`Creating Chapter at path: ${languagePath}${node.slug}/${course.slug}/${chapter.slug}`)
    //           createPage({
    //             path: `${languagePath}${node.slug}/${course.slug}/${
    //               chapter.slug
    //             }`,
    //             component: slash(chapterTemplate),
    //             context: {
    //               slug: chapter.slug,
    //               languagePath,
    //               languages,
    //               locale,
    //               arabic: locale === mainLanguage,
    //               arabicLocale: mainLanguage,
    //             },
    //             layout: `main-layout-${locale}`,
    //           })
    //         })
    //       })
    //     }
    //   })
    // })
  })
