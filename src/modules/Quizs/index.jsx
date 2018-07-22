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
  location: {
    pathname: string,
  },
  otherLocalePath: string,
  pathContext: {
    difficulty: number,
    locale: string,
  },
}

const QuizsContainer = ({
  data: {course, otherLocaleTranslations, translations: t},
  location: {pathname},
  otherLocalePath,
  pathContext: {difficulty, locale},
}: Props) => (
  <StepWrapper
    course={course}
    t={t}
    otherLocaleName={otherLocaleTranslations.localeName}
    otherLocalePath={otherLocalePath}
    title={t.quiz}
  >
    <Helmet title={'quiz'} />
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
        quizs={course.quizs}
        t={t}
      />
    </div>
    <div className="img-background fixed cover w-100 h-100 top-0 z-1" />
  </StepWrapper>
)

const enhance = withPropsOnChange(['data'], ({data, pathContext}: Props) => ({
  otherLocalePath: `${data.otherLocaleTranslations.localePath}${
    data.course.track.slug
  }/${data.course.slug}/ikhtibar-${pathContext.difficulty}`,
}))

export default enhance(QuizsContainer)
