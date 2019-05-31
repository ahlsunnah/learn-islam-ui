import {ILocalePaths, Locale} from '../types/index'

type PartialLocalePaths = Partial<ILocalePaths>

const createLocalesPaths = (
  locales: Locale[],
): {localePaths: ILocalePaths; otherLocalesPaths: ILocalePaths | null} => {
  if (!locales || !locales.length) {
    throw new Error(
      'this function should receive an array of string with at least one element',
    )
  }
  const localePaths = locales.reduce(
    (acc: PartialLocalePaths, locale): PartialLocalePaths => {
      if (locale === 'ar') {
        acc[locale] = '/'
      } else {
        acc[locale] = `/${locale}/`
      }
      return acc
    },
    {},
  ) as ILocalePaths
  const otherLocalesPaths =
    locales.length < 2
      ? null
      : (locales
          .slice()
          .reverse()
          .reduce(
            (prev: PartialLocalePaths, curr, currIndex): PartialLocalePaths => {
              prev[curr] = localePaths[locales[currIndex]] // eslint-disable-line no-param-reassign
              return prev
            },
            {},
          ) as ILocalePaths)

  return {localePaths, otherLocalesPaths}
}

export default createLocalesPaths
