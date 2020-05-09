import { useTranslation } from 'react-i18next'
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
  path?: string
}
const TracksContainer: React.FC<Props> = () => {
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
  return <Tracks tracks={tracks} localePath={t('localePath')} soonString={t('soon')} />
}
export default TracksContainer
