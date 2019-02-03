import {IEdges, Locale} from './index'

export interface ISidebarTrack {
  id: string
  slug: string
  translations: IEdges<{
    title: string
  }>
  courses: IEdges<{
    id: string
    slug: string
    quizDifficulties: number[]
    translations: IEdges<{
      locale: Locale
      title: string
    }>
    chapters: IEdges<{
      id: string
      slug: string
      translations: IEdges<{
        title: string
      }>
    }>
  }>
}

export interface ISidebarTranslations {
  difficulty1: string
  difficulty2: string
  locale: string
  localePath: string
}
