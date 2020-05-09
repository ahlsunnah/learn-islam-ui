import { useTranslation } from 'react-i18next'
import BlueHero from 'components/molecules/Hero/BlueHero'
import HomeFooter from 'components/molecules/Footer/HomeFooter'
import gql from 'graphql-tag'
import React from 'react'
import Tracks from './Tracks'
import { useQuery } from '@apollo/react-hooks'
import { TracksQuery, TracksQueryVariables } from '../../../hasuraTypes'
import { Locale } from 'types'

const TRACKS_QUERY = gql`
  fragment TracksPageTrack on tracks {
    id
    slug
    soon
    translations(where: { locale_code: { _eq: $locale } }) {
      title
      description
    }
  }
  query tracks($locale: locales_enum) {
    tracks {
      ...TracksPageTrack
    }
  }
`
type Props = {
  isLegacy?: boolean
  path?: string
}
const TracksContainer: React.FC<Props> = ({ isLegacy }) => {
  const { t, i18n } = useTranslation()
  const language = i18n.language as Locale
  const { data, loading, error } = useQuery<TracksQuery, TracksQueryVariables>(TRACKS_QUERY, {
    variables: { locale: language },
  })
  console.log(data, loading, error, language)
  if (loading) {
    return <div>Loading</div>
  }
  if (error || !data) {
    // TODO: Error message translations
    console.error(error)
    return <div>An error has occurred, please refresh the page or try again later</div>
  }
  const { tracks } = data
  return (
    <div>
      {isLegacy && <BlueHero description={t('tracksPageDescription')} title={t('tracksPageTitle')} />}
      <Tracks tracks={tracks} localePath={t('localePath')} soonString={t('soon')} />
      {isLegacy && <HomeFooter firstTrackSlug={`${t('localePath')}${tracks[0] && tracks[0].slug}`} />}
    </div>
  )
}
export default TracksContainer
