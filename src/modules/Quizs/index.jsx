// @flow
import StepWrapper from 'components/StepWrapper'
import * as React from 'react'
import Helmet from 'react-helmet'
import {withPropsOnChange} from 'recompose'
import QuizForm from './QuizForm'
import './styles.scss'
import type {Strings} from 'types' // eslint-disable-line

type Props = {
  data: {
    course: {
      id: string,
      slug: string,
      quizs: Array<{}>,
      strings: Strings,
      track: Object,
    },
    otherLocaleTranslations: Object,
    translations: Object,
  },
  levelSubtitle: string,
  location: {
    pathname: string,
  },
  longTitle: string,
  otherLocalePath: string,
  pathContext: {
    difficulty: number,
    locale: string,
    next: Object,
    nextQuiz?: Object,
  },
  title: string,
}

const QuizsContainer = ({
  data: {course, otherLocaleTranslations, translations: t},
  levelSubtitle,
  location: {pathname},
  longTitle,
  otherLocalePath,
  pathContext: {difficulty, locale, next, nextQuiz},
  title,
}: Props) => (
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
        coursePathname={pathname
          .split('/')
          .slice(0, -1)
          .join('/')}
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

const enhance = withPropsOnChange(['data'], ({data, pathContext}: Props) => ({
  otherLocalePath: `${data.otherLocaleTranslations.localePath}${
    data.course.track.slug
  }/${data.course.slug}/ikhtibar-${pathContext.difficulty}`,
  levelSubtitle: `${data.translations.level} ${
    data.translations[`difficulty${pathContext.difficulty}`]
  }`,
  title: `${data.translations.quiz} ${
    data.translations[`difficulty${pathContext.difficulty}`]
  }`,
  longTitle: `${data.course.strings[0].title}: ${data.translations.quiz} ${
    data.translations[`difficulty${pathContext.difficulty}`]
  }`,
}))

export default enhance(QuizsContainer)
