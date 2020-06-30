import { resolve } from 'path'
import slash from 'slash'
import { GatsbyCreatePages } from '../types/gatsbyNode'
import createLocalesPaths from './createLocalesPaths'
import { Locale } from '../types/index'
import { TMadrassahPageQueryQuery } from '../graphqlTypes'

const createMadrassahPages: GatsbyCreatePages = async ({ graphql, actions: { createPage } }): Promise<void> => {
  const locales: Locale[] = ['ar', 'fr']
  const { localePaths } = createLocalesPaths(locales)

  const homeTemplate = resolve(`./src/templates/Home.tsx`)
  const tracksTemplate = resolve(`./src/templates/TracksTemplate.tsx`)
  const aboutUsTemplate = resolve(`./src/templates/AboutUs.tsx`)
  const trackTemplate = resolve(`./src/templates/TrackTemplate.tsx`)

  // home pages
  console.log('Creating home pages')
  locales.forEach((locale): void => {
    createPage({
      path: localePaths[locale],
      component: slash(homeTemplate),
    })
  })

  // tracks pages
  console.log('Creating tracks pages')
  locales.forEach((locale): void => {
    createPage({
      path: `${localePaths[locale]}masar/`,
      component: slash(tracksTemplate),
      context: {
        localeEnum: locale,
      },
    })
  })

  // about us pages
  console.log('Creating about us pages')
  locales.forEach((locale): void => {
    createPage({
      path: `${localePaths[locale]}nahnu/`,
      component: slash(aboutUsTemplate),
    })
  })

  console.log('fetching data')
  const result = await graphql<TMadrassahPageQueryQuery>(
    `
      query MadrassahPageQuery {
        api {
          tracks {
            id
            slug
            translations {
              id
              locale_code
              title
            }
            courses {
              id
              slug
              quiz_difficulties {
                quiz_difficulties
              }
              translations {
                id
                locale_code
                title
              }
              chapters {
                id
                slug
                translations {
                  id
                  locale_code
                  title
                }
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    result.errors.forEach((error): void => console.error(error.message))
    throw new Error('Error while executing a query in createMadrassahPages')
  }

  const {
    api: { tracks },
  } = result.data

  tracks.forEach((track): void => {
    const { courses, id: trackId, slug: trackSlug, translations } = track

    if (courses && courses.length) {
      // create track pages
      translations.forEach(({ locale_code }): void => {
        console.log(`creating TRACK page for slug (${trackSlug}) and locale (${locale_code}) `)
        createPage({
          path: `${localePaths[locale_code]}${trackSlug}/`,
          component: slash(trackTemplate),
          context: {
            id: trackId,
            locale: locale_code,
            localeEnum: locale_code,
            localePaths,
            slug: trackSlug,
          },
        })
      })
    }
  })
}

export default createMadrassahPages
