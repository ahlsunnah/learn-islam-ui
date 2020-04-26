import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { useTranslation } from 'react-i18next'
import cx from 'classnames'
import TracksContainer from 'components/modules/Tracks'
import './styles.css'
import { ITracksPageProps } from 'types/tracks'

const Tracks = (props: ITracksPageProps) => {
  const { i18n } = useTranslation()
  return (
    <div className={cx({ rtl: i18n.language === 'ar' })}>
      <Helmet>
        <html lang={i18n.language} />
      </Helmet>
      <TracksContainer {...props} />
    </div>
  )
}

export default Tracks

export const pageQuery = graphql`
  fragment TracksPageTrack on api_tracks {
    id
    slug
    soon
    translations(where: { locale_code: { _eq: $localeEnum } }) {
      title
      description
    }
  }
  query tracksQuery($localeEnum: api_locales_enum) {
    api {
      tracks {
        ...TracksPageTrack
      }
    }
  }
`
