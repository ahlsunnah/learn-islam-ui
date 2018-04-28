// @flow
import React from 'react'
import Helmet from 'react-helmet'
import CoursesWrapper from './CoursesWrapper'
import TrackHeader from './TrackHeader'
import TrackSidebar from './TrackSidebar'

type Props = {
  data: {
    otherLocaleTranslations: {
      localePath: string,
    },
    track: {},
    translations: {},
  },
  pathContext: {
    locale: string,
    localesPaths: {
      [string]: string,
    },
    slug: string,
  },
}

const TrackContainer = ({
  data: {otherLocaleTranslations, track, translations},
  pathContext,
}: Props) => {
  const {locale, localesPaths, slug} = pathContext
  const localePath = localesPaths[locale]
  const currentPath = `${localePath}${slug}`
  // TODO calculate next course with progress
  const nextCoursePath =
    track.courses[0] &&
    `${currentPath}/${track.courses[0].slug}/${track.courses[0].chapters[0] &&
      track.courses[0].chapters[0].slug}`
  const trackDuration = track.courses.reduce(
    (acc, {chapters}) =>
      acc + chapters.reduce((acc2, {duration}) => acc2 + duration, 0),
    0,
  )
  // trackLevel is average of courses' levels
  const trackLevel =
    track.courses.length &&
    Math.round(
      track.courses.reduce((acc, {level}) => acc + level, 0) /
        track.courses.length,
    )
  return (
    <div className="min-vh-100 flex">
      <TrackSidebar localePath={localePath} />
      <div className="mt4 pt5 pb4 flex1 flex flex-column bg-light-gray">
        <Helmet title={track.strings[0].title} />
        <TrackHeader
          duration={trackDuration}
          level={trackLevel}
          nextCoursePath={nextCoursePath}
          otherLocaleName={otherLocaleTranslations.localeName}
          otherLocaleUrl={`${otherLocaleTranslations.localePath}${slug}`}
          t={translations}
          trackTitle={track.strings[0].title}
        />
        <CoursesWrapper
          courses={track.courses}
          currentPath={currentPath}
          t={translations}
        />
      </div>
    </div>
  )
}

export default TrackContainer
