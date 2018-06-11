// @flow
import * as React from 'react'
import 'styles/progress.scss'

type Props = {
  progress: number,
}

const Progress = ({progress}: Props) => (
  <div className="progress">
    <div className="determinate" style={{width: `${progress}%`}} />
  </div>
)

export default Progress
