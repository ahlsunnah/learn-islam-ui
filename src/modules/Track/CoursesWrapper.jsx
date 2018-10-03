// @flow
import * as React from 'react'
import CourseCard from './CourseCard'

type Props = {
  courses: Array<{
    slug: string,
  }>,
  currentPath: string,
  t: {},
}
const CoursesWrapper = ({courses, currentPath, t}: Props) => (
  <div className="flex flex-column items-center">
    {courses &&
      courses
        .slice()
        .sort((a, b) => a.order - b.order) // TODO: sort in the query ?
        .map((course) => (
          <CourseCard
            key={course.slug}
            {...course}
            currentPath={currentPath}
            t={t}
          />
        ))}
  </div>
)
export default CoursesWrapper
