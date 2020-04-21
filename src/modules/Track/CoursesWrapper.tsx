import React from 'react'
import CourseCard from './CourseCard'
import { TTrackPageCourseFragment, TTrackPageTranslationsFragment } from '../../graphqlTypes'

interface IProps {
  courses: TTrackPageCourseFragment[]
  currentPath: string
  t: TTrackPageTranslationsFragment
}
class CoursesWrapper extends React.Component<IProps> {
  render() {
    const { courses, currentPath, t } = this.props
    return (
      <div className="flex flex-column items-center">
        {courses.map((course) => (
          <CourseCard key={course.slug} {...course} currentPath={currentPath} t={t} />
        ))}
      </div>
    )
  }
}

export default CoursesWrapper
