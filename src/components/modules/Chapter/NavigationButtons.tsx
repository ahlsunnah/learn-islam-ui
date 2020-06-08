import { useLocation } from '@reach/router'
import cx from 'classnames'
import Button from 'components/atoms/Button/Button'
import RawHTML from 'components/RawHTML'
import { Link } from 'gatsby'
import useParsedParams from 'hooks/useParsedParams'
import useTrackNavigationQuery from 'hooks/useTrackNavigationQuery'
import _dropRight from 'lodash/dropRight'
import _findIndex from 'lodash/findIndex'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { TrackNavigationChapterFragment, TrackNavigationTrackFragment } from '../../../hasuraTypes'
import Checkbox from './Checkbox'
import memoizeOne from 'memoize-one'

type Props = {
  isChapterComplete: boolean
  toggleCompleteChapter: () => void
}

type NextChapterType = {
  path: string
  title: string
  type: 'quiz' | 'tracks' | 'course' | 'chapter'
}

const DEFAULT_TRACK_ID = 1
const DEFAULT_CHAPTER_ID = 1

const getNextChapter = (
  currentChapterId: number,
  track: TrackNavigationTrackFragment,
  pathName: string
): NextChapterType => {
  const flattenedTrack = track.courses.reduce<TrackNavigationChapterFragment[]>((acc, course) => {
    course.chapters.forEach((chapter) => {
      acc.push(chapter)
    })
    return acc
  }, [])
  const indexOfCurrentChapter = _findIndex(flattenedTrack, (chapter) => chapter.id === currentChapterId)

  const nextChapter =
    flattenedTrack[
      indexOfCurrentChapter + 1 >= flattenedTrack.length - 1 ? flattenedTrack.length - 1 : indexOfCurrentChapter + 1
    ]

  return {
    path: `${_dropRight(pathName.split('/')).join('/')}/${nextChapter.id}`,
    title: nextChapter.translations[0].title,
    type: 'tracks',
  }
}

const memoizeGetNextChapter = memoizeOne(getNextChapter)

const NavigationButtons = ({ isChapterComplete, toggleCompleteChapter }: Props) => {
  const location = useLocation()
  const { trackId, chapterId } = useParsedParams()
  if (!trackId) console.error(`trackId is not defined`)
  if (!chapterId) console.error(`chapterId is not defined`)

  const { data, loading, error } = useTrackNavigationQuery(trackId || DEFAULT_TRACK_ID)
  const { t } = useTranslation()
  if (loading) {
    return <div>Loading</div>
  }
  if (error) {
    console.error(error)
    return <div>{error}</div>
  }
  if (!data || !data.track) {
    return <div>There is no data</div>
  }
  const { track } = data

  const { path, title, type } = memoizeGetNextChapter(chapterId || DEFAULT_CHAPTER_ID, track, location.pathname)

  return (
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
            {type === 'quiz' && `(${t('quiz')})`}
          </span>
        </div>
      )}
    </div>
  )
}

export default NavigationButtons
