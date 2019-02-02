import {ObjectOfStrings} from 'interfaces'

export type Strings = Array<ObjectOfStrings>

export type Locale = 'ar' | 'fr'

export interface IPageContext {
  locale: Locale
  localesPaths: {
    ar: string
    fr: string
  }
  otherLanguagePath: string
}

export interface IEdges<T> {
  edges: Array<{
    node: T
  }>
}
