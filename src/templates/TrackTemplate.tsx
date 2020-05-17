import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import cx from 'classnames'
import TrackComponent from 'components/modules/Track/TrackComponent'
import './styles.css'
import { ITrackPageProps } from '../types/track'
import { useTranslation } from 'react-i18next'
import TrackSidebar from 'components/modules/Track/TrackSidebar'

const TrackTemplate = (props: ITrackPageProps) => {
  const { i18n } = useTranslation()
  const { track } = props.data.api
  const { locale, localePaths, slug } = props.pageContext
  const localePath = localePaths[locale]
  const currentPath = `${localePath}${slug}`
  const nextCoursePath =
    track.courses[0] &&
    `${currentPath}/${track.courses[0].slug}/${track.courses[0].chapters[0] && track.courses[0].chapters[0].slug}/`
  return (
    <div className={cx({ rtl: i18n.language === 'ar' })}>
      <Helmet>
        <html lang={i18n.language} />
      </Helmet>
      <div className="min-vh-100 flex">
        <TrackSidebar locale={locale} localePath={localePath} />
        <TrackComponent track={track} nextCoursePath={nextCoursePath} />
      </div>
    </div>
  )
}

export default TrackTemplate

export const pageQuery = graphql`
  fragment TrackPageCourse on api_courses {
    id
    level
    slug
    translations(where: { locale_code: { _eq: $localeEnum } }) {
      title
      description
    }
    chapters {
      duration
      id
      slug
      translations(where: { locale_code: { _eq: $localeEnum } }) {
        locale_code
      }
    }
    quiz_difficulties {
      quiz_difficulties
    }
    topic {
      id
      color
      translations(where: { locale_code: { _eq: $localeEnum } }) {
        title
      }
    }
  }
  fragment TrackPageTrack on api_tracks {
    id
    slug
    translations(where: { locale_code: { _eq: $localeEnum } }) {
      title
    }
    courses {
      ...TrackPageCourse
    }
  }

  query trackPage($localeEnum: api_locales_enum!, $id: Int!) {
    api {
      track: tracks_by_pk(id: $id) {
        ...TrackPageTrack
      }
    }
  }
`
