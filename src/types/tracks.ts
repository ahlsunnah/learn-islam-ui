import { IPageContext } from './index'
import { TTracksQueryQuery } from '../graphqlTypes'

export interface ITracksPageProps {
  data: TTracksQueryQuery
  pageContext: IPageContext
}
