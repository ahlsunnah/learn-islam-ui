import {IPageContext} from './index'
import {INavBarTranslations} from './navbar'
import {IFooterTranslations} from './footer'
export interface ITracksTrack {
  id: string
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

export interface ITracksTracks {
  edges: Array<{
    node: ITracksTrack
  }>
}

export type ITracksTranslations = {
  homeFooterCTA: string
  homeStartTrack: string
  locale: string
  soon: string
  tracksPageTitle: string
  tracksPageDescription: string
} & INavBarTranslations &
  IFooterTranslations

export interface ITracksOtherLocaleTranslations {
  localeName: string
  localePath: string
}

export interface ITracksPageProps {
  data: {
    api: {
      tracks: ITracksTracks
    }
    otherLocaleTranslations: ITracksOtherLocaleTranslations
    translations: ITracksTranslations
  }
  pageContext: IPageContext
}
