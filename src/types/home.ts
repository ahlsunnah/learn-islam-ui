import {IPageContext} from './index'
import {THomeQueryQuery} from '../graphqlTypes'

export interface IHomePageProps {
  data: THomeQueryQuery
  pageContext: IPageContext
}
