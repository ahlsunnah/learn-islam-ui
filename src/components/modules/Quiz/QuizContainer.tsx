import * as React from 'react'
import gql from 'graphql-tag'
import QuizComponent from 'components/modules/Quiz/QuizComponent'
import { useQuery } from '@apollo/react-hooks'
import { useTranslation } from 'react-i18next'
import { Locale } from 'types'
import { CourseContainerQuery, CourseContainerQueryVariables } from '../../../hasuraTypes'

// Put Fragments in a separate file for reusability
export const QUIZ_QUERY = gql`
  fragment QuestionType on question_types {
    slug
    name
  }
  fragment QuestionChoices on question_choices {
    id
    choice
    choice_order
    is_right_choice
    question_id
  }
  fragment QuestionContainerQuestion on questions {
    id
    question
    is_active
    title
    question_type {
      ...QuestionType
    }
    question_choices {
      ...QuestionChoices
    }
  }
  fragment QuestionContainerCourse on courses {
    id
    slug
    translations(where: { locale_code: { _eq: $locale } }) {
      id
      title
    }
    questions {
      ...QuestionContainerQuestion
    }
  }
  query CourseContainer($locale: locales_enum, $id: Int!) {
    course: courses_by_pk(id: $id) {
      ...QuestionContainerCourse
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

  const { data, loading, error } = useQuery<CourseContainerQuery, CourseContainerQueryVariables>(QUIZ_QUERY, {
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
