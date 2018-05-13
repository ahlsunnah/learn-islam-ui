// @flow
import Card from 'components/Card'
import sandBg from 'images/sand-bg.jpg'
import * as React from 'react'

type Props = {}
const QuizsContainer = (
  props: Props, // eslint-disable-line
) => (
  <div>
    <div
      className="absolute h-100 w-100 cover bg-light-yellow"
      style={{backgroundImage: `url(${sandBg})`}}
    />
    <Card>TEST</Card>
  </div>
)
export default QuizsContainer
