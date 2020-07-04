import StepWrapper from 'components/molecules/AppStepWrapper/StepWrapper'
import React from 'react'
import Helmet from 'react-helmet'
import './styles.scss'
import QuizForm from './QuizForm'
import { QuestionContainerCourseFragment } from '../../../hasuraTypes'
import { useTranslation } from 'react-i18next'

type Props = {
  course: QuestionContainerCourseFragment
}

const QuizComponent = ({ course }: Props): JSX.Element => {
  const { t, i18n } = useTranslation()

  const [drawerOpen, setDrawerOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  const courseTranslation = course.translations[0]

  if (!courseTranslation) {
    throw Error(`No translation for course (${course.id}) and language (${i18n.language})`)
  }

  const longTitle = `${courseTranslation.title}: ${t('quiz')}`

  return (
    <StepWrapper drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle}>
      <Helmet title={longTitle} />
      <QuizForm courseStrings={courseTranslation} questions={course.questions} />
    </StepWrapper>
  )
}

export default QuizComponent
