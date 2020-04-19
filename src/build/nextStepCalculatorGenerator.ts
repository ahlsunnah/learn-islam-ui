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
    quiz_difficulties: {
      quiz_difficulties: number[]
    }
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
  quizDifficultyIndex,
}: {
  chapterIndex?: number
  locale: Locale
  localePath: string
  quizDifficultyIndex?: number
}): INext => {
  const track = tracks[trackIndex]
  const { courses, slug: trackSlug } = track
  const course = courses[courseIndex]
  const {
    chapters,
    slug: courseSlug,
    quiz_difficulties: { quiz_difficulties },
  } = course

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

  if (
    quiz_difficulties.length &&
    (quizDifficultyIndex === undefined || quizDifficultyIndex + 1 < quiz_difficulties.length)
  ) {
    // next step is a quiz in the same course
    let nextQuizDifficulty
    if (quizDifficultyIndex === undefined) {
      nextQuizDifficulty = quiz_difficulties[0]
    } else {
      nextQuizDifficulty = quiz_difficulties[quizDifficultyIndex + 1]
    }
    return {
      type: 'quiz',
      path: `${localePath}${trackSlug}/${courseSlug}/ikhtibar-${nextQuizDifficulty}/`,
      title: nextQuizDifficulty.toString(),
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
    } else {
      if (nextCourse.quiz_difficulties.quiz_difficulties.length === 0) {
        throw new Error('A course should have at least a chapter or a quiz')
      }
      // next step is the first quiz of the course
      const difficulty = nextCourse.quiz_difficulties.quiz_difficulties[0]
      return {
        type: 'quiz',
        path: `${localePath}${trackSlug}/${nextCourse.slug}/ikhtibar-${difficulty}/`,
        title: difficulty.toString(),
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
    } else {
      if (nextCourse.quiz_difficulties.quiz_difficulties.length === 0) {
        throw new Error('A course should have at least a chapter or a quiz')
      }
      // next step is the first quiz of the track
      const difficulty = nextCourse.quiz_difficulties.quiz_difficulties[0]
      return {
        type: 'quiz',
        path: `${localePath}${nextTrack.slug}/${nextCourse.slug}/ikhtibar-${difficulty}/`,
        title: difficulty.toString(),
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
