/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import CourseCard from './CourseCard'
import { TTrackPageCourseFragment } from '../../../graphqlTypes'
import { useTranslation } from 'react-i18next'
import { useLocation } from '@reach/router'
import { TrackInnerPageCourseFragment } from '../../../hasuraTypes'

interface IProps {
  courses: Array<TTrackPageCourseFragment | TrackInnerPageCourseFragment>
}

const CoursesWrapper: React.FC<IProps> = ({ courses }) => {
  const location = useLocation()
  const { t } = useTranslation()
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} currentPath={location.pathname} t={t} />
      ))}
    </div>
  )
}

export default CoursesWrapper
