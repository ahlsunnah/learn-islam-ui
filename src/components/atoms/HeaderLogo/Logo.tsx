import React from 'react'
import { Link } from 'gatsby'
import logoAr from 'assets/images/logo-ar.svg'
import logoFr from 'assets/images/logo-fr.svg'
import logoHorizontalAr from 'assets/images/logo-horizontal-ar.svg'
import logoHorizontalFr from 'assets/images/logo-horizontal-fr.svg'
import { ObjectOfStrings } from 'interfaces'

interface IProps {
  isHidden?: boolean
  large?: boolean
  t: ObjectOfStrings
}

function getLogo(locale: string, large: boolean) {
  if (locale === 'ar') {
    return large ? logoAr : logoHorizontalAr
  }
  return large ? logoFr : logoHorizontalFr
}

const Logo = ({ isHidden, large = false, t: { locale, localePath, siteName } }: IProps) => (
  <Link to={localePath}>
    <div
      css={{
        display: isHidden ? 'none' : 'inline-block',
      }}
    >
      <img
        alt={siteName}
        width={large ? '540px' : '230px'}
        // height="60px"
        src={getLogo(locale, large)}
      />
    </div>
  </Link>
)
export default Logo
