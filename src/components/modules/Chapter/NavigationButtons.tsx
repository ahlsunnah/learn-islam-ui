import cx from 'classnames'
import Button from 'components/atoms/Button/Button'
import RawHTML from 'components/RawHTML'
import { Link } from 'gatsby'
import React from 'react'
import Checkbox from './Checkbox'
import { INext } from 'types/chapter'
import { useTranslation } from 'react-i18next'

const difficultyStrings: ['difficulty1', 'difficulty2'] = ['difficulty1', 'difficulty2']

interface IProps {
  isChapterComplete: boolean
  next: INext
  toggleCompleteChapter: () => void
}

const NavigationButtons = ({ isChapterComplete, next: { path, title, type }, toggleCompleteChapter }: IProps) => {
  const { t } = useTranslation()

  return path ? (
    <div className="mt2 mb4 ph2 ph4-ns">
      <h1 className="mb2">
        {type === 'tracks' ? t('next') : `${t('locale') === 'ar' ? 'ال' : ''}${t(`${type}`)} ${t('next')}`}
      </h1>
      {t('nextHelp') && <RawHTML className="mv3 black-60 f5">{t('nextHelp')}</RawHTML>}

      <Checkbox checked={isChapterComplete} handleChange={toggleCompleteChapter}>
        {t('iCompletedTheChapter')}
      </Checkbox>
      {type === 'tracks' && isChapterComplete && (
        <div className="mt3 mb2">
          <p>
            {t('congratulations')} [{title}]
          </p>
          <p>{t('congratulationsCTA')}</p>
          <Link className={cx('mh1 no-underline')} to={path}>
            <Button className="pv2 h-auto lh-title tl" raised>
              {t('goToTracks')}
            </Button>
          </Link>
        </div>
      )}
      {type !== 'tracks' && (
        <div className="mt3 mb2">
          <Link className={cx('mh1 no-underline')} to={path}>
            <Button disabled={!isChapterComplete} raised>
              {t('next')}
            </Button>
          </Link>
          <span className="mh1">
            {type === 'chapter' && `(${t('chapter')}: ${title})`}
            {type === 'course' && `(${t('course')}: ${title})`}
            {type === 'quiz' && `(${t('quiz')} ${t(difficultyStrings[parseInt(title, 10) - 1])})`}
          </span>
        </div>
      )}
    </div>
  ) : null
}

export default NavigationButtons
