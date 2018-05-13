// @flow
import cx from 'classnames'
import RawHTML from 'components/RawHTML'
import Link from 'gatsby-link'
import * as React from 'react'

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
          className={cx(
            'mv4 mv5-ns pv3 flex justify-center black flex-column',
            {
              'flex-row-reverse-ns': i % 2,
              'flex-row-ns': !(i % 2),
            },
          )}
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
