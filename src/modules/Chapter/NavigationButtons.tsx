import cx from 'classnames'
import Button from 'components/Button'
import RawHTML from 'components/RawHTML'
import {Link} from 'gatsby'
import * as React from 'react'
import {ObjectOfStrings} from 'interfaces'
import Checkbox from './Checkbox'

interface Props {
  isChapterComplete: boolean
  next: {
    path: string
    title: string
    type: 'quiz' | 'tracks' | 'course' | 'chapter'
  }
  t: ObjectOfStrings
  toggleCompleteChapter: () => void
}
const NavigationButtons = ({
  isChapterComplete,
  next: {path, title, type},
  t,
  toggleCompleteChapter,
}: Props) =>
  path ? (
    <div className="mt2 mb4 ph2 ph4-ns">
      <h1 className="mb2">
        {type === 'tracks'
          ? t.next
          : `${t.locale === 'ar' ? 'ال' : ''}${t[type]} ${t.next}`}
      </h1>
      {t.nextHelp && (
        <RawHTML className="mv3 black-60 f5">{t.nextHelp}</RawHTML>
      )}

      <Checkbox
        checked={isChapterComplete}
        handleChange={toggleCompleteChapter}
      >
        {t.iCompletedTheChapter}
      </Checkbox>
      {type === 'tracks' && isChapterComplete && (
        <div className="mt3 mb2">
          <p>
            {t.congratulations} [{title}]
          </p>
          <p>{t.congratulationsCTA}</p>
          <Link className={cx('mh1 no-underline')} to={path}>
            <Button className="pv2 h-auto lh-title tl" raised secondary>
              {t.goToTracks}
            </Button>
          </Link>
        </div>
      )}
      {type !== 'tracks' && (
        <div className="mt3 mb2">
          <Link className={cx('mh1 no-underline')} to={path}>
            <Button disabled={!isChapterComplete} raised secondary>
              {t.next}
            </Button>
          </Link>
          <span className="mh1">
            {type === 'chapter' && `(${t.chapter}: ${title})`}
            {type === 'course' && `(${t.course}: ${title})`}
            {type === 'quiz' && `(${t.quiz} ${t[title]})`}
          </span>
        </div>
      )}
    </div>
  ) : null
export default NavigationButtons
