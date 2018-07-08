// @flow
import * as React from 'react'
import QuizForm from './QuizForm'
import './styles.scss'
import type {Strings} from 'types' // eslint-disable-line

type Props = {
  data: {
    course: {
      id: string,
      quizs: Array<{}>,
      strings: Strings,
    },
    translations: {},
  },
  location: {
    pathname: string,
  },
  pathContext: {
    difficulty: number,
    locale: string,
  },
}

const QuizsContainer = ({
  data: {course, translations: t},
  location: {pathname},
  pathContext: {difficulty, locale},
}: Props) => (
  <div>
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
  </div>
)

export default QuizsContainer
