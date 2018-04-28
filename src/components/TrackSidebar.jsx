// @flow
import * as React from 'react'
import Link from 'gatsby-link'
import Home from 'react-icons/lib/io/ios-home-outline'

type Props = {
  localePath: string,
}
const TrackSidebar = ({localePath}: Props) => (
  <div className="w3">
    <div className="z-9999 fixed pt2 w3 top-0 bottom-0 left-0 bg-blue tc">
      <Link to={localePath}>
        <Home className="f1 white" />
      </Link>
    </div>
  </div>
)
export default TrackSidebar
