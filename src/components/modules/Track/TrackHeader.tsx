import Button from 'components/atoms/Button/Button'
import SwitchLanguageButton from 'components/atoms/SwitchLanguageButton/SwitchLanguageButton'
import { navigate } from 'gatsby'
import React from 'react'
import { useLocation } from '@reach/router'
import { useTranslation } from 'react-i18next'

interface IProps {
  duration: number
  level: number
  nextCoursePath: string
  trackTitle: string
}

const TrackHeader = ({ nextCoursePath, trackTitle }: IProps) => {
  const { t } = useTranslation()
  const location = useLocation()

  return (
    <div className="ph3 pb4 pt3 flex flex-column flex-row-ns justify-around bg-white raised-header">
      <div className="self-end dn-ns">
        <SwitchLanguageButton />
      </div>
      <div className="mt3 mt5-ns ph5-ns flex2">
        <h1 className="mv0">{trackTitle}</h1>
      </div>
      <div className="pt2 flex1 flex flex-column-reverse flex-column-ns">
        <div className="self-end dn db-ns">
          <SwitchLanguageButton />
        </div>
        <div className="mt3 mb2 mt4-ns mb4-ns mh3-l">
          <Button
            onClick={() => {
              navigate(nextCoursePath, { state: { coursePage: location } })
            }}
          >
            {t('start')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TrackHeader
