/* eslint react/no-unused-prop-types: 0 */
import React, { FC } from 'react'
import gql from 'graphql-tag'
import MainChapter from './MainChapter'
import { useQuery } from '@apollo/react-hooks'
import { chapterPageTrack } from 'graphql/fragments'
import '../Chapter/styles.scss'
import { ChapterQueryQuery, ChapterQueryQueryVariables } from '../../../hasuraTypes'

export const CHAPTER_QUERY = gql`
  query chapterQuery($id: Int!) {
    chapter: chapters_by_pk(id: $id) {
      id
      slug
      audio
      translations {
        id
        title
        transcription
        vocabulary
        locale_code
        video
      }
      course {
        id
        slug
        track {
          ...ChapterPageTrack
        }
        chapters {
          id
          slug
          translations(where: { locale_code: { _eq: fr } }) {
            title
          }
        }
      }
    }
  }
  ${chapterPageTrack}
`

type AppChapterType = {
  path?: string
}

const AppChapter: FC<AppChapterType> = () => {
  const { loading, error, data } = useQuery<ChapterQueryQuery, ChapterQueryQueryVariables>(CHAPTER_QUERY, {
    variables: { id: 1 },
  })

  if (loading) {
    return <div className="lo">Loading</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return <MainChapter data={data} />
}

export default AppChapter
