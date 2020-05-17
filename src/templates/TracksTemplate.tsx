import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { useTranslation } from 'react-i18next'
import cx from 'classnames'
import BlueHero from 'components/molecules/Hero/BlueHero'
import HomeFooter from 'components/molecules/Footer/HomeFooter'
import './styles.css'
import { ITracksPageProps } from 'types/tracks'
import Tracks from 'components/modules/Tracks/TracksComponent'

const TracksPage = (props: ITracksPageProps) => {
  const { t, i18n } = useTranslation()
  const { tracks } = props.data.api
  return (
    <div className={cx({ rtl: i18n.language === 'ar' })}>
      <Helmet>
        <html lang={i18n.language} />
      </Helmet>
      <BlueHero description={t('tracksPageDescription')} title={t('tracksPageTitle')} />
      <Tracks tracks={tracks} localePath={t('localePath')} soonString={t('soon')} />
      <HomeFooter firstTrackSlug={`${t('localePath')}${tracks[0] && tracks[0].slug}`} />
    </div>
  )
}

export default TracksPage

export const pageQuery = graphql`
  fragment GTracksPageTrack on api_tracks {
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
        ...GTracksPageTrack
      }
    }
  }
`
