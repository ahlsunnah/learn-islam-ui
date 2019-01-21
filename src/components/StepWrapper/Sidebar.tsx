/* eslint jsx-a11y/no-static-element-interactions: 0 */
// TODO fix https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
import cx from 'classnames'
import {Link} from 'gatsby'
import leftSvg from 'images/chevron-left.svg'
import getWindowWidth from 'lib/getWindowWidth'
import * as React from 'react'
import {connect} from 'react-redux'
import 'styles/drawer.scss'
import {ObjectOf, ObjectOfStrings} from 'interfaces'
import ChapterCursor from './ChapterCursor'

interface Course {
  id: string
  order: number
  slug: string
  strings: Array<{
    locale: string
    title: string
  }>
  chapters: Array<{
    id: string
    slug: string
    order: number
    strings: Array<{
      locale: string
      title: string
    }>
    // quizs?: Array<number>,
  }>
  quizs?: Array<number>
}
interface Props {
  chaptersState: ObjectOf<boolean>
  course: {
    slug: string
    track: ObjectOf<any>
  }
  isOpen: boolean
  quizsState: ObjectOf<
    ObjectOf<
      ObjectOf<{
        passed: boolean
      }>
    >
  >
  toggleDrawer: () => void
  t: ObjectOfStrings
}

class Sidebar extends React.Component<Props> {
  closeDrawerOnMobile = () => {
    const {toggleDrawer} = this.props
    // TODO: don't work, need to use redux for this, right now we don't have any animation
    if (getWindowWidth() < 800) {
      toggleDrawer()
    }
  }

  render() {
    const {
      chaptersState,
      course: {slug: currentCourseSlug, track},
      isOpen,
      quizsState,
      t,
    } = this.props

    // TODO: memoize this:
    const courses: Course[] = track.courses
      .map((course: any) => ({
        ...course,
        chapters: course.chapters
          .slice()
          .sort((c1: any, c2: any) => c1.order - c2.order),
        quizs:
          course.quizs &&
          course.quizs
            .reduce((acc: any[], {difficulty}: {difficulty: number}) => {
              if (!acc.includes(difficulty)) acc.push(difficulty)
              return acc
            }, [])
            .sort(),
      }))
      .sort((c1: any, c2: any) => c1.order - c2.order)

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
              to={`${t.localePath}${track.slug}`}
            >
              <div className="pv2 flex items-center">
                <img alt="" className="w2-5 rtl-rotate-180" src={leftSvg} />
                <div className="f4">{track.strings[0].title}</div>
              </div>
            </Link>
          </header>

          <div className="flex flex-column">
            {courses.map(
              ({
                chapters,
                id: courseId,
                quizs,
                slug: courseSlug,
                strings: courseStrings,
              }) => {
                return (
                  <div key={courseSlug} className="pv2 bt b--black">
                    <div
                      className={cx('ph4 pv2 flex items-center moon-gray b', {
                        'white b': currentCourseSlug === courseSlug,
                      })}
                    >
                      <span className="ph1">{courseStrings[0].title}</span>
                    </div>
                    {chapters.map(
                      ({id, slug: chapterSlug, strings: chapterStrings}, j) => (
                        <Link
                          key={`${courseSlug}-${chapterSlug}`}
                          activeClassName="white b"
                          className="ph1 pv2 flex items-center moon-gray no-underline"
                          onClick={this.closeDrawerOnMobile}
                          to={`${t.localePath}${
                            track.slug
                          }/${courseSlug}/${chapterSlug}`}
                        >
                          <ChapterCursor
                            className="h2 ph1"
                            isComplete={chaptersState[id]}
                          />
                          <span className="ph1">
                            {j + 1}. {chapterStrings[0].title}
                          </span>
                        </Link>
                      ),
                    )}
                    {quizs &&
                      quizs.map((difficulty, j) => {
                        return (
                          <Link
                            key={`${courseSlug}-quiz${difficulty}`}
                            activeClassName="white b"
                            className="ph1 pv2 flex items-center moon-gray no-underline"
                            onClick={this.closeDrawerOnMobile}
                            to={`${t.localePath}${
                              track.slug
                            }/${courseSlug}/ikhtibar-${difficulty}`}
                          >
                            <ChapterCursor
                              className="h2 ph1"
                              isComplete={
                                quizsState[courseId] &&
                                quizsState[courseId][courseStrings[0].locale] &&
                                quizsState[courseId][courseStrings[0].locale][
                                  difficulty
                                ] &&
                                quizsState[courseId][courseStrings[0].locale][
                                  difficulty
                                ].passed
                              }
                              isQuiz
                            />
                            <span className="ph1">
                              {`${courses.length + j + 1}. ${t.quiz} ${
                                t[`difficulty${difficulty}`]
                              }`}
                            </span>
                          </Link>
                        )
                      })}
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

interface State {
  chapters: any
  quizs: any
}

const enhance = connect(({chapters, quizs}: State) => ({
  chaptersState: chapters,
  quizsState: quizs || {},
}))

export default enhance(Sidebar)
