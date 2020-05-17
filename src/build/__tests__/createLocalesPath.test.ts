import createLocalesPaths from '../createLocalesPaths'
import { Locale } from '../../types/index'

test('createLocalesPaths needs a param', (): void => {
  expect((): void => {
    createLocalesPaths((undefined as unknown) as Locale[])
  }).toThrow()
})

test('createLocalesPaths with no item', (): void => {
  expect((): void => {
    createLocalesPaths([])
  }).toThrow()
})

test('createLocalesPaths with an item passes', (): void => {
  expect(createLocalesPaths(['ar'])).toBeTruthy()
})

test('createLocalesPaths with an item return the correct value', (): void => {
  expect(createLocalesPaths(['ar'])).toMatchObject({
    localePaths: {
      ar: '/',
    },
    otherLocalesPaths: null,
  })
})

test('createLocalesPaths with an item not arabic return the correct value', (): void => {
  expect(createLocalesPaths(['fr'])).toMatchObject({
    localePaths: {
      fr: '/fr/',
    },
    otherLocalesPaths: null,
  })
})

test('createLocalesPaths with two item return the correct value', (): void => {
  expect(createLocalesPaths(['ar', 'fr'])).toMatchObject({
    localePaths: {
      ar: '/',
      fr: '/fr/',
    },
    otherLocalesPaths: {
      ar: '/fr/',
      fr: '/',
    },
  })
})

test('createLocalesPaths with two item return always arabic as /', (): void => {
  expect(createLocalesPaths(['fr', 'ar'])).toMatchObject({
    localePaths: {
      ar: '/',
      fr: '/fr/',
    },
    otherLocalesPaths: {
      ar: '/fr/',
      fr: '/',
    },
  })
})
