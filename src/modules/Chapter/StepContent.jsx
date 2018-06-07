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
    <div className="ba bw1 br1 b--light-gray ph4-ns ph3" style={{overflowY: 'scroll', height: '400px'}}>
      <p
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </div>
  </div>
)

export default StepContent
