// @flow
import * as React from 'react'
import Link from 'gatsby-link'
import Home from 'react-icons/lib/io/ios-home-outline'

type Props = {
  localePath: string,
}
const TrackSidebar = ({localePath}: Props) => (
  <div className="w2 w3-ns">
    <div className="z-9999 fixed pt2 w2 w3-ns top-0 bottom-0 left-0 bg-blue tc">
      <Link to={localePath}>
        <Home className="f3 f1-ns white" />
      </Link>
    </div>
  </div>
)
export default TrackSidebar
