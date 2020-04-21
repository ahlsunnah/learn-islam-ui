import React from 'react'
import { useTranslation } from 'react-i18next'
import cx from 'classnames'
import NavBar from 'components/NavBar'
import HomeTrackCard from './HomeTrackCard'
import { THomeQueryQuery } from '../../graphqlTypes'

const HomeHero = ({ api: { tracks } }: THomeQueryQuery) => {
  const { t } = useTranslation()
  return (
    <div className="min-vh-100 flex flex-column mdc-theme--primary-bg bg-pattern">
      <NavBar />
      <div className="mt64 min-h-512-ns flex1 flex flex-column flex-row-ns justify-between items-center">
        <div className="mt4 mt0-ns ph5 flex1 white">
          <div
            className={cx('tc f4 f3-ns fw4 title-with-subtitle', {
              'tr-ns': t('otherTranslationsLocaleName') === 'Français',
              'tl-ns': t('otherTranslationsLocaleName') !== 'Français',
            })}
            dangerouslySetInnerHTML={{ __html: t('homeTitle') }}
          />
          <p className="mt4 pv3-ns f3-ns">{t('homeDescription')}</p>
        </div>
        <div className="ph4 flex1">
          {tracks.map((track) => (
            <HomeTrackCard key={track.slug} {...track} localePath={t('localePath')} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default HomeHero
