// @flow
import * as React from 'react'
import Choose from './Choose'
import ChooseACategory from './ChooseACategory'
import FillInTheBlank from './FillInTheBlank'
import LinkTheSentences from './LinkTheSentences'
import TrueOrFalse from './TrueOrFalse'

const NullComponent = () => null

const getComponentByType = (type) => {
  switch (type) {
    case 'choose': // {text, values: [ch1, ch2, ch3, ...]}
      return Choose
    case 'choose-a-category': // {values: [{name: '', items: ''}, {name: '', items: ''}]}
      return ChooseACategory
    case 'fill-in-the-blank': // {textWithPlaceholders, values: [val1, val2, val3, ...]}
      return FillInTheBlank
    case 'link-the-sentences': // {title, values: [{a, b}, {a, b}, ...]}
      return LinkTheSentences
    // case 'reorder': // [p1, p2, p3, ...]
    //   return Reorder
    case 'true-or-false': // {text, isTrue}
      return TrueOrFalse

    default:
      return NullComponent
  }
}

type Props = {
  addData: Function,
  params: {
    chapterId: string,
    difficulty: number,
    locale: string,
  },
  t: {},
  type: string,
}
const Quiz = ({type, ...props}: Props) => {
  const QuizByType = getComponentByType(type)
  return <QuizByType {...props} />
}

export default Quiz