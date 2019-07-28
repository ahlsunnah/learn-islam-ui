import * as React from 'react'
import {graphql} from 'gatsby'
import Helmet from 'react-helmet'
import cx from 'classnames'
import DawaHomeContainer from 'modules/DawaHome'
import {IDawaHomeProps} from '../types/dawaHome'
import './styles.css'

const DawaHome = (props: IDawaHomeProps): React.ReactNode => (
  <div className={cx({rtl: props.pageContext.locale === 'ar'})}>
    <Helmet>
      <html lang={props.pageContext.locale} />
    </Helmet>
    <DawaHomeContainer {...props} />
  </div>
)

export default DawaHome

export const dawaHomeQuery = graphql`
  query dawaHome($trackId: ID!, $locale: String!) {
    api {
      track(id: $trackId) {
        id
        order
        slug
        soon
        translations(locale: $locale) {
          edges {
            node {
              title
              description
            }
          }
        }
        courseSet {
          edges {
            node {
              id
              slug
              translations(locale: $locale) {
                edges {
                  node {
                    id
                    title
                    description
                  }
                }
              }
              quizDifficulties
            }
          }
        }
      }
    }
  }
`
