// @flow
import * as React from 'react'
import Link from 'gatsby-link'
import Button from '../../components/Button'
import Header from '../../components/Header'
import IconWithText from '../../components/IconWithText'
import RawHTML from '../../components/RawHTML'
import clock from '../../images/clock.svg'
import target from '../../images/target.svg'
import {getHumanTime} from '../../lib/time'

type Props = {
  duration: number,
  level: number,
  nextCoursePath: string,
  t: {
    locale: string,
    start: string,
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
  <Header className="pl6 pb4 flex justify-around bg-white">
    <div className="mt5 ph5 flex2">
      <h1 className="mv0">{trackTitle}</h1>
      {t.toOtherLanguageCTA && (
        <Link className="black no-underline" to={otherLocaleUrl}>
          <RawHTML>{t.toOtherLanguageCTA}</RawHTML>
        </Link>
      )}
    </div>
    <div className="pt2 flex1 flex flex-column">
      <div className="self-end">
        <Link className="ph2 no-underline" to={otherLocaleUrl}>
          <Button rounded stroked>
            {otherLocaleName}
          </Button>
        </Link>
      </div>
      <div className="mt4 mh5">
        <Link to={nextCoursePath}>
          <Button raised secondary>
            {t.start}
          </Button>
        </Link>
      </div>
      <IconWithText className="mt4 mh5" icon={clock}>
        {getHumanTime(t.locale, duration)}
      </IconWithText>
      <IconWithText className="mt2 mh5" icon={target}>
        {`${t.track} ${t[`level${level}`]}`}
      </IconWithText>
    </div>
  </Header>
)
export default TrackHeader
