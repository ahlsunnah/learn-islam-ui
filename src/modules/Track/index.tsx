import React from 'react'
import Helmet from 'react-helmet'
import CoursesWrapper from './CoursesWrapper'
import TrackHeader from './TrackHeader'
import TrackSidebar from './TrackSidebar'
import {ITrackPageProps} from '../../types/track'

const TrackContainer = ({
  data: {
    otherLocaleTranslations,
    api: {track},
    translations,
  },
  pageContext,
}: ITrackPageProps) => {
  const {locale, localesPaths, slug} = pageContext
  const localePath = localesPaths[locale]
  console.log(localesPaths, localePath)
  const currentPath = `${localePath}${slug}`
  // TODO calculate next course with progress
  const nextCoursePath =
    track.courses.edges[0] &&
    `${currentPath}/${track.courses.edges[0].node.slug}/${track.courses.edges[0]
      .node.chapters.edges[0] &&
      track.courses.edges[0].node.chapters.edges[0].node.slug}/`
  const trackDuration = track.courses.edges.reduce(
    (acc: number, {node: {chapters}}) =>
      acc +
      chapters.edges.reduce((acc2, {node: {duration}}) => acc2 + duration, 0),
    0,
  )
  // trackLevel is average of courses' levels
  const trackLevel =
    track.courses.edges.length &&
    Math.round(
      track.courses.edges.reduce(
        (acc: number, {node: {level}}) => acc + level,
        0,
      ) / track.courses.edges.length,
    )
  return (
    <div className="min-vh-100 flex">
      <TrackSidebar locale={locale} localePath={localePath} />
      <div className="pb4 flex1 flex flex-column bg-light-gray">
        <Helmet title={track.translations.edges[0].node.title} />
        <TrackHeader
          duration={trackDuration}
          level={trackLevel}
          nextCoursePath={nextCoursePath}
          otherLocaleName={otherLocaleTranslations.localeName}
          otherLocaleUrl={`${otherLocaleTranslations.localePath}${slug}`}
          t={translations}
          trackTitle={track.translations.edges[0].node.title}
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
