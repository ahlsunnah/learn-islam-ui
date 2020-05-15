import React, { useMemo } from 'react'
import Helmet from 'react-helmet'
import { TTrackPageTrackFragment } from '../../../graphqlTypes'
import { TrackInnerPageTrackFragment } from '../../../hasuraTypes'
import CoursesWrapper from './CoursesWrapper'
import TrackHeader from './TrackHeader'

type Props = {
  track: TTrackPageTrackFragment | TrackInnerPageTrackFragment
  nextCoursePath: string
}

const TrackComponent = ({ track, nextCoursePath }: Props) => {
  const trackDuration = useMemo(() => {
    let totalDuration = 0
    track.courses.forEach(({ chapters }) => {
      chapters.forEach(({ duration }) => {
        if (duration) totalDuration += duration
      })
    })
    return totalDuration
  }, [track.courses])

  // trackLevel is average of courses' levels
  const trackLevel = useMemo(() => {
    let total = 0
    track.courses.forEach(({ level }) => {
      total += level
    })
    return Math.round(total / track.courses.length)
  }, [track.courses])

  return (
    <div className="pb4 flex1 flex flex-column bg-light-gray">
      <Helmet title={track.translations[0].title} />
      <TrackHeader
        duration={trackDuration}
        level={trackLevel}
        nextCoursePath={nextCoursePath}
        trackTitle={track.translations[0].title}
      />
      <CoursesWrapper courses={track.courses} />
    </div>
  )
}

export default TrackComponent
