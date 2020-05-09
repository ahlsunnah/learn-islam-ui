import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { useTranslation } from 'react-i18next'
import cx from 'classnames'
import TracksContainer from 'components/modules/Tracks'
import './styles.css'

const Tracks = () => {
  const { i18n } = useTranslation()
  return (
    <div className={cx({ rtl: i18n.language === 'ar' })}>
      <Helmet>
        <html lang={i18n.language} />
      </Helmet>
      <TracksContainer isLegacy />
    </div>
  )
}

export default Tracks
