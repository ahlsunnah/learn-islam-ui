import React from 'react'
import Helmet from 'react-helmet'
import CoursesWrapper from './CoursesWrapper'
import TrackHeader from './TrackHeader'
import TrackSidebar from './TrackSidebar'
import { ITrackPageProps } from '../../../types/track'

const TrackContainer = ({
  data: {
    otherLocaleTranslations,
    api: { track },
    translations,
  },
  pageContext,
}: ITrackPageProps) => {
  const { locale, localePaths, slug } = pageContext
  const localePath = localePaths[locale]
  const currentPath = `${localePath}${slug}`
  // TODO calculate next course with progress
  const nextCoursePath =
    track.courses[0] &&
    `${currentPath}/${track.courses[0].slug}/${track.courses[0].chapters[0] && track.courses[0].chapters[0].slug}/`
  const trackDuration = track.courses.reduce(
    (acc: number, { chapters }) => acc + chapters.reduce((acc2, { duration }) => acc2 + duration, 0),
    0
  )
  // trackLevel is average of courses' levels
  const trackLevel =
    track.courses.length &&
    Math.round(track.courses.reduce((acc: number, { level }) => acc + level, 0) / track.courses.length)
  return (
    <div className="min-vh-100 flex">
      <TrackSidebar locale={locale} localePath={localePath} />
      <div className="pb4 flex1 flex flex-column bg-light-gray">
        <Helmet title={track.translations[0].title} />
        <TrackHeader
          duration={trackDuration}
          level={trackLevel}
          nextCoursePath={nextCoursePath}
          otherLocaleName={otherLocaleTranslations.localeName}
          otherLocaleUrl={`${otherLocaleTranslations.localePath}${slug}`}
          t={translations}
          trackTitle={track.translations[0].title}
        />
        <CoursesWrapper courses={track.courses} currentPath={currentPath} t={translations} />
      </div>
    </div>
  )
}

export default TrackContainer
