import React from 'react'
import Helmet from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { graphql } from 'gatsby'
import cx from 'classnames'
import AboutUsContainer from 'components/modules/AboutUs'
import { IAboutUsProps } from 'types/aboutUs'
import './styles.css'

const AboutUs = (props: IAboutUsProps) => {
  const { i18n } = useTranslation()
  return (
    <div className={cx({ rtl: i18n.language === 'ar' })}>
      <Helmet>
        <html lang={i18n.language} />
      </Helmet>
      <AboutUsContainer {...props} />
    </div>
  )
}

export default AboutUs

export const pageQuery = graphql`
  fragment AboutUsTrack on api_tracks {
    id
    slug
  }
  query aboutUsQuery {
    api {
      tracks(limit: 1) {
        ...AboutUsTrack
      }
    }
  }
`
