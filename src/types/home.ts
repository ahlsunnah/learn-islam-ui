import {IPageContext} from './index'
import {INavBarTranslations} from './navbar'
import {IFooterTranslations} from './footer'
export interface IHomeTrack {
  id: string
  order: number
  slug: string
  soon: boolean
  translations: {
    edges: Array<{
      node: {
        title: string
        description: string
      }
    }>
  }
}

export interface IHomeTracks {
  edges: Array<{
    node: IHomeTrack
  }>
}

export type IHomeTranslations = {
  enroll: string
  feature1Text: string
  feature2Text: string
  feature3Text: string
  feature1Title: string
  feature2Title: string
  feature3Title: string
  featuredCoursesTitle: string
  featuresTitle: string
  homeTitle: string
  homeDescription: string
  homeEmailTitle: string
  homeEmailPlaceHolder: string
  homeFooterCTA: string
  homeStartTrack: string
  locale: string
  newsletterEmailNotValid: string
  newsletterSubscribed: string
  newsletterSuccess: string
  siteContentPresentation: string
  homeContentTitle: string
  soon: string
  start: string
} & INavBarTranslations &
  IFooterTranslations

export interface IHomeOtherLocaleTranslations {
  localeName: string
  localePath: string
}

export interface IHomePageProps {
  data: {
    api: {
      tracks: IHomeTracks
    }
    otherLocaleTranslations: IHomeOtherLocaleTranslations
    translations: IHomeTranslations
  }
  pageContext: IPageContext
}
