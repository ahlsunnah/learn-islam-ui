// @flow
import * as React from 'react'
import Link from 'gatsby-link'
import cx from 'classnames'
import logo from 'images/logo.svg'

type Props = {
  localePath: string,
  siteName: string,
  otherLocaleTranslations: {
    localeName: string,
  },
}

const LogoSection = ({
  localePath,
  siteName,
  otherLocaleTranslations,
}: Props) => (
  <section className="pv0 mdc-toolbar__section mdc-toolbar__section mdc-toolbar__section--align-start">
    <Link className="mdc-toolbar__title pv0" to={localePath}>
      <h1
        className={cx('f5 mb0', {
          'mr5-ns mr3': otherLocaleTranslations.localeName === 'Français',
        })}
      >
        <img alt={siteName} height="50px" src={logo} />
      </h1>
    </Link>
  </section>
)
export default LogoSection
