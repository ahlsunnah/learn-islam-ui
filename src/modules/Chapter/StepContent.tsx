import React from 'react'
import cx from 'classnames'

interface Props {
  active: boolean
  arabic?: boolean
  children?: JSX.Element
  content?: string
}
const StepContent = ({ active, arabic, children, content = '' }: Props) => (
  <div
    className={cx(
      'chapter-content center ph4-ns ph3 pv2 ba bw1 br2 b--light-gray overflow-y-scroll f4-5 lh-17 black-90',
      {
        dn: !active,
      }
    )}
  >
    {content && (
      <div
        className={cx('', {
          'rtl f3 font-book': arabic,
          'f4-5': !arabic,
        })}
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    )}
    {children}
  </div>
)

export default StepContent
