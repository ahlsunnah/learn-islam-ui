import React from 'react'
import {graphql} from 'gatsby'
import Helmet from 'react-helmet'
import cx from 'classnames'
import TrackContainer from 'modules/Track'
import './styles.css'
import logProps from '../hoc/logProps'
import {ITrackPageProps} from '../types/track'

const TrackTemplate = (props: ITrackPageProps) => (
  <div className={cx({rtl: props.pageContext.locale === 'ar'})}>
    <Helmet>
      <html lang={props.pageContext.locale} />
    </Helmet>
    <TrackContainer {...props} />
  </div>
)

export default logProps(TrackTemplate)

export const pageQuery = graphql`
  query trackQuery($locale: String!, $id: ID!) {
    api {
      track(id: $id) {
        id
        slug
        translations(locale: $locale) {
          edges {
            node {
              title
            }
          }
        }
        courses: courseSet {
          edges {
            node {
              id
              level
              slug
              translations(locale: $locale) {
                edges {
                  node {
                    title
                    description
                  }
                }
              }
              chapters: chapterSet {
                edges {
                  node {
                    duration
                    id
                    slug
                    translations(locale: $locale) {
                      edges {
                        node {
                          locale
                        }
                      }
                    }
                  }
                }
              }
              quizDifficulties
              topic {
                id
                color
                translations(locale: $locale) {
                  edges {
                    node {
                      title
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    translations: translationsJson(locale: {eq: $locale}) {
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
    otherLocaleTranslations: translationsJson(locale: {ne: $locale}) {
      localeName
      localePath
    }
  }
`
