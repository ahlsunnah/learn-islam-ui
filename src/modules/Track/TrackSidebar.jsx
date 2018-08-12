// @flow
import * as React from 'react'
import Link from 'gatsby-link'
import Home from 'react-icons/lib/io/ios-home-outline'
import cx from 'classnames'

type Props = {
  locale: string,
  localePath: string,
}
const TrackSidebar = ({locale, localePath}: Props) => (
  <div className="w2 w3-ns">
    <div
      className={cx('z-9999 fixed pt2 w2 w3-ns top-0 bottom-0 bg-blue tc', {
        'right-0': locale === 'ar',
        'left-0': locale !== 'ar',
      })}
    >
      <Link to={localePath}>
        <Home className="f3 f1-ns white" />
      </Link>
    </div>
  </div>
)
export default TrackSidebar
