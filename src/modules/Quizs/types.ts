import {Strings} from 'types'
import {ObjectOfStrings} from 'interfaces'

export interface INext {
  path: string
  title: string
  type: string
}

export interface IParams {
  courseId: string
  difficulty: number
  locale: string
}

export interface IQuizData {
  course: {
    id: string
    slug: string
    quizs: Array<{
      id: string
      type: string
      strings: Array<{
        locale: string
        data: string
      }>
    }>
    strings: Strings
    track: {
      slug: string
    }
  }
  otherLocaleTranslations: ObjectOfStrings
  translations: ObjectOfStrings
}
