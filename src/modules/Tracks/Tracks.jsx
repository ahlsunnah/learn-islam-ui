// @flow
import * as React from 'react'
import cx from 'classnames'
import Link from 'gatsby-link'
import RawHTML from '../../components/RawHTML'

type Props = {
  localePath: string,
  tracks: Array<{
    slug: string,
    strings: {
      title: string,
      description: string,
    },
  }>,
}
const Tracks = ({localePath, tracks}: Props) => (
  <div>
    {tracks.map(({slug, strings}, i) => (
      <Link key={slug} to={`${localePath}${slug}`} className="no-underline">
        <div
          className={cx('mv5 pv3 flex justify-center black', {
            'flex-row-reverse': i % 2,
          })}
        >
          <div className="mh3 w5 h4 bg-light-gray" />
          <div className="mh3 measure-narrow">
            <h2>{strings.title}</h2>
            <RawHTML>{strings.description}</RawHTML>
          </div>
        </div>
      </Link>
    ))}
  </div>
)
export default Tracks
