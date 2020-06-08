import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

import { TrackNavigationQueryVariables, TrackNavigationQuery } from '../../generated/hasuraTypes'

export const TRACK_NAVIGATION = gql`
  fragment TrackNavigationChapter on chapters {
    id
    translations(where: { locale_code: { _eq: fr } }) {
      title
    }
  }
  fragment TrackNavigationTrack on tracks {
    id
    slug
    translations(where: { locale_code: { _eq: fr } }) {
      title
    }
    courses {
      id
      chapters {
        ...TrackNavigationChapter
      }
      translations(where: { locale_code: { _eq: fr } }) {
        id
        locale_code
        title
      }
    }
  }
  query TrackNavigation($id: Int!) {
    track: tracks_by_pk(id: $id) {
      ...TrackNavigationTrack
    }
  }
`

const useTrackNavigationQuery = (trackId: number) => {
  const result = useQuery<TrackNavigationQuery, TrackNavigationQueryVariables>(TRACK_NAVIGATION, {
    variables: {
      id: trackId,
    },
  })
  return result
}

export default useTrackNavigationQuery
