import path from 'path'
import slash from 'slash'
import {GatsbyCreatePages} from '../types/gatsbyNode'
import createLocalesPaths from './createLocalesPaths'
import nextStepCalculatorGenerator from './nextStepCalculatorGenerator'
import {Locale, IEdges} from '../types/index'

const createDawaPages: GatsbyCreatePages = async ({
  graphql,
  actions: {createPage, createRedirect},
}): Promise<void> => {
  const locales: Locale[] = ['fr']
  const {localePaths, otherLocalesPaths} = createLocalesPaths(locales)

  const dawaHomeTemplate = path.resolve(`./src/templates/DawaHome.tsx`)
  const dawaQuizsTemplate = path.resolve(`./src/templates/DawaQuizs.tsx`)

  // home pages
  console.log('Creating dawa home pages')
  locales.forEach(
    (locale): void => {
      createPage({
        path: localePaths[locale] as string,
        component: slash(dawaHomeTemplate),
        context: {
          locale,
          localePaths,
          otherLanguagePath: otherLocalesPaths && otherLocalesPaths[locale],
        },
      })
    },
  )
  console.log('fetching data')
  const result = await graphql<{
    api: {
      track: {
        id: string
        slug: string
        courseSet: IEdges<{
          id: string
          slug: string
          quizDifficulties: number[]
        }>
      }
    }
  }>(
    `
      {
        api {
          track(id: "VHJhY2tOb2RlOjE=") {
            id
            slug
            courseSet {
              edges {
                node {
                  id
                  slug
                  quizDifficulties
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
    throw new Error('Error while executing a query in createDawaPages')
  }
  const {
    api: {track},
  } = result.data

  const trackIndex = 0
  const {courseSet, slug: trackSlug} = track
  const nextStepCalculatorWithTrack = nextStepCalculatorGenerator({
    edges: [{node: track}],
  })(trackIndex)
  courseSet.edges.forEach(
    ({node: course}, courseIndex): void => {
      const nextStepCalculatorWithCourse = nextStepCalculatorWithTrack(
        courseIndex,
      )
      const {id: courseId, quizDifficulties, slug: courseSlug} = course
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
                component: slash(dawaQuizsTemplate),
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
    },
  )
}

export default createDawaPages
