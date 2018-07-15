// @flow
/* eslint jsx-a11y/no-static-element-interactions: 0 */
// TODO fix https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
import cx from 'classnames'
import Link from 'gatsby-link'
import leftSvg from 'images/chevron-left.svg'
import circleSvg from 'images/circle.svg'
import checkSvg from 'images/check.svg'
import starSvg from 'images/star.svg'
import getWindowWidth from 'lib/getWindowWidth'
import * as React from 'react'
import {compose, withHandlers, withPropsOnChange} from 'recompose'
import 'styles/drawer.scss'

type Props = {
  closeDrawerOnMobile: Function,
  course: {
    slug: string,
    track: Object,
  },
  courses: Array<{
    order: number,
    slug: string,
    strings: Array<{
      locale: string,
      title: string,
    }>,
    chapters: Array<{
      slug: string,
      order: number,
      strings: Array<{
        locale: string,
        title: string,
      }>,
      // quizs?: Array<number>,
    }>,
    quizs?: Array<number>,
  }>,
  isOpen: boolean,
  otherLocaleTranslations: {
    localeName: string,
    localePath: string,
  },
  toggleDrawer: Function,
  t: {
    localePath: string,
    quiz: string,
  },
}
const PersistentDrawer = ({
  closeDrawerOnMobile,
  course: {slug: currentCourseSlug, track},
  courses,
  isOpen,
  otherLocaleTranslations,
  t,
  toggleDrawer,
}: Props) => (
  <aside
    className={cx(
      'bg-custom-dark-blue flex-no-shrink transition-width overflow-hidden',
      {
        'w320px ': isOpen,
        w0: !isOpen,
      },
    )}
  >
    <nav className="">
      <header className="">
        <Link
          className="white no-underline"
          to={`${t.localePath}${track.slug}`}
        >
          <div className="pv2 flex items-center">
            <img alt="" className="w2-5" src={leftSvg} />
            <div className="f4">{track.strings[0].title}</div>
          </div>
        </Link>
      </header>

      <div className="flex flex-column">
        {courses.map(
          ({chapters, quizs, slug: courseSlug, strings: courseStrings}) => {
            // if (chapters.length === 1)
            //   return (
            //     <Link
            //       key={courseSlug}
            //       activeClassName="white b"
            //       className="ph1 pv2 flex items-center moon-gray no-underline"
            //       onClick={closeDrawerOnMobile}
            //       to={`${t.localePath}${track.slug}/${courseSlug}/${
            //         chapters[0].slug
            //       }`}
            //     >
            //       {/* <img alt="" className="h2 ph1" src={checkSvg} /> */}
            //       <img alt="" className="h2 ph1" src={circleSvg} />
            //       <span className="ph1">
            //         {i + 1}. {courseStrings[0].title}
            //       </span>
            //     </Link>
            //   )
            // TODO handle course with multiple chapters
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
                  ({slug: chapterSlug, strings: chapterStrings}, j) => (
                    <Link
                      key={`${courseSlug}-${chapterSlug}`}
                      activeClassName="white b"
                      className="ph1 pv2 flex items-center moon-gray no-underline"
                      onClick={closeDrawerOnMobile}
                      to={`${t.localePath}${
                        track.slug
                      }/${courseSlug}/${chapterSlug}`}
                    >
                      {/* <img alt="" className="h2 ph1" src={checkSvg} /> */}
                      <img alt="" className="h2 ph1" src={circleSvg} />
                      <span className="ph1">
                        {j + 1}. {chapterStrings[0].title}
                      </span>
                    </Link>
                  ),
                )}
                {quizs &&
                  quizs.map((difficulty, j) => (
                    <Link
                      key={`${courseSlug}-quiz${difficulty}`}
                      activeClassName="white b"
                      className="ph1 pv2 flex items-center moon-gray no-underline"
                      onClick={closeDrawerOnMobile}
                      to={`${t.localePath}${
                        track.slug
                      }/${courseSlug}/ikhtibar-${difficulty}`}
                    >
                      {/* <img alt="" className="h2 ph1" src={checkSvg} /> */}
                      <img alt="" className="h2 ph1" src={starSvg} />
                      <span className="ph1">
                        {`${courses.length + j + 1}. ${t.quiz} ${
                          t[`difficulty${difficulty}`]
                        }`}
                      </span>
                    </Link>
                  ))}
              </div>
            )
          },
        )}
      </div>
    </nav>
  </aside>
)

const enhance = compose(
  withPropsOnChange(['course'], ({course: {track}}) => ({
    courses: track.courses
      .map((course) => ({
        ...course,
        chapters: course.chapters.slice().sort((c1, c2) => c1.order - c2.order),
        quizs:
          course.quizs &&
          course.quizs
            .reduce((acc, {difficulty}) => {
              if (!acc.includes(difficulty)) acc.push(difficulty)
              return acc
            }, [])
            .sort(),
      }))
      .sort((c1, c2) => c1.order - c2.order),
  })),
  withHandlers({
    closeDrawerOnMobile: ({toggleDrawer}) => () => {
      // TODO: don't work, need to use redux for this, right now we don't have any animation
      if (getWindowWidth() < 800) {
        toggleDrawer()
      }
    },
  }),
)
export default enhance(PersistentDrawer)
