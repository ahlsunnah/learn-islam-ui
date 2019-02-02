import {IEdges, IPageContext} from './index'

export interface ITrackCourse {
  id: string
  level: number
  slug: string
  translations: IEdges<{
    title: string
    description: string
  }>
  chapters: IEdges<{
    id: string
    duration: number
    slug: string
    translations: IEdges<{
      locale: string
    }>
  }>
  quizDifficulties: number[]
  topic: {
    id: string
    color: string
    translations: IEdges<{
      title: string
    }>
  }
}

export interface ITrackTrack {
  id: string
  slug: string
  translations: IEdges<{
    title: string
  }>
  courses: IEdges<ITrackCourse>
}

export interface ITrackTranslations {
  connect: string
  course: string
  level1: string
  level2: string
  level3: string
  locale: string
  localePath: string
  start: string
  startCourse: string
  toOtherLanguageCTA: string
  track: string
  trackLevel: string
}

export interface ITrackOtherLocaleTranslations {
  localeName: string
  localePath: string
}

export interface ITrackPageProps {
  data: {
    api: {
      track: ITrackTrack
    }
    translations: ITrackTranslations
    otherLocaleTranslations: ITrackOtherLocaleTranslations
  }
  pageContext: IPageContext & {slug: string}
}
