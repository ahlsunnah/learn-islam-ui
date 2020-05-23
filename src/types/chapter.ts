import { IPageContext } from './index'
import { TChapterQueryQuery } from '../graphqlTypes'

export interface INext {
  path: string
  title: string
  type: 'quiz' | 'tracks' | 'course' | 'chapter'
}

export interface IChapterProps {
  data?: TChapterQueryQuery
  pageContext?: IPageContext & {
    next: INext
  }
}
