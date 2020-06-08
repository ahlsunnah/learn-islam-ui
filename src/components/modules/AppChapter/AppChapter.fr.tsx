/* eslint react/no-unused-prop-types: 0 */
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import React, { FC } from 'react'
import { ChapterQueryQuery, ChapterQueryQueryVariables } from '../../../hasuraTypes'
import '../Chapter/styles.scss'
import MainChapter from './MainChapter'

const DEFAULT_CHAPTER = 1

export const CHAPTER_QUERY = gql`
  fragment Chapter on chapters {
    id
    slug
    audio
    translations(where: { locale_code: { _eq: fr } }) {
      id
      title
      transcription
      vocabulary
      locale_code
      video
    }
  }
  query ChapterQuery($id: Int!) {
    chapter: chapters_by_pk(id: $id) {
      ...Chapter
    }
  }
`

type AppChapterType = {
  path?: string
  chapterId?: string
  trackId?: string
}

const AppChapter: FC<AppChapterType> = ({ chapterId }) => {
  const parsedChapterId = (chapterId && parseInt(chapterId, 10)) || DEFAULT_CHAPTER

  const { loading, error, data } = useQuery<ChapterQueryQuery, ChapterQueryQueryVariables>(CHAPTER_QUERY, {
    variables: { id: parsedChapterId || DEFAULT_CHAPTER },
  })

  if (loading) {
    return <div>Loading</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }
  if (!data || !data.chapter) {
    return <div>Il y a eu un probl&egrave;me</div>
  }
  return <MainChapter chapter={data.chapter} />
}

export default AppChapter
