import { IPageContext } from './index'
import { THomeQueryQuery } from '../graphqlTypes'
import { TFunction } from 'i18next'

export interface IHomePageProps {
  data: THomeQueryQuery
  pageContext: IPageContext
  i18nT: TFunction
}
