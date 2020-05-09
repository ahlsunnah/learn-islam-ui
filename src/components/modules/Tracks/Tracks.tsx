/** @jsx jsx */
import { jsx } from 'theme-ui'
import RawHTML from 'components/RawHTML'
import { Link } from 'gatsby'

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
  tracks: Array<{
    slug: string
    soon: boolean
    translations: Array<{
      title: string
      description?: string | null
    }>
  }>
}
const Tracks = ({ localePath, soonString, tracks }: IProps) => (
  <div>
    {tracks.map(({ slug, soon, translations }, i) => {
      const { title, description } = translations[0]
      return (
        <LinkOrChildren
          key={slug}
          to={!soon && `${localePath}${slug}/`}
          sx={{
            textDecoration: 'none',
          }}
        >
          <div
            sx={{
              my: ['2rem', , '4rem'],
              py: '1rem',
              display: 'flex',
              justifyContent: 'center',
              color: 'black',
              flexDirection: ['column', , i % 2 ? 'row-reverse' : 'row'],
            }}
          >
            <div
              sx={{
                mx: '1rem',
                width: '16rem',
                height: '8rem',
                bg: '#eee',
              }}
            />
            <div
              sx={{
                mx: '1rem',
                maxWidth: '20rem',
              }}
            >
              {!!soon && <span>{soonString}</span>}
              <h2>{title}</h2>
              {description && <RawHTML>{description}</RawHTML>}
            </div>
          </div>
        </LinkOrChildren>
      )
    })}
  </div>
)
export default Tracks
