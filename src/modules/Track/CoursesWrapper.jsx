// @flow
import * as React from 'react'
import {connect} from 'react-redux'
import CourseCard from './CourseCard'

type Props = {
  chaptersState: Object,
  courses: Array<{
    slug: string,
  }>,
  currentPath: string,
  quizsState: Object,
  t: {},
}
const CoursesWrapper = ({
  chaptersState,
  courses,
  currentPath,
  quizsState,
  t,
}: Props) => (
  <div className="flex flex-column items-center">
    {courses &&
      courses
        .slice()
        .sort((a, b) => a.order - b.order) // TODO: sort in the query ?
        .map((course) => (
          <CourseCard
            key={course.slug}
            {...course}
            chaptersState={chaptersState}
            quizsState={quizsState[course.id]}
            currentPath={currentPath}
            t={t}
          />
        ))}
  </div>
)

const enhance = connect(({chapters, quizs}) => ({
  chaptersState: chapters,
  quizsState: quizs,
}))
export default enhance(CoursesWrapper)
