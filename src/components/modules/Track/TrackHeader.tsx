import Button from 'components/atoms/Button/Button'
import SwitchLanguageButton from 'components/atoms/SwitchLanguageButton/SwitchLanguageButton'
import { Link } from 'gatsby'
// import clock from 'images/clock.svg'
// import target from 'images/target.svg'
// import {getHumanTime} from 'lib/time'
import React from 'react'
import { useTranslation } from 'react-i18next'

interface IProps {
  duration: number
  level: number
  nextCoursePath: string
  trackTitle: string
}
const TrackHeader = ({ duration, level, nextCoursePath, trackTitle }: IProps) => {
  const { t } = useTranslation()
  return (
    <div className="ph3 pb4 pt3 flex flex-column flex-row-ns justify-around bg-white raised-header">
      <div className="self-end dn-ns">
        <SwitchLanguageButton />
      </div>
      <div className="mt3 mt5-ns ph5-ns flex2">
        <h1 className="mv0">{trackTitle}</h1>
        {/* {i18n.language === 'fr' && (
          <Link className="black no-underline" to={otherLocaleUrl}>
            <RawHTML className="mt2 mt0-ns">{t('toOtherLanguageCTA')}</RawHTML>
          </Link>
        )} */}
      </div>
      <div className="pt2 flex1 flex flex-column-reverse flex-column-ns">
        <div className="self-end dn db-ns">
          <SwitchLanguageButton />
        </div>
        <div className="mt3 mb2 mt4-ns mb4-ns mh3-l">
          <Link to={nextCoursePath}>
            <Button raised>{t('start')}</Button>
          </Link>
        </div>
        {/* <IconWithText className="mv2 mh3-l" icon={clock}>
        {getHumanTime(i18n.language, duration)}
      </IconWithText> */}
        {/* <IconWithText className="mt4 mt0-ns mh3-l" icon={target}>
        {`${t("trackLevel")}: ${t(`level${level}`)}`}
      </IconWithText> */}
      </div>
    </div>
  )
}
export default TrackHeader
