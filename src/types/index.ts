import {ObjectOfStrings} from 'interfaces'

export type Strings = Array<ObjectOfStrings>

export interface IPageContext {
  locale: string
  localesPaths: Array<{
    ar: string
    fr: string
  }>
  otherLanguagePath: string
}
