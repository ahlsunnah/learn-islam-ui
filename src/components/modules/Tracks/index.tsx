import { useTranslation } from 'react-i18next'
import BlueHero from 'components/molecules/Hero/BlueHero'
import HomeFooter from 'components/molecules/Footer/HomeFooter'
import React from 'react'
import Tracks from './Tracks'
import { ITracksPageProps } from 'types/tracks'

const TracksContainer = ({ data }: ITracksPageProps) => {
  const { t } = useTranslation()
  const tracks = data.api.tracks
  return (
    <div>
      <BlueHero description={t('tracksPageDescription')} title={t('tracksPageTitle')} />
      <Tracks tracks={tracks} localePath={t('localePath')} soonString={t('soon')} />
      <HomeFooter firstTrackSlug={`${t('localePath')}${tracks[0] && tracks[0].slug}`} />
    </div>
  )
}
export default TracksContainer
