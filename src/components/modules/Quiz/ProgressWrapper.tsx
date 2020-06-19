import React from 'react'
import Progress from './Progress'

type Props = {
  percent: number
  progressText: string
}
class ProgressWrapper extends React.Component<Props> {
  render() {
    const { percent, progressText } = this.props
    return (
      <div>
        <span className="pt2 f6">
          {progressText} {percent}%
        </span>
        <Progress className="mv2" progress={percent} />
      </div>
    )
  }
}

export default ProgressWrapper
