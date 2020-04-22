import StepWrapper from 'components/molecules/StepWrapper'
import React from 'react'
import Helmet from 'react-helmet'
import './styles.scss'
import QuizForm from './QuizForm'
import { IQuizsPageProps } from '../../../types/quizs'

const difficultyStrings: ['difficulty1', 'difficulty1'] = ['difficulty1', 'difficulty1']

const QuizsContainer = ({
  data: {
    api: { course },
    otherLocaleTranslations,
    translations: t,
  },
  location: { pathname },
  pageContext: { difficulty, locale, next },
}: IQuizsPageProps): JSX.Element => {
  const otherLocalePath = `${otherLocaleTranslations.localePath}${course.track.slug}/${course.slug}/ikhtibar-${difficulty}`
  const levelSubtitle = `${t.level} ${t[difficultyStrings[difficulty - 1]]}`
  const title = `${t.quiz} ${t[difficultyStrings[difficulty - 1]]}`
  const longTitle = `${course.translations[0].title}: ${t.quiz} ${t[difficultyStrings[difficulty - 1]]}`
  return (
    <StepWrapper
      currentCourseSlug={course.slug}
      track={course.track}
      t={t}
      otherLocaleName={otherLocaleTranslations.localeName}
      otherLocalePath={otherLocalePath}
      title={title}
    >
      <Helmet title={longTitle} />
      <div className="relative z-2">
        <QuizForm
          courseStrings={course.translations[0]}
          params={{
            courseId: course.id,
            difficulty,
            locale,
          }}
          coursePathname={`${pathname.split('/').slice(0, -2).join('/')}/`}
          levelSubtitle={levelSubtitle}
          next={next}
          quizzes={course.quizzes}
          t={t}
        />
      </div>
      <div className="mdc-theme--primary-bg fixed w-100 h-100 top-0 z-1" />
    </StepWrapper>
  )
}

export default QuizsContainer
