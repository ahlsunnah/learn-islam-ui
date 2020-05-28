import Button from 'components/atoms/Button/Button'
import { Link } from 'gatsby'
import React from 'react'

interface IProps {
  otherLocaleName: string
  otherLocalePath: string
  title: string
}
const Header = ({ otherLocaleName, otherLocalePath, title }: IProps) => (
  <div className="z-2 flex justify-between items-center bg-black-90 w-100">
    <h3 className="white f5 f4-ns">{title}</h3>
    <div className="flex1 flex justify-end">
      <Link className="mh2 mh3-ns no-underline" to={otherLocalePath}>
        <Button rounded outlined className="white">
          {otherLocaleName}
        </Button>
      </Link>
    </div>
  </div>
)
export default Header
