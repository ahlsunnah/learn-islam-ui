import {Locale, IEdges} from '../types/index'
import {INext} from '../types/chapter'

export interface INextStepTrack {
  id: string
  slug: string
  translations: IEdges<{
    id: string
    locale: string
    title: string
  }>
  courseSet: IEdges<{
    id: string
    slug: string
    quizDifficulties: number[]
    translations: IEdges<{
      id: string
      locale: string
      title: string
    }>
    chapterSet: IEdges<{
      id: string
      slug: string
      translations: IEdges<{
        id: string
        locale: string
        title: string
      }>
    }>
  }>
}

const nextStepCalculatorGenerator = (
  tracks: IEdges<INextStepTrack>,
): Function => (trackIndex: number): Function => (
  courseIndex: number,
): Function => ({
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
  const track = tracks.edges[trackIndex].node
  const {courseSet, slug: trackSlug} = track
  const course = courseSet.edges[courseIndex].node
  const {chapterSet, slug: courseSlug, quizDifficulties} = course

  if (
    chapterIndex !== undefined &&
    chapterSet.edges.length > chapterIndex + 1
  ) {
    // Next step is a chapter in the same course
    const nextChapter = chapterSet.edges[chapterIndex + 1].node
    const translation = nextChapter.translations.edges.find(
      ({node}): boolean => node.locale === locale,
    )

    return {
      type: 'chapter',
      title: translation ? translation.node.title : undefined, // TODO: translate
      path: `${localePath}${trackSlug}/${courseSlug}/${nextChapter.slug}/`,
    }
  }

  if (
    quizDifficulties.length &&
    (quizDifficultyIndex === undefined ||
      quizDifficultyIndex + 1 < quizDifficulties.length)
  ) {
    // next step is a quiz in the same course
    let nextQuizDifficulty
    if (quizDifficultyIndex === undefined) {
      nextQuizDifficulty = quizDifficulties[0]
    } else {
      nextQuizDifficulty = quizDifficulties[quizDifficultyIndex + 1]
    }
    return {
      type: 'quiz',
      path: `${localePath}${trackSlug}/${courseSlug}/ikhtibar-${nextQuizDifficulty}/`,
    }
  }

  if (courseIndex + 1 < courseSet.edges.length) {
    const nextCourse = courseSet.edges[courseIndex + 1].node
    if (nextCourse.chapterSet.edges.length) {
      // next step is the first chapter
      const nextChapter = nextCourse.chapterSet.edges[0].node
      const translation = nextChapter.translations.edges.find(
        ({node}): boolean => node.locale === locale,
      )
      return {
        type: 'chapter',
        title: translation ? translation.node.title : undefined,
        path: `${localePath}${trackSlug}/${nextCourse.slug}/${
          nextChapter.slug
        }/`,
      }
    } else {
      if (nextCourse.quizDifficulties.length === 0) {
        throw new Error('A course should have at least a chapter or a quiz')
      }
      // next step is the first quiz of the course
      return {
        type: 'quiz',
        path: `${localePath}${trackSlug}/${nextCourse.slug}/ikhtibar-${
          nextCourse.quizDifficulties[0]
        }/`,
      }
    }
  }

  if (trackIndex + 1 < tracks.edges.length) {
    const nextTrack = tracks.edges[trackIndex + 1].node
    if (nextTrack.courseSet.edges.length === 0) {
      throw new Error('A track should have at least a course')
    }
    const nextCourse = nextTrack.courseSet.edges[0].node
    if (nextCourse.chapterSet.edges.length > 0) {
      const nextChapter = nextCourse.chapterSet.edges[0].node
      const translation = nextChapter.translations.edges.find(
        ({node}): boolean => node.locale === locale,
      )
      return {
        type: 'chapter',
        title: translation ? translation.node.title : undefined,
        path: `${localePath}${nextTrack.slug}/${nextCourse.slug}/${
          nextChapter.slug
        }/`,
      }
    } else {
      if (nextCourse.quizDifficulties.length === 0) {
        throw new Error('A course should have at least a chapter or a quiz')
      }
      // next step is the first quiz of the track
      return {
        type: 'quiz',
        path: `${localePath}${nextTrack.slug}/${nextCourse.slug}/ikhtibar-${
          nextCourse.quizDifficulties[0]
        }/`,
      }
    }
  }

  return {
    type: 'tracks',
    path: `/`,
  }
}

export default nextStepCalculatorGenerator
