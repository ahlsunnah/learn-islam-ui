import StepWrapper from 'components/StepWrapper'
import * as React from 'react'
import Helmet from 'react-helmet'
import './styles.scss'
import QuizForm from './QuizForm'
import {IQuizsPageProps} from '../../types/quizs'
import {IDawaSidebarTrack} from 'types/sidebar'

const QuizsContainer = ({
  data: {
    api: {course},
    otherLocaleTranslations,
    translations: t,
  },
  location: {pathname},
  pageContext: {difficulty, locale, next},
}: IQuizsPageProps<IDawaSidebarTrack>): JSX.Element => {
  const otherLocalePath = `${otherLocaleTranslations.localePath}${
    course.track.slug
  }/${course.slug}/ikhtibar-${difficulty}`
  const levelSubtitle = `${t.level} ${t[`difficulty${difficulty}`]}`
  const title = `${t.quiz} ${t[`difficulty${difficulty}`]}`
  const longTitle = `${course.translations.edges[0].node.title}: ${t.quiz} ${
    t[`difficulty${difficulty}`]
  }`
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
          courseStrings={course.translations.edges[0].node}
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
          quizs={course.quizs}
          t={t}
        />
      </div>
      <div className="mdc-theme--primary-bg fixed w-100 h-100 top-0 z-1" />
    </StepWrapper>
  )
}

export default QuizsContainer
