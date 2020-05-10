import React from 'react'
import CourseCard from './CourseCard'
import { TTrackPageCourseFragment } from '../../../graphqlTypes'
import { useTranslation } from 'react-i18next'

interface IProps {
  courses: TTrackPageCourseFragment[]
  currentPath: string
}
const CoursesWrapper: React.FC<IProps> = ({ courses, currentPath }) => {
  const { t } = useTranslation()
  return (
    <div className="flex flex-column items-center">
      {courses.map((course) => (
        <CourseCard key={course.slug} {...course} currentPath={currentPath} t={t} />
      ))}
    </div>
  )
}

export default CoursesWrapper
