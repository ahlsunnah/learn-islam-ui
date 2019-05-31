/* eslint jsx-a11y/no-static-element-interactions: 0 */
// TODO fix https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
import cx from 'classnames'
import {Link} from 'gatsby'
import leftSvg from 'images/chevron-left.svg'
import getWindowWidth from 'lib/getWindowWidth'
import * as React from 'react'
import {connect} from 'react-redux'
import 'styles/drawer.scss'
import {ObjectOf} from 'interfaces'
import ChapterCursor from './ChapterCursor'

import {
  ISidebarTranslations,
  ISidebarTrack,
  IDawaSidebarTrack,
} from '../../types/sidebar'

interface IProps {
  currentCourseSlug: string
  track: ISidebarTrack | IDawaSidebarTrack
  isOpen: boolean
  toggleDrawer: () => void
  t: ISidebarTranslations
}

type TQuizState = ObjectOf<
  ObjectOf<
    ObjectOf<{
      passed: boolean
    }>
  >
>
interface IConnectReturn {
  chaptersState: ObjectOf<boolean>
  quizsState: TQuizState
}

class Sidebar extends React.Component<IProps & IConnectReturn> {
  private closeDrawerOnMobile = (): void => {
    const {toggleDrawer} = this.props
    // TODO: don't work, need to use redux for this, right now we don't have any animation
    if (getWindowWidth() < 800) {
      toggleDrawer()
    }
  }

  public render(): JSX.Element {
    const {
      chaptersState,
      currentCourseSlug,
      track,
      isOpen,
      quizsState,
      t,
    } = this.props

    const {courses} = track
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
          },
        )}
        style={{height: '100vh'}}
      >
        <nav>
          <header>
            <Link
              className="white no-underline"
              to={`${t.localePath}${track.slug}/`}
            >
              <div className="pv2 flex items-center">
                <img alt="" className="w2-5 rtl-rotate-180" src={leftSvg} />
                <div className="f4">
                  {track.translations.edges[0].node.title}
                </div>
              </div>
            </Link>
          </header>

          <div className="flex flex-column">
            {courses.edges.map(
              ({
                node: {
                  chapters,
                  id: courseId,
                  quizDifficulties,
                  slug: courseSlug,
                  translations: courseStrings,
                },
              }): JSX.Element => {
                return (
                  <div key={courseSlug} className="pv2 bt b--black">
                    <div
                      className={cx('ph4 pv2 flex items-center moon-gray b', {
                        'white b': currentCourseSlug === courseSlug,
                      })}
                    >
                      <span className="ph1">
                        {courseStrings.edges[0].node.title}
                      </span>
                    </div>
                    {chapters &&
                      chapters.edges.map(
                        (
                          {
                            node: {
                              id,
                              slug: chapterSlug,
                              translations: chapterStrings,
                            },
                          },
                          j,
                        ): JSX.Element => (
                          <Link
                            key={`${courseSlug}-${chapterSlug}`}
                            activeClassName="white b"
                            className="ph1 pv2 flex items-center moon-gray no-underline"
                            onClick={this.closeDrawerOnMobile}
                            to={`${t.localePath}${
                              track.slug
                            }/${courseSlug}/${chapterSlug}/`}
                          >
                            <ChapterCursor
                              className="h2 ph1"
                              isComplete={chaptersState[id]}
                            />
                            <span className="ph1">
                              {j + 1}. {chapterStrings.edges[0].node.title}
                            </span>
                          </Link>
                        ),
                      )}
                    {quizDifficulties.map(
                      (difficulty, j): JSX.Element => {
                        return (
                          <Link
                            key={`${courseSlug}-quiz${difficulty}`}
                            activeClassName="white b"
                            className="ph1 pv2 flex items-center moon-gray no-underline"
                            onClick={this.closeDrawerOnMobile}
                            to={`${t.localePath}${
                              track.slug
                            }/${courseSlug}/ikhtibar-${difficulty}/`}
                          >
                            <ChapterCursor
                              className="h2 ph1"
                              isComplete={
                                quizsState[courseId] &&
                                quizsState[courseId][
                                  courseStrings.edges[0].node.locale
                                ] &&
                                quizsState[courseId][
                                  courseStrings.edges[0].node.locale
                                ][difficulty] &&
                                quizsState[courseId][
                                  courseStrings.edges[0].node.locale
                                ][difficulty].passed
                              }
                              isQuiz
                            />
                            <span className="ph1">
                              {`${courses.edges.length + j + 1}. ${t.quiz} ${
                                t[`difficulty${difficulty}`]
                              }`}
                            </span>
                          </Link>
                        )
                      },
                    )}
                  </div>
                )
              },
            )}
          </div>
        </nav>
      </aside>
    )
  }
}

interface IConnectState {
  chapters: ObjectOf<boolean>
  quizs: TQuizState
}

const enhance = connect(
  ({chapters, quizs}: IConnectState): IConnectReturn => ({
    chaptersState: chapters,
    quizsState: quizs || {},
  }),
)

export default enhance(Sidebar)
