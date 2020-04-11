import PropTypes from 'prop-types'
import React from 'react'
import {compose, setPropTypes, withPropsOnChange} from 'recompose'
import Progress from './Progress'

interface Props {
  percent: number
  progressText: string
}
class ProgressWrapper extends React.Component<Props> {
  // TODO
  render() {
    const {percent, progressText} = this.props
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
