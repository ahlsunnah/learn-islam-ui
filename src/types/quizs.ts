import {IEdges, IPageContext} from './index'
import {ISidebarTrack} from './sidebar'
import {INext} from '../modules/Quizs/types'

export interface IQuizsQuiz {
  id: string
  difficulty: number
  type: string
  translations: IEdges<{
    id: string
    data: string
  }>
}
export interface IQuizsCourse {
  id: string
  slug: string
  translations: IEdges<{
    id: string
    title: string
  }>
  quizs: IEdges<IQuizsQuiz>
  track: ISidebarTrack
}

export interface IQuizsTranslations {
  assessmentPerfect: string
  assessmentVeryGood: string
  assessmentGood: string
  assessmentFail: string
  average: string
  backToCourse: string
  chooseACategoryTitle: string
  chooseAnswer: string
  congratulations: string
  congratulationsCTA: string
  continue: string
  difficulty1: string
  difficulty2: string
  fillInTheBlankTitle: string
  goToTop: string
  goToTracks: string
  grade: string
  level: string
  locale: string
  localePath: string
  nextCourse: string
  nextTrack: string
  progress: string
  quiz: string
  quizTitle: string
  quizTrue: string
  quizFalse: string
  restartQuizs: string
  seeYourScore: string
  start: string
  takeExam: string
  yourLastScore: string
  yourScore: string
}

export interface IQuizsOtherLocaleTranslations {
  localeName: string
  localePath: string
}

export interface IQuizsPageProps {
  data: {
    api: {
      course: IQuizsCourse
    }
    translations: IQuizsTranslations
    otherLocaleTranslations: IQuizsOtherLocaleTranslations
  }
  location: {
    pathname: string
  }
  pageContext: IPageContext & {
    difficulty: 1 | 2
    next: INext
    nextQuiz: INext
  }
}
