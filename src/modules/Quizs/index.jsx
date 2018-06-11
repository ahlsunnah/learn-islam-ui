// @flow
import * as React from 'react'
import QuizForm from './QuizForm'
import QuizHeader from './QuizHeader'
import './styles.scss'
import type {Strings} from 'types' // eslint-disable-line

type Props = {
  data: {
    chapter: {
      id: string,
      quizs: Array<{}>,
      strings: Strings,
    },
    translations: {},
  },
  pathContext: {
    difficulty: number,
    locale: string,
  },
}

const QuizsContainer = ({
  data: {chapter, translations: t},
  pathContext: {difficulty, locale},
}: Props) => (
  <div>
    <div className="relative z-2">
      <QuizHeader t={t} {...chapter.strings[0]} />
      <QuizForm
        params={{
          chapterId: chapter.id,
          difficulty,
          locale,
        }}
        quizs={chapter.quizs}
        t={t}
      />
    </div>
    <div className="img-background fixed cover w-100 h-100 top-0 z-1" />
  </div>
)
export default QuizsContainer
