// @flow
import * as React from 'react'
import QuizForm from './QuizForm'
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
  location: {
    pathname: string,
  },
  pathContext: {
    difficulty: number,
    locale: string,
  },
}

const QuizsContainer = ({
  data: {chapter, translations: t},
  location: {pathname},
  pathContext: {difficulty, locale},
}: Props) => (
  <div>
    <div className="relative z-2">
      <QuizForm
        chapterStrings={chapter.strings[0]}
        params={{
          chapterId: chapter.id,
          difficulty,
          locale,
        }}
        chapterPathname={pathname
          .split('/')
          .slice(0, -1)
          .join('/')}
        quizs={chapter.quizs}
        t={t}
      />
    </div>
    <div className="img-background fixed cover w-100 h-100 top-0 z-1" />
  </div>
)

export default QuizsContainer
