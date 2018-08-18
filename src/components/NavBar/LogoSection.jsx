// @flow
import * as React from 'react'
import Link from 'gatsby-link'
import cx from 'classnames'
import logo from 'images/logo.png'

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
  <div>
    <section className="pv0-ns mdc-toolbar__section-ns mdc-toolbar__section-ns mdc-toolbar__section--align-start-ns">
      <Link className="mdc-toolbar__title-ns pv0-ns" to={localePath}>
        <h1
          className={cx('db-ns dn f5 mb0', {
            'mr5-ns mr3': otherLocaleTranslations.localeName === 'Français',
          })}
        >
          <img alt={siteName} height="65px" src={logo} />
        </h1>
        <div className="dn-ns db pa2">
          <img alt={siteName} width="230px" height="60px" src={logo} />
        </div>
      </Link>
    </section>
  </div>
)
export default LogoSection
