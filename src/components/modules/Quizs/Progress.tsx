import React from 'react'
import cx from 'classnames'
import 'styles/progress.scss'

interface Props {
  className?: string
  progress: number
}

const Progress = ({ className, progress }: Props) => (
  <div className={cx('progress w5', className)}>
    <div className="determinate" style={{ width: `${progress}%` }} />
  </div>
)

export default Progress
