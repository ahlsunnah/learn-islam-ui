// @flow
import React from 'react'
import Link from 'gatsby-link'
import FaChevronLeft from 'react-icons/lib/fa/chevron-left'
import FaCircle from 'react-icons/lib/fa/circle'

type Props = {
  className: string,
  course: {
    chapter: Array<{
      order: number,
      slug: string,
      title: string,
    }>,
    slug: string,
    section: {
      slug: string,
      title: string,
    },
    title: string,
  },
  languagePath: string,
}
const ChapterSidebar = ({className = '', course, languagePath}: Props) => (
  <nav
    className={`fixed flex flex-column top-0 bottom-0 left-0 bg-light-gray overflow-hidden ${className}`}
  >
    <div className="pa3 bb b--gray">
      <Link to={`${languagePath}${course.section.slug}/`}>
        <div className="flex items-center">
          <FaChevronLeft className="mr3 f2" />
          <h3 className="f4">
            {course.section.title}:<br />
            {course.title}
          </h3>
        </div>
      </Link>
    </div>
    <div className="pa3">
      {course.chapter
        .slice()
        .sort((a, b) => a.order - b.order) // TODO: sort in the query ?
        .map((navChapter, i) => (
          <div key={navChapter.slug}>
            <Link
              className="flex items-center"
              to={`${languagePath}${course.section
                .slug}/${course.slug}/${navChapter.slug}/`}
            >
              <FaCircle className="mr3 f6" />
              <span className="f4">{`${i + 1}. ${navChapter.title}`}</span>
            </Link>
          </div>
        ))}
    </div>
  </nav>
)

export default ChapterSidebar
