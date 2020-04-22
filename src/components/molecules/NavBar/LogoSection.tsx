import React from 'react'
import { Link } from 'gatsby'
// import logoAr from 'images/logo-ar.png'
// import logoFr from 'images/logo-fr.png'
import logoAr from 'assets/images/logo-horizontal-ar.svg'
import logoFr from 'assets/images/logo-horizontal-fr.svg'

interface IProps {
  locale: string
  localePath: string
  siteName: string
}

const LogoSection = ({ locale, localePath, siteName }: IProps) => (
  <div>
    <section className="pv0-ns mdc-toolbar__section-ns mdc-toolbar__section-ns mdc-toolbar__section--align-start-ns">
      <Link className="mdc-toolbar__title-ns pv0-ns" to={localePath}>
        <div className="pv2 ph3">
          <img
            alt={siteName}
            width="230px"
            // height="60px"
            src={locale === 'ar' ? logoAr : logoFr}
          />
        </div>
      </Link>
    </section>
  </div>
)
export default LogoSection
