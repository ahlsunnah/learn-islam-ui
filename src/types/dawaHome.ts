import {TDawaHomeQuery} from './gatsbyGraphql'
import {IPageContext} from './index'

export interface IDawaHomeProps {
  data: TDawaHomeQuery
  pageContext: IPageContext
}
