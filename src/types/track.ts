import {IPageContext} from './index'
import {TTrackQueryQuery} from '../graphqlTypes'

export interface ITrackPageProps {
  data: TTrackQueryQuery
  pageContext: IPageContext & {slug: string}
}
