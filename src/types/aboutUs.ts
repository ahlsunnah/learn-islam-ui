import {IFooterTranslations} from './footer'
import {INavBarTranslations} from './navbar'
import {IPageContext} from './index'
import {IHomeOtherLocaleTranslations} from './home'

export type IAboutUsTranslations = IAboutUsInnerTranslations &
  IFooterTranslations &
  INavBarTranslations

interface IAboutUsInnerTranslations {
  aboutUs: string
  aboutUsPageTitle: string
  aboutUsPageContent: string
}

export interface IAboutUsProps {
  data: {
    api: {
      tracks: {
        edges: Array<{
          node: {
            id: string
            slug: string
          }
        }>
      }
    }
    otherLocaleTranslations: IHomeOtherLocaleTranslations
    translations: IAboutUsTranslations
  }
  pageContext: IPageContext
}
