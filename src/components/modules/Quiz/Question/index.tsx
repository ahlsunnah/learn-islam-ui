import React from 'react'
import Choose from './Choose'
import ChooseACategory from './ChooseACategory'
import FillInTheBlank from './FillInTheBlank'
import LinkTheSentences from './LinkTheSentences'
import TrueOrFalse from './TrueOrFalse'

import { Locale } from 'types'
import { TFunction } from 'i18next'
import { QuizContainerQuizFragment } from '../../../../hasuraTypes'

export type QuestionProps = {
  finished: boolean
  number: number
  locale: Locale
  quiz: QuizContainerQuizFragment
  t: TFunction
}

const Question: React.FC<QuestionProps> = (props) => {
  const { type_slug } = props.quiz
  switch (type_slug) {
    case 'choose': // {text, values: [ch1, ch2, ch3, ...]}
      return <Choose {...props} />
    case 'choose_a_category': // {values: [{name: '', items: ''}, {name: '', items: ''}]}
      return <ChooseACategory {...props} />
    case 'fill_in_the_blank': // {textWithPlaceholders, values: [val1, val2, val3, ...]}
      return <FillInTheBlank {...props} />
    case 'link_the_sentences': // {title, values: [{a, b}, {a, b}, ...]}
      return <LinkTheSentences {...props} />
    // // case 'reorder': // [p1, p2, p3, ...]
    // //   return Reorder
    case 'true_or_false': // {text, isTrue}
      return <TrueOrFalse {...props} />

    default:
      // This should not happen, log to sentry
      return null
  }
}
export default Question
