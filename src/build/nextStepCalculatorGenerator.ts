// TODO: handle steps that don't have translations
import { Locale } from '../types/index'
import { INext } from '../types/chapter'
import { TMadrassahPageQueryQuery } from '../graphqlTypes'

export interface INextStepTrack {
  id: string
  slug: string
  courses: {
    id: string
    slug: string
    chapters?: {
      id: string
      slug: string
      translations: {
        id: string
        locale: string
        title: string
      }
    }
  }
}

const nextStepCalculatorGenerator = (tracks: TMadrassahPageQueryQuery['api']['tracks']): Function => (
  trackIndex: number
): Function => (courseIndex: number): Function => ({
  chapterIndex,
  locale,
  localePath,
}: {
  chapterIndex?: number
  locale: Locale
  localePath: string
}): INext => {
  const track = tracks[trackIndex]
  const { courses, slug: trackSlug } = track
  const course = courses[courseIndex]
  const { chapters, slug: courseSlug } = course

  if (chapters && chapterIndex !== undefined && chapters.length > chapterIndex + 1) {
    // Next step is a chapter in the same course
    const nextChapter = chapters[chapterIndex + 1]
    const translation = nextChapter.translations.find(({ locale_code }): boolean => locale_code === locale)

    return {
      type: 'chapter',
      title: translation!.title,
      path: `${localePath}${trackSlug}/${courseSlug}/${nextChapter.slug}/`,
    }
  }

  if (courseIndex + 1 < courses.length) {
    const nextCourse = courses[courseIndex + 1]
    if (nextCourse.chapters && nextCourse.chapters.length) {
      // next step is the first chapter
      const nextChapter = nextCourse.chapters[0]
      const translation = nextChapter.translations.find(({ locale_code }): boolean => locale_code === locale)
      return {
        type: 'chapter',
        title: translation!.title,
        path: `${localePath}${trackSlug}/${nextCourse.slug}/${nextChapter.slug}/`,
      }
    }
  }

  if (
    trackIndex + 1 < tracks.length &&
    tracks[trackIndex + 1].courses.length > 0 // track with not course
  ) {
    const nextTrack = tracks[trackIndex + 1]
    const nextCourse = nextTrack.courses[0]
    if (nextCourse.chapters && nextCourse.chapters.length > 0) {
      const nextChapter = nextCourse.chapters[0]
      const translation = nextChapter.translations.find(({ locale_code }): boolean => locale_code === locale)
      return {
        type: 'chapter',
        title: translation!.title,
        path: `${localePath}${nextTrack.slug}/${nextCourse.slug}/${nextChapter.slug}/`,
      }
    }
  }

  return {
    type: 'tracks',
    path: `/`,
    title: 'tracks',
  }
}

export default nextStepCalculatorGenerator
