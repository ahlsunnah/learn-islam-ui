// @flow
import * as React from 'react'

type Props = {
  cta?: React.Node,
  content: string,
  title: string,
}
const StepContent = ({cta, title = '', content = ''}: Props) => (
  <div className="ph6-ns ph4">
    <div className="flex justify-between items-center">
      <h2 className="blue">{title}</h2>
      {cta}
    </div>
    <p
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  </div>
)

export default StepContent
