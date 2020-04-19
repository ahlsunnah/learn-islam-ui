import { IPageContext } from './index'
import { TAboutUsQueryQuery } from '../graphqlTypes'

export interface IAboutUsProps {
  data: TAboutUsQueryQuery
  pageContext: IPageContext
}
