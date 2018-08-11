// @flow
import Button from 'components/Button'
import Header from 'components/Header'
import IconWithText from 'components/IconWithText'
import RawHTML from 'components/RawHTML'
import Link from 'gatsby-link'
import clock from 'images/clock.svg'
import target from 'images/target.svg'
import {getHumanTime} from 'lib/time'
import * as React from 'react'

type Props = {
  duration: number,
  level: number,
  nextCoursePath: string,
  t: {
    locale: string,
    start: string,
    trackLevel: string,
    toOtherLanguageCTA: string,
  },
  otherLocaleName: string,
  otherLocaleUrl: string,
  trackTitle: string,
}
const TrackHeader = ({
  duration,
  level,
  nextCoursePath,
  otherLocaleName,
  otherLocaleUrl,
  t,
  trackTitle,
}: Props) => (
  <Header className="pl5 pl6-ns pb4 flex flex-column flex-row-ns justify-around bg-white">
    <div className="self-end dn-ns">
      <Link className="ph2 no-underline" to={otherLocaleUrl}>
        <Button rounded stroked>
          {otherLocaleName}
        </Button>
      </Link>
    </div>
    <div className="mt3 mt5-ns ph5-ns flex2">
      <h1 className="mv0">{trackTitle}</h1>
      {t.locale === 'fr' &&
        t.toOtherLanguageCTA && (
          <Link className="black no-underline" to={otherLocaleUrl}>
            <RawHTML className="mt2 mt0-ns">{t.toOtherLanguageCTA}</RawHTML>
          </Link>
        )}
    </div>
    <div className="pt2 flex1 flex flex-column-reverse flex-column-ns">
      <div className="self-end dn db-ns">
        <Link className="ph2 no-underline" to={otherLocaleUrl}>
          <Button rounded stroked>
            {otherLocaleName}
          </Button>
        </Link>
      </div>
      <div className="mt3 mb2 mt4-ns mb4-ns mh3-l">
        <Link to={nextCoursePath}>
          <Button raised secondary>
            {t.start}
          </Button>
        </Link>
      </div>
      <IconWithText className="mv2 mh3-l" icon={clock}>
        {getHumanTime(t.locale, duration)}
      </IconWithText>
      <IconWithText className="mt4 mt0-ns mh3-l" icon={target}>
        {`${t.trackLevel}: ${t[`level${level}`]}`}
      </IconWithText>
    </div>
  </Header>
)
export default TrackHeader
