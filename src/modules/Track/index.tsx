import React from 'react'
import Helmet from 'react-helmet'
import {ObjectOfStrings, ObjectOf} from 'interfaces'
import CoursesWrapper from './CoursesWrapper'
import TrackHeader from './TrackHeader'
import TrackSidebar from './TrackSidebar'

interface Props {
  data: {
    otherLocaleTranslations: ObjectOfStrings
    track: ObjectOf<any>
    translations: ObjectOfStrings
  }
  pageContext: {
    locale: string
    localesPaths: ObjectOfStrings
    slug: string
  }
}

const TrackContainer = ({
  data: {otherLocaleTranslations, track, translations},
  pageContext,
}: Props) => {
  const {locale, localesPaths, slug} = pageContext
  const localePath = localesPaths[locale]
  const currentPath = `${localePath}${slug}`
  // TODO calculate next course with progress
  const nextCoursePath =
    track.courses[0] &&
    `${currentPath}/${track.courses[0].slug}/${track.courses[0].chapters[0] &&
      track.courses[0].chapters[0].slug}/`
  const trackDuration = track.courses.reduce(
    (acc: number, {chapters}: {chapters: Array<{duration: number}>}) =>
      acc + chapters.reduce((acc2, {duration}) => acc2 + duration, 0),
    0,
  )
  // trackLevel is average of courses' levels
  const trackLevel =
    track.courses.length &&
    Math.round(
      track.courses.reduce(
        (acc: number, {level}: {level: number}) => acc + level,
        0,
      ) / track.courses.length,
    )
  return (
    <div className="min-vh-100 flex">
      <TrackSidebar locale={locale} localePath={localePath} />
      <div className="pb4 flex1 flex flex-column bg-light-gray">
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
