// @flow
import * as React from 'react'
import {withHandlers} from 'recompose'
import scrollIntoView from 'scroll-into-view-if-needed'
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
  location: {
    pathname: string,
  },
  pathContext: {
    difficulty: number,
    locale: string,
  },
  scrollToRef: Function,
  setRef: Function,
}

const QuizsContainer = ({
  data: {chapter, translations: t},
  location: {pathname},
  pathContext: {difficulty, locale},
  scrollToRef,
  setRef,
}: Props) => (
  <div>
    <div className="relative z-2">
      <QuizHeader scrollToRef={scrollToRef} t={t} {...chapter.strings[0]} />
      <QuizForm
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
        setRef={setRef}
        t={t}
      />
    </div>
    <div className="img-background fixed cover w-100 h-100 top-0 z-1" />
  </div>
)
const enhance = withHandlers(() => {
  let _ref
  return {
    setRef: () => (ref) => {
      _ref = ref
    },
    scrollToRef: () => () =>
      scrollIntoView(_ref, {
        behavior: 'smooth',
        scrollMode: 'if-needed',
        block: 'start',
        inline: 'start',
      }),
  }
})

export default enhance(QuizsContainer)
