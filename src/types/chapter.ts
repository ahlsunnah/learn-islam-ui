import {IEdges, Locale, IPageContext} from './index'

export interface IChapterChapter {
  id: string
  slug: string
  audio: string
  translations: IEdges<{
    id: string
    title: string
    transcription: string
    vocabulary: string
    locale: Locale
    video: string
  }>
  course: {
    id: string
    slug: string
    track: {
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
  }
}

export interface IChapterTranslations {
  chapter: string
  clickHere: string
  chapterAudio: string
  congratulations: string
  congratulationsCTA: string
  course: string
  difficulty1: string
  difficulty2: string
  downloadAudio: string
  focus: string
  goToTracks: string
  iCompletedTheChapter: string
  listenAudio: string
  locale: string
  localeName: string
  localePath: string
  next: string
  nextCourse: string
  nextHelp: string
  readIn: string
  quiz: string
  tabAudio: string
  tabCompleted: string
  tabTranscription: string
  tabTranslation: string
  tabVocabulary: string
  takeQuiz: string
  track: string
}

export interface IChapterOtherLocaleTranslations {
  localeName: string
  localePath: string
  readIn: string
}

export interface IChapterNext {
  path: string
  title: string
  type: 'quiz' | 'tracks' | 'course' | 'chapter'
}

export interface IChapterProps {
  data: {
    api: {
      chapter: IChapterChapter
    }
    translations: IChapterTranslations
    otherLocaleTranslations: IChapterOtherLocaleTranslations
  }
  pageContext: IPageContext & {
    next: IChapterNext
  }
}
