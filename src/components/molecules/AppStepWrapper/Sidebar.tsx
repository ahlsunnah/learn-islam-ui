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
import { useAllChaptersStates, ChapterStates } from 'hooks/useChapterState'
import { useTranslation } from 'react-i18next'
import useTrackNavigationQuery from 'hooks/useTrackNavigationQuery'
import useParsedParams from 'hooks/useParsedParams'

type Props = {}

const DEFAULT_TRACK_ID = 1
const DEFAULT_CHAPTER_ID = 1

const Sidebar: React.FC<Props> = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const trackPath = _dropRight(location.pathname.split('/'), 2).join('/')

  const { trackId, chapterId } = useParsedParams()
  if (!trackId) console.error(`trackId is not defined`)
  if (!chapterId) console.error(`chapterId is not defined`)

  const goBackToTracks: string = _get(location, 'state.coursePage.pathname')

  const [allChaptersStates] = useAllChaptersStates()
  const { data, loading, error } = useTrackNavigationQuery(trackId || DEFAULT_TRACK_ID)

  if (loading) {
    return <div>Loading</div>
  }
  if (error || !data || !data.track) {
    return <div>An error Ocurred</div>
  }
  const { track } = data
  const { courses } = track
  const currentCourse = courses.find((course) => {
    return course.chapters.some((chapter) => chapter.id === (chapterId || DEFAULT_CHAPTER_ID))
  })
  const currentCourseId = currentCourse?.id

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
          ({ chapters, id: courseId, translations: courseStrings }): JSX.Element => {
            return (
              <div key={courseId} className="pv2 bt b--black">
                <div
                  className={cx('ph4 pv2 flex items-center moon-gray b', {
                    'white b': currentCourseId === courseId,
                  })}
                >
                  <span className="ph1">{courseStrings[0].title}</span>
                </div>
                {chapters &&
                  chapters.map(
                    ({ id: chapterId, translations: chapterStrings }, j): JSX.Element => (
                      <Link
                        key={`${courseId}-${chapterId}`}
                        activeClassName="white b"
                        className="ph1 pv2 flex items-center moon-gray no-underline"
                        to={`${trackPath}/chapter/${chapterId}`}
                      >
                        <ChapterCursor
                          className="h2 ph1"
                          isComplete={allChaptersStates[chapterId] === ChapterStates.completed}
                        />
                        <span className="ph1">
                          {j + 1}. {chapterStrings[0].title}
                        </span>
                      </Link>
                    )
                  )}

                <Link
                  activeClassName="white b"
                  className="ph1 pv2 flex items-center moon-gray no-underline"
                  to={`${trackPath}/quiz/${courseId}`}
                >
                  <ChapterCursor className="h2 ph1" isQuiz />
                  <span className="ph1">{t('quiz')}</span>
                </Link>
              </div>
            )
          }
        )}
      </div>
    </Fragment>
  )
}

export default Sidebar
