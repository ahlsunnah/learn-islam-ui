/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import cx from 'classnames'
import { Link } from 'gatsby'
import leftSvg from 'images/chevron-left.svg'
import getWindowWidth from 'lib/getWindowWidth'
import ChapterCursor from './ChapterCursor'
import {
  TChapterPageTrackFragment,
  TChapterPageTranslationsFragment,
  TQuizzesPageTranslationsFragment,
} from '../../graphqlTypes'
import { useAllChaptersStates, ChapterStates } from 'hooks/useChapterState'

const GATSBY_IS_DAWA_APP = process.env.GATSBY_IS_DAWA_APP

interface IProps {
  currentCourseSlug: string
  track: TChapterPageTrackFragment
  t: TChapterPageTranslationsFragment | TQuizzesPageTranslationsFragment
  isOpen: boolean
  toggleSidebar: () => void
}

const difficultyStrings: ['difficulty1', 'difficulty2'] = ['difficulty1', 'difficulty2']

const Sidebar: React.FC<IProps> = ({ currentCourseSlug, track, isOpen, toggleSidebar, t }) => {
  const closeDrawerOnMobile = (): void => {
    if (getWindowWidth() < 800) {
      toggleSidebar()
    }
  }

  const { courses } = track
  const [allChaptersStates] = useAllChaptersStates()
  return (
    <aside
      className={cx(
        'z-999 fixed w320px min-vh-100 bg-custom-dark-blue flex-no-shrink transition-transform overflow-auto',
        {
          'left-0': t.locale !== 'ar',
          'right-0': t.locale === 'ar',
          'translate-x-0': isOpen,
          'translate-x-100': !isOpen && t.locale === 'ar',
          'translate-x--100': !isOpen && t.locale !== 'ar',
        }
      )}
      style={{ height: '100vh' }}
    >
      <nav>
        <header>
          <Link
            className="white no-underline"
            to={GATSBY_IS_DAWA_APP ? `${t.localePath}` : `${t.localePath}${track.slug}/`}
          >
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
              id: courseId,
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
                          onClick={closeDrawerOnMobile}
                          to={`${t.localePath}${track.slug}/${courseSlug}/${chapterSlug}/`}
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
                          onClick={closeDrawerOnMobile}
                          to={`${t.localePath}${track.slug}/${courseSlug}/ikhtibar-${difficulty}/`}
                        >
                          <ChapterCursor
                            className="h2 ph1"
                            // isComplete={
                            //   quizsState[courseId] &&
                            //   quizsState[courseId][
                            //     courseStrings[0].locale_code
                            //   ] &&
                            //   quizsState[courseId][
                            //     courseStrings[0].locale_code
                            //   ][difficulty] &&
                            //   quizsState[courseId][
                            //     courseStrings[0].locale_code
                            //   ][difficulty].passed
                            // }
                            isQuiz
                          />
                          <span className="ph1">
                            {`${courses.length + j + 1}. ${t.quiz} ${t[difficultyStrings[difficulty - 1]]}`}
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
      </nav>
    </aside>
  )
}

export default Sidebar
