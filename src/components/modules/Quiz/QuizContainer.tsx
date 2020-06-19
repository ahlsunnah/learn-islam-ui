import * as React from 'react'
import gql from 'graphql-tag'
import QuizComponent from 'components/modules/Quiz/QuizComponent'
import { useQuery } from '@apollo/react-hooks'
import { useTranslation } from 'react-i18next'
import { Locale } from 'types'
import { QuizContainerQuery, QuizContainerQueryVariables } from '../../../hasuraTypes'

export const QUIZ_QUERY = gql`
  fragment QuizContainerQuiz on quizzes {
    id
    type_slug
    translations(where: { locale_code: { _eq: $locale } }) {
      id
      data
    }
  }
  fragment QuizContainerCourse on courses {
    id
    slug
    translations(where: { locale_code: { _eq: $locale } }) {
      id
      title
    }
    quizzes {
      ...QuizContainerQuiz
    }
  }
  query QuizContainer($locale: locales_enum, $id: Int!) {
    course: courses_by_pk(id: $id) {
      ...QuizContainerCourse
    }
  }
`

type Props = {
  path: string
  courseId?: string
}

const Quizs: React.FC<Props> = ({ courseId }) => {
  const parsedId = courseId && parseInt(courseId, 10)
  const { i18n } = useTranslation()

  // TODO: never throw errors
  if (!parsedId) {
    throw new Error('No valid course Id')
  }

  const { data, loading, error } = useQuery<QuizContainerQuery, QuizContainerQueryVariables>(QUIZ_QUERY, {
    variables: { locale: i18n.language as Locale, id: parsedId },
  })
  if (loading) {
    return <div>Loading</div>
  }
  if (error) {
    return <div>{error.message}</div>
  }
  if (!data || !data.course) {
    return <div>No data to display</div>
  }
  return <QuizComponent course={data.course} />
}

export default Quizs
