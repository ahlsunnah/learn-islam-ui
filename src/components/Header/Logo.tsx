import React from 'react'
import {Link} from 'gatsby'
import {css} from '@emotion/core'
import logoAr from 'images/logo-ar.svg'
import logoFr from 'images/logo-fr.svg'
import logoHorizontalAr from 'images/logo-horizontal-ar.svg'
import logoHorizontalFr from 'images/logo-horizontal-fr.svg'
import {ObjectOfStrings} from 'interfaces'

interface Props {
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

const Logo = ({
  isHidden,
  large = false,
  t: {locale, localePath, siteName},
}: Props) => (
  <Link to={localePath}>
    <div
      css={css`
        display: ${isHidden ? 'none' : 'inline-block'};
      `}
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
