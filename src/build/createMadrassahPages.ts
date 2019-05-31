import {resolve} from 'path'
import slash from 'slash'
import {GatsbyCreatePages} from '../types/gatsbyNode'
import createLocalesPaths from './createLocalesPaths'
import {Locale, IEdges} from '../types/index'
import {INext} from '../types/chapter'
import nextStepCalculatorGenerator from './nextStepCalculatorGenerator'

const createMadrassahPages: GatsbyCreatePages = async ({
  graphql,
  actions: {createPage, createRedirect},
}): Promise<void> => {
  const locales: Locale[] = ['ar', 'fr']
  const {localePaths, otherLocalesPaths} = createLocalesPaths(locales)

  // const MainLayout = resolve(`./src/templates/MainLayout.jsx`)
  const homeTemplate = resolve(`./src/templates/Home.tsx`)
  const tracksTemplate = resolve(`./src/templates/Tracks.tsx`)
  const aboutUsTemplate = resolve(`./src/templates/AboutUs.tsx`)
  const trackTemplate = resolve(`./src/templates/Track.tsx`)
  const chapterTemplate = resolve(`./src/templates/Chapter.tsx`)
  const quizsTemplate = resolve(`./src/templates/Quizs.tsx`)

  // home pages
  console.log('Creating home pages')
  locales.forEach(
    (locale): void => {
      createPage({
        path: localePaths[locale],
        component: slash(homeTemplate),
        context: {
          locale,
          localePaths,
          otherLanguagePath: otherLocalesPaths && otherLocalesPaths[locale],
        },
      })
    },
  )

  // tracks pages
  console.log('Creating tracks pages')
  locales.forEach(
    (locale): void => {
      createPage({
        path: `${localePaths[locale]}masar/`,
        component: slash(tracksTemplate),
        context: {
          locale,
          localePaths,
          otherLanguagePath:
            otherLocalesPaths && `${otherLocalesPaths[locale]}masar/`,
        },
      })
    },
  )

  // about us pages
  console.log('Creating about us pages')
  locales.forEach(
    (locale): void => {
      createPage({
        path: `${localePaths[locale]}nahnu/`,
        component: slash(aboutUsTemplate),
        context: {
          locale,
          localePaths,
          otherLanguagePath:
            otherLocalesPaths && `${otherLocalesPaths[locale]}nahnu/`,
        },
      })
    },
  )

  console.log('fetching data')
  const result = await graphql<{
    api: {
      tracks: IEdges<{
        id: string
        slug: string
        translations: IEdges<{
          id: string
          locale: Locale
          title: string
        }>
        courseSet: IEdges<{
          id: string
          slug: string
          quizDifficulties: number[]
          translations: IEdges<{
            id: string
            locale: Locale
            title: string
          }>
          chapterSet: IEdges<{
            id: string
            slug: string
            quizDifficulties: number[]
            translations: IEdges<{
              id: string
              locale: Locale
              title: string
            }>
          }>
        }>
      }>
    }
  }>(
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
                courseSet {
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
                      chapterSet {
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
  )
  if (result.errors) {
    result.errors.forEach((error): void => console.error(error.message))
    throw new Error('Error while executing a query in createMadrassahPages')
  }
  const {
    api: {tracks},
  } = result.data
  const nextStepCalculatorWithTracks = nextStepCalculatorGenerator(tracks)

  tracks.edges.forEach(
    ({node: track}, trackIndex): void => {
      const {courseSet, id: trackId, slug: trackSlug, translations} = track
      const nextStepCalculatorWithTrack = nextStepCalculatorWithTracks(
        trackIndex,
      )
      if (courseSet && courseSet.edges.length) {
        // create track pages
        translations.edges.forEach(
          ({node: {locale}}): void => {
            console.log(
              `creating TRACK page for slug (${trackSlug}) and locale (${locale}) `,
            )
            createPage({
              path: `${localePaths[locale]}${trackSlug}/`,
              component: slash(trackTemplate),
              context: {
                id: trackId,
                locale,
                localePaths,
                slug: trackSlug,
              },
            })
          },
        )

        courseSet.edges.forEach(
          ({node: course}, courseIndex): void => {
            const nextStepCalculatorWithCourse = nextStepCalculatorWithTrack(
              courseIndex,
            )
            const {
              chapterSet,
              id: courseId,
              quizDifficulties,
              slug: courseSlug,
            } = course

            // create chapter pages
            chapterSet.edges.forEach(
              ({node: chapter}, chapterIndex): void => {
                const {
                  id: chapterId,
                  slug: chapterSlug,
                  translations: chapterTranslations,
                } = chapter
                chapterTranslations.edges.forEach(
                  ({node: {locale}}): void => {
                    console.log(
                      `creating CHAPTER page for slug (${chapterSlug}) and locale (${locale}) `,
                    )
                    const next = nextStepCalculatorWithCourse({
                      chapterIndex,
                      locale,
                      localePath: localePaths[locale],
                    })

                    const chapterPath = `${
                      localePaths[locale]
                    }${trackSlug}/${courseSlug}/${chapterSlug}/`
                    createPage({
                      path: chapterPath,
                      component: slash(chapterTemplate),
                      context: {
                        locale,
                        localePaths,
                        next,
                        slug: chapterSlug,
                        id: chapterId,
                      },
                    })

                    if (chapterIndex === 0) {
                      // course link redirects to first chapter
                      createRedirect({
                        fromPath: `${
                          localePaths[locale]
                        }${trackSlug}/${courseSlug}/`,
                        isPermanent: true,
                        redirectInBrowser: true,
                        toPath: chapterPath,
                      })
                    }
                  },
                )
              },
            )

            // Create quizs:
            if (quizDifficulties && quizDifficulties.length) {
              locales.forEach(
                (locale): void => {
                  quizDifficulties.forEach(
                    (difficulty, quizDifficultyIndex): void => {
                      console.log(
                        `Create QUIZS page for course ${courseSlug} and locale ${locale} and difficulty ${difficulty}`,
                      )
                      const next = nextStepCalculatorWithCourse({
                        locale,
                        localePath: localePaths[locale],
                        quizDifficultyIndex,
                      })

                      createPage({
                        path: `${
                          localePaths[locale]
                        }${trackSlug}/${courseSlug}/ikhtibar-${difficulty}/`,
                        title: `difficulty${quizDifficulties[difficulty]}`,
                        component: slash(quizsTemplate),
                        context: {
                          difficulty,
                          locale,
                          localePaths,
                          next,
                          slug: courseSlug,
                          id: courseId,
                        },
                      })
                    },
                  )
                },
              )
            }
          },
        )
      }
    },
  )
}

export default createMadrassahPages
