// @flow
import cx from 'classnames'
import Button from 'components/Button'
import Link from 'gatsby-link'
import * as React from 'react'
import Checkbox from './Checkbox'

type Props = {
  isChapterComplete: boolean,
  next: {
    path: string,
    title: string,
    type: string,
  },
  t: {[string]: string},
  toggleCompleteChapter: Function,
}
const NavigationButtons = ({
  isChapterComplete,
  next: {path, title, type},
  t,
  toggleCompleteChapter,
}: Props) =>
  path ? (
    <div className="mt2 mb4 ph2 ph4-ns">
      <Checkbox
        checked={isChapterComplete}
        handleChange={toggleCompleteChapter}
        id="checkbox-finished"
      >
        {t.iCompletedTheChapter}
      </Checkbox>
      {type === 'tracks' &&
        isChapterComplete && (
          <div className="mt3 mb2">
            <p>
              {t.chapterCongratulations} [{title}]
            </p>
            <p>{t.chapterCongratulationsCTA}</p>
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
