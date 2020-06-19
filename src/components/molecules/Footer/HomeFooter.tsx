/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Link } from 'gatsby'
import cx from 'classnames'
import Facebook from 'react-icons/lib/fa/facebook'
import Telegram from 'react-icons/lib/fa/paper-plane'
import Twitter from 'react-icons/lib/fa/twitter'
import Youtube from 'react-icons/lib/fa/youtube-play'
import Button from '../../atoms/Button/Button'
import RawHTML from '../../RawHTML'
import { useTranslation } from 'react-i18next'
import PoweredByVercel from 'powered-by-vercel'

interface IIcon {
  Icon: React.FC<{ className?: string }>
  href: string
}
const icons: IIcon[] = [
  { Icon: Facebook, href: 'urlFacebook' },
  { Icon: Twitter, href: 'urlTwitter' },
  { Icon: Youtube, href: 'urlYoutube' },
  { Icon: Telegram, href: 'urlTelegram' },
]

type Props = {
  dark?: boolean
  withTrackSlug?: boolean
  firstTrackSlug?: string
}

const HomeFooter = ({ dark, firstTrackSlug, withTrackSlug = true }: Props) => {
  const { t } = useTranslation()
  return (
    <section
      className={cx('pt5 pb4 ph4 ph5-l flex flex-column white', {
        'mdc-theme--primary-bg': !dark,
        'mdc-theme--secondary-bg': dark,
      })}
    >
      <div className="mh5-ns ph5-ns tc">
        <h2 className="ph5-l f4 fw4">{t('homeFooterCTA')}</h2>
      </div>
      {withTrackSlug && (
        <div className="mt4 mt5-ns tc">
          <Link to={`${firstTrackSlug}/`} className="no-underline">
            <Button
              elevated
              color="default"
              sx={{
                bg: '#fff',
                px: '2rem',
              }}
            >
              {t('homeStartTrack')}
            </Button>
          </Link>
        </div>
      )}
      <div className="mt5 tc">
        <div className="flex flex-column flex-row-ns justify-between items-center items-end-ns">
          <div className="mh2 tc tl-ns">
            <div className="">{t('siteName')}</div>
            <div className="f6">{t('siteSlogan')}</div>
          </div>
          <div className="mt4 mt0-ns tc tr-ns">
            <div className="mh2">{t('footerSocialTitle')}</div>
            <div className="mt3">
              {icons.map(({ href, Icon }, i) => {
                return (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer">
                    <Icon
                      className={cx('mh2 pa1 f4 bg-white mdc-theme--primary', {
                        'mdc-theme--primary': !dark,
                        'mdc-theme--secondary': dark,
                      })}
                    />
                    {/* <Button className="pa0" inverse>
                  <Icon className="mdc-button__icon" />
                </Button> */}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="pt3 tc">
        <RawHTML>{t('copyright')}</RawHTML>
        <PoweredByVercel
          className="mt3 db"
          utmSource="ahlsunnah"
          target="blank"
          rel="noopener noreferrer"
          svgProps={{
            width: 180,
          }}
        />
      </div>
    </section>
  )
}
export default HomeFooter
