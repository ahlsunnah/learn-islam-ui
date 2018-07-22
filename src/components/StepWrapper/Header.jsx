// @flow
import Button from 'components/Button'
import Link from 'gatsby-link'
import hamburgerSvg from 'images/hamburger.svg'
import * as React from 'react'

type Props = {
  otherLocaleName: string,
  otherLocalePath: string,
  title: string,
  toggleSidebar: Function,
}
const Header = ({
  otherLocaleName,
  otherLocalePath,
  title,
  toggleSidebar,
}: Props) => (
  <div className="z-2 flex justify-between items-center bg-black-90 w-100">
    <div className="flex-grow1 flex-no-shrink">
      <button
        className="mh2 mh3-ns bg-transparent bn pointer"
        onClick={toggleSidebar}
        type="button"
      >
        <img alt="menu" className="mt2 h2" src={hamburgerSvg} />
      </button>
    </div>
    <h3 className="white f5 f4-ns">{title}</h3>
    <div className="flex1 flex justify-end">
      <Link className="mh2 mh3-ns no-underline" to={otherLocalePath}>
        <Button rounded stroked className="white">
          {otherLocaleName}
        </Button>
      </Link>
    </div>
  </div>
)
export default Header
