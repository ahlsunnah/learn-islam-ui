// @flow
import * as React from 'react'
import cx from 'classnames'
import 'styles/chapter-content.scss'
import NavigationButtons from './NavigationButtons'

type Props = {
  active: boolean,
  arabic?: boolean,
  content: string,
  difficultiesLinks: {},
  t: {},
}
const StepContent = ({
  active,
  arabic,
  content = '',
  difficultiesLinks,
  t,
}: Props) => (
  <div
    className={cx(
      'chapter-content center ph4-ns ph3 pv2 ba bw1 br2 b--light-gray overflow-y-scroll f4-5 lh-17 black-90',
      {
        dn: !active,
      },
    )}
  >
    <div
      className={cx('', {
        'rtl f3': arabic,
        'f4-5': !arabic,
      })}
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
    <NavigationButtons difficultiesLinks={difficultiesLinks} t={t} />
  </div>
)

export default StepContent
