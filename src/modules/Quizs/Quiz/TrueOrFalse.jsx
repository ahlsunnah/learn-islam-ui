// @flow
import Button from 'components/Button'
import * as React from 'react'
import ArrowForward from 'react-icons/lib/md/arrow-forward'

type Props = {
  data: {
    // isTrue: boolean,
    text: string,
  },
  number: number,
  t: {
    quizFalse: string,
    quizTrue: string,
  },
}
const TrueOrFalse = ({data: {text}, number, t}: Props) => (
  <div className="mb5 pv5 ph4 flex">
    <div className="flex-no-shrink mr2">
      {number} <ArrowForward className="dark-gray" />
    </div>
    <div>
      <div className="f4">{text}</div>
      <div className="mt4">
        <div className="mt2">
          <Button rounded secondary>
            {t.quizTrue}
          </Button>
        </div>
        <div className="mt2">
          <Button rounded secondary>
            {t.quizFalse}
          </Button>
        </div>
      </div>
    </div>
  </div>
)

export default TrueOrFalse
