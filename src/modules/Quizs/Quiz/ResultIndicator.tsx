import * as React from 'react'
import Correct from 'react-icons/lib/md/check'
import Error from 'react-icons/lib/md/do-not-disturb-alt'

interface Props {
  isCorrect: boolean
  selected: boolean
  finished: boolean
}

const ResultIndicator = ({isCorrect, selected, finished}: Props) => {
  if (!finished) {
    return <div className="flex-no-shrink w2-5 dib v-mid box-36px" />
  }
  if (isCorrect && selected) {
    return <Correct className="flex-no-shrink w2-5 f2 green" />
  }
  return <Error className="flex-no-shrink w2-5 f2 red" />
}
export default ResultIndicator
