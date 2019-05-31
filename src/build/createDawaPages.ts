import path from 'path'
import slash from 'slash'
import {GatsbyCreatePages} from '../types/gatsbyNode'
import createLocalesPaths from './createLocalesPaths'
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
        courseSet: IEdges<{
          id: string
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
            courseSet {
              edges {
                node {
                  id
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
  console.log(track.id)
}

export default createDawaPages
