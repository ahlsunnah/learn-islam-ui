import StepWrapper from 'components/StepWrapper'
import * as React from 'react'
import Helmet from 'react-helmet'
import './styles.scss'
import QuizForm from './QuizForm'
import {INext, IQuizData} from './types'

interface Props {
  data: IQuizData
  location: {
    pathname: string
  }
  pageContext: {
    difficulty: number
    locale: string
    next: INext
    nextQuiz?: INext
  }
}

const QuizsContainer = ({
  data: {course, otherLocaleTranslations, translations: t},
  location: {pathname},
  pageContext: {difficulty, locale, next, nextQuiz},
}: Props) => {
  const otherLocalePath = `${otherLocaleTranslations.localePath}${
    course.track.slug
  }/${course.slug}/ikhtibar-${difficulty}`
  const levelSubtitle = `${t.level} ${t[`difficulty${difficulty}`]}`
  const title = `${t.quiz} ${t[`difficulty${difficulty}`]}`
  const longTitle = `${course.strings[0].title}: ${t.quiz} ${
    t[`difficulty${difficulty}`]
  }`
  return (
    <StepWrapper
      course={course}
      t={t}
      otherLocaleName={otherLocaleTranslations.localeName}
      otherLocalePath={otherLocalePath}
      title={title}
    >
      <Helmet title={longTitle} />
      <div className="relative z-2">
        <QuizForm
          courseStrings={course.strings[0]}
          params={{
            courseId: course.id,
            difficulty,
            locale,
          }}
          coursePathname={`${pathname
            .split('/')
            .slice(0, -1)
            .join('/')}/`}
          levelSubtitle={levelSubtitle}
          next={next}
          nextQuiz={nextQuiz}
          quizs={course.quizs}
          t={t}
        />
      </div>
      <div className="mdc-theme--primary-bg fixed w-100 h-100 top-0 z-1" />
    </StepWrapper>
  )
}

export default QuizsContainer
