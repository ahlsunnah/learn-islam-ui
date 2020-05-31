/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { Fragment } from 'react'
import _get from 'lodash/get'
import _dropRight from 'lodash/dropRight'
import cx from 'classnames'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import leftSvg from 'assets/images/chevron-left.svg'
import ChapterCursor from './ChapterCursor'
import { TChapterPageTrackFragment } from '../../../graphqlTypes'
import { useAllChaptersStates, ChapterStates } from 'hooks/useChapterState'
import { useTranslation } from 'react-i18next'

interface IProps {
  currentCourseSlug: string
  track: TChapterPageTrackFragment
}

const difficultyStrings: ['difficulty1', 'difficulty2'] = ['difficulty1', 'difficulty2']

const Sidebar: React.FC<IProps> = ({ currentCourseSlug, track }) => {
  const { t } = useTranslation()
  const location = useLocation()

  const goBackToTracks: string = _get(location, 'state.coursePage.pathname')

  const { courses } = track
  const [allChaptersStates] = useAllChaptersStates()
  return (
    <Fragment>
      <header>
        <Link className="white no-underline" to={goBackToTracks}>
          <div className="pv2 flex items-center">
            <img alt="" className="w2-5 rtl-rotate-180" src={leftSvg} />
            <div className="f4">{track.translations[0].title}</div>
          </div>
        </Link>
      </header>

      <div className="flex flex-column">
        {courses.map(
          ({
            chapters,
            quiz_difficulties: { quiz_difficulties },
            slug: courseSlug,
            translations: courseStrings,
          }): JSX.Element => {
            return (
              <div key={courseSlug} className="pv2 bt b--black">
                <div
                  className={cx('ph4 pv2 flex items-center moon-gray b', {
                    'white b': currentCourseSlug === courseSlug,
                  })}
                >
                  <span className="ph1">{courseStrings[0].title}</span>
                </div>
                {chapters &&
                  chapters.map(
                    ({ id, slug: chapterSlug, translations: chapterStrings }, j): JSX.Element => (
                      <Link
                        key={`${courseSlug}-${chapterSlug}`}
                        activeClassName="white b"
                        className="ph1 pv2 flex items-center moon-gray no-underline"
                        to={`/${_dropRight(location.pathname.split('/')).join('/')}/${id}`}
                      >
                        <ChapterCursor
                          className="h2 ph1"
                          isComplete={allChaptersStates[id] === ChapterStates.completed}
                        />
                        <span className="ph1">
                          {j + 1}. {chapterStrings[0].title}
                        </span>
                      </Link>
                    )
                  )}
                {(quiz_difficulties as number[]).map(
                  (difficulty, j): JSX.Element => {
                    return (
                      <Link
                        key={`${courseSlug}-quiz${difficulty}`}
                        activeClassName="white b"
                        className="ph1 pv2 flex items-center moon-gray no-underline"
                        to={`${t('localePath')}${track.slug}/${courseSlug}/ikhtibar-${difficulty}/`}
                      >
                        <ChapterCursor className="h2 ph1" isQuiz />
                        <span className="ph1">
                          {`${courses.length + j + 1}. ${t('quiz')} ${t([difficultyStrings[difficulty - 1]])}`}
                        </span>
                      </Link>
                    )
                  }
                )}
              </div>
            )
          }
        )}
      </div>
    </Fragment>
  )
}

export default Sidebar
