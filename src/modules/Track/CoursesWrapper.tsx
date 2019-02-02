import * as React from 'react'
import {connect} from 'react-redux'
import {ObjectOf, ObjectOfStrings} from 'interfaces'
import CourseCard from './CourseCard'
import {ITrackTranslations, ITrackTrack} from '../../types/track'

interface StateProps {
  chapters: ObjectOf<any>
  quizs: ObjectOf<ObjectOf<ObjectOf<ObjectOf<{passed: boolean}>>>>
}
interface ConnectProps {
  chaptersState: ObjectOf<any>
  quizsState: ObjectOf<ObjectOf<ObjectOf<ObjectOf<{passed: boolean}>>>>
}

interface Props {
  courses: ITrackTrack['courses']
  currentPath: string
  t: ITrackTranslations
}
class CoursesWrapper extends React.Component<Props & ConnectProps> {
  render() {
    const {chaptersState, courses, currentPath, quizsState, t} = this.props
    return (
      <div className="flex flex-column items-center">
        {courses.edges &&
          courses.edges
            .slice()
            .map(({node: course}) => (
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
