import {ObjectOfStrings} from 'interfaces'

export type Strings = Array<ObjectOfStrings>

export type Locale = 'ar' | 'fr'

export type ILocalePaths = {[locale in Locale]: string}

export interface IPageContext {
  locale: Locale
  localePaths: ILocalePaths
  otherLanguagePath: string
}

export interface IEdges<T> {
  edges: Array<{
    node: T
  }>
}
