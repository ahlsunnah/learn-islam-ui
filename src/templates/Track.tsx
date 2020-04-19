import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import cx from 'classnames'
import TrackContainer from 'modules/Track'
import './styles.css'
import { ITrackPageProps } from '../types/track'
import { useTranslation } from 'react-i18next'

const TrackTemplate = (props: ITrackPageProps) => {
  const { i18n } = useTranslation()
  return (
    <div className={cx({ rtl: i18n.language === 'ar' })}>
      <Helmet>
        <html lang={i18n.language} />
      </Helmet>
      <TrackContainer {...props} />
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

  fragment TrackPageTranslations on TranslationsJson {
    connect
    course
    level1
    level2
    level3
    locale
    localePath
    start
    startCourse
    toOtherLanguageCTA
    track
    trackLevel
  }

  query trackQuery($locale: String!, $localeEnum: api_locales_enum!, $id: Int!) {
    api {
      track: tracks_by_pk(id: $id) {
        id
        slug
        translations(where: { locale_code: { _eq: $localeEnum } }) {
          title
        }
        courses {
          ...TrackPageCourse
        }
      }
    }
    translations: translationsJson(locale: { eq: $locale }) {
      ...TrackPageTranslations
    }
    otherLocaleTranslations: translationsJson(locale: { ne: $locale }) {
      localeName
      localePath
    }
  }
`
