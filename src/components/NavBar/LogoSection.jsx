// @flow
import Link from 'gatsby-link'
import logo from 'images/logo.svg'
import * as React from 'react'

type Props = {
  localePath: string,
  siteName: string,
}
const LogoSection = ({localePath, siteName}: Props) => (
  <section className="pv0 mdc-toolbar__section mdc-toolbar__section mdc-toolbar__section--align-start">
    <Link className="mdc-toolbar__title pv0" to={localePath}>
      <h1 className="f5 mb0">
        <img alt={siteName} height="50px" src={logo} />
      </h1>
    </Link>
  </section>
)
export default LogoSection
