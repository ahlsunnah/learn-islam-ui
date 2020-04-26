import cx from 'classnames'
import RawHTML from 'components/RawHTML'
import { Link } from 'gatsby'
import React from 'react'
import { TTracksPageTrackFragment } from '../../../graphqlTypes'

interface ILinkOrChildrenProps {
  children: JSX.Element
  className?: string
  to: string | false
}
const LinkOrChildren = ({ children, className = '', to }: ILinkOrChildrenProps) =>
  to ? (
    <Link to={to} className={className}>
      {children}
    </Link>
  ) : (
    children
  )

interface IProps {
  localePath: string
  soonString: string
  tracks: TTracksPageTrackFragment[]
}
const Tracks = ({ localePath, soonString, tracks }: IProps) => (
  <div>
    {tracks.map(({ slug, soon, translations }, i) => {
      const { title, description } = translations[0]
      return (
        <LinkOrChildren key={slug} to={!soon && `${localePath}${slug}/`} className="no-underline">
          <div
            className={cx('mv4 mv5-ns pv3 flex justify-center black flex-column', {
              'flex-row-reverse-ns': i % 2,
              'flex-row-ns': !(i % 2),
            })}
          >
            <div className="mh3 w5 h4 bg-light-gray" />
            <div className="mh3 measure-narrow">
              {!!soon && <span>{soonString}</span>}
              <h2>{title}</h2>
              <RawHTML>{description}</RawHTML>
            </div>
          </div>
        </LinkOrChildren>
      )
    })}
  </div>
)
export default Tracks
