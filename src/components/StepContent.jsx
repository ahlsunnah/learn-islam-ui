// @flow
import * as React from 'react'

type Props = {
  title: string,
  content: string,
}
const StepContent = ({title = '', content = ''}: Props) => (
  <div className="ph6-ns ph4">
    <h4 className="blue">{title}</h4>
    <p
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  </div>
)

export default StepContent
