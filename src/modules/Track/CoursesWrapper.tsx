import * as React from 'react'
import {connect} from 'react-redux'
import {ObjectOf, ObjectOfStrings} from 'interfaces'
import CourseCard from './CourseCard'

interface StateProps {
  chapters: ObjectOf<any>
  quizs: ObjectOf<ObjectOf<ObjectOf<ObjectOf<{passed: boolean}>>>>
}
interface ConnectProps {
  chaptersState: ObjectOf<any>
  quizsState: ObjectOf<ObjectOf<ObjectOf<ObjectOf<{passed: boolean}>>>>
}

interface DispatchProps {}

interface Props {
  courses: Array<{
    id: string
    order: number
    slug: string
    chapters: Array<{
      id: string
      slug: string
    }>
    level: number
    strings: Array<{
      title: string
      description: string
    }>
    quizs: Array<{difficulty: number}>
    topic: {
      color: string
      strings: Array<{
        title: string
      }>
    }
  }>
  currentPath: string
  t: ObjectOfStrings
}
class CoursesWrapper extends React.Component<Props & ConnectProps> {
  render() {
    const {chaptersState, courses, currentPath, quizsState, t} = this.props
    return (
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
  }
}

const enhance = connect(({chapters, quizs}: StateProps) => ({
  chaptersState: chapters,
  quizsState: quizs,
}))

export default enhance(CoursesWrapper) as React.ComponentClass<Props>
