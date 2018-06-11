// @flow
import * as React from 'react'
import Correct from 'react-icons/lib/md/check'
import Error from 'react-icons/lib/md/clear'

type Props = {
  isCorrect: boolean,
  selected: boolean,
  finished: boolean,
}

const ResultIndicator = ({isCorrect, selected, finished}: Props) => {
  if (!finished) {
    return <div className="w2-5 dib v-mid box-36px" />
  }
  if (isCorrect) {
    return <Correct className="w2-5 f2 green" />
  }
  if (selected) {
    return <Error className="w2-5 f2 red" />
  }
  return <div className="w2-5 dib v-mid box-36px" />
}
export default ResultIndicator
