import { IPageContext, Locale } from './index'
import { INext } from './chapter'
import { TQuizQueryQuery, TQuizzesPageTranslationsFragment, TQuizzesPageQuizFragment } from '../graphqlTypes'

export interface IParams {
  courseId: number
  difficulty: number
  locale: Locale
}

export interface IQuizsPageProps {
  data: TQuizQueryQuery
  location: {
    pathname: string
  }
  pageContext: IPageContext & {
    difficulty: 1 | 2
    next: INext
  }
}

export type QuizProps = {
  finished: boolean
  number: number
  locale: Locale
  t: TQuizzesPageTranslationsFragment
} & TQuizzesPageQuizFragment
