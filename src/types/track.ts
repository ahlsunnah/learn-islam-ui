import { IPageContext } from './index'
import { TTrackPageQuery } from '../graphqlTypes'

export interface ITrackPageProps {
  data: TTrackPageQuery
  pageContext: IPageContext & { slug: string }
}
