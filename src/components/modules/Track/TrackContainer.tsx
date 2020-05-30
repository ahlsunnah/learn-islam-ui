import { useTranslation } from 'react-i18next'
import gql from 'graphql-tag'
import React, { useMemo } from 'react'
import _get from 'lodash/get'
import TrackComponent from './TrackComponent'
import { useQuery } from '@apollo/react-hooks'
import { TrackInnerPageQuery, TrackInnerPageQueryVariables, TrackInnerPageTrackFragment } from '../../../hasuraTypes'
import { Locale } from 'types'
import { useLocation } from '@reach/router'

const TRACKS_QUERY = gql`
  fragment TrackInnerPageCourse on courses {
    id
    level
    translations(where: { locale_code: { _eq: $locale } }) {
      title
      description
    }
    chapters {
      duration
      id
      translations(where: { locale_code: { _eq: $locale } }) {
        locale_code
      }
    }
    quiz_difficulties {
      quiz_difficulties
    }
    topic {
      id
      color
      translations(where: { locale_code: { _eq: $locale } }) {
        title
      }
    }
  }
  fragment TrackInnerPageTrack on tracks {
    id
    translations(where: { locale_code: { _eq: $locale } }) {
      title
    }
    courses {
      ...TrackInnerPageCourse
    }
  }
  query trackInnerPage($locale: locales_enum!, $id: Int!) {
    track: tracks_by_pk(id: $id) {
      ...TrackInnerPageTrack
    }
  }
`
type Props = {
  path?: string
  trackId?: string
}

const TracksContainer: React.FC<Props> = ({ trackId }) => {
  const parsedId = trackId && parseInt(trackId, 10)

  // TODO: never throw errors
  if (!parsedId) {
    throw new Error('No valid track Id')
  }

  const { i18n } = useTranslation()

  const location = useLocation()

  const { data, loading, error } = useQuery<TrackInnerPageQuery, TrackInnerPageQueryVariables>(TRACKS_QUERY, {
    variables: { locale: i18n.language as Locale, id: parsedId },
  })

  const track: TrackInnerPageTrackFragment | null | undefined = _get(data, 'track')

  const nextCoursePath =
    track &&
    track.courses[0] &&
    `${location.pathname}/${track.courses[0].id}/${track.courses[0].chapters[0] && track.courses[0].chapters[0].id}/`

  const appPath = useMemo(
    () =>
      location.pathname.indexOf('app') !== -1 ? `${location.pathname}/chapter/${track && track.courses[0].id}` : false,
    [location, track]
  )

  if (loading) {
    return <div>Loading</div>
  }

  if (error || !data) {
    // TODO: Error message translations
    console.error(error)
    return <div>An error has occurred, please refresh the page or try again later</div>
  }

  if (!data.track) {
    return <div>We have no track here!</div>
  }

  return <TrackComponent track={track} nextCoursePath={appPath || nextCoursePath} />
}

export default TracksContainer
