import nextStepCalculatorGenerator from '../nextStepCalculatorGenerator'
import {data} from './fixtures/tracks-fixtures.json'

const {tracks} = data

test('last step is a chapter and it is not the last of the course', (): void => {
  const nextStepCalculatorWithTracks = nextStepCalculatorGenerator(tracks)
  const nextStepCalculatorWithTrack = nextStepCalculatorWithTracks(0)
  const nextStepCalculatorWithCourse = nextStepCalculatorWithTrack(0)

  expect(
    nextStepCalculatorWithCourse({
      chapterIndex: 0,
      locale: 'ar',
      localePath: '/',
    }),
  ).toMatchObject({
    type: 'chapter',
    title: 'توحيد الألوهية',
    path: '/iktichaf/tawhid/3ibada/',
  })
})

test('last step is the last of a chapter and there are quizzes', (): void => {
  const nextStepCalculatorWithTracks = nextStepCalculatorGenerator(tracks)
  const nextStepCalculatorWithTrack = nextStepCalculatorWithTracks(0)
  const nextStepCalculatorWithCourse = nextStepCalculatorWithTrack(0)

  expect(
    nextStepCalculatorWithTrack(1)({
      chapterIndex: 0,
      locale: 'ar',
      localePath: '/',
    }),
  ).toMatchObject({
    type: 'quiz',
    path: '/iktichaf/sira-annabiy/ikhtibar-1/',
  })
})

test('last step is a quiz and there are other quizzes', (): void => {
  const nextStepCalculatorWithTracks = nextStepCalculatorGenerator(tracks)
  const nextStepCalculatorWithTrack = nextStepCalculatorWithTracks(0)
  const nextStepCalculatorWithCourse = nextStepCalculatorWithTrack(0)

  expect(
    nextStepCalculatorWithTrack(1)({
      quizDifficultyIndex: 0,
      locale: 'ar',
      localePath: '/',
    }),
  ).toMatchObject({
    type: 'quiz',
    path: '/iktichaf/sira-annabiy/ikhtibar-2/',
  })
})

// In the same track (next course)
test('last quiz and there are no other quizzes in the course', (): void => {
  const nextStepCalculatorWithTracks = nextStepCalculatorGenerator(tracks)
  const nextStepCalculatorWithTrack = nextStepCalculatorWithTracks(0)
  const nextStepCalculatorWithCourse = nextStepCalculatorWithTrack(0)

  expect(
    nextStepCalculatorWithTrack(1)({
      quizDifficultyIndex: 1,
      locale: 'ar',
      localePath: '/',
    }),
  ).toMatchObject({
    type: 'chapter',
    title: 'القرآن الكريم',
    path: '/iktichaf/quran/quran/',
  })
})

test('last chapter of a course and there is no quiz in the course', (): void => {
  const nextStepCalculatorWithTracks = nextStepCalculatorGenerator(tracks)
  const nextStepCalculatorWithTrack = nextStepCalculatorWithTracks(0)
  const nextStepCalculatorWithCourse = nextStepCalculatorWithTrack(0)

  expect(
    nextStepCalculatorWithCourse({
      chapterIndex: 2,
      locale: 'ar',
      localePath: '/',
    }),
  ).toMatchObject({
    type: 'chapter',
    title: 'أهم أحداث سيرة النبي ﷺ',
    path: '/iktichaf/sira-annabiy/sira-annabiy/',
  })
})

test('last quiz of the last course of a track and next course have only quizzes', (): void => {
  const nextStepCalculatorWithTracks = nextStepCalculatorGenerator(tracks)

  expect(
    nextStepCalculatorWithTracks(1)(0)({
      quizDifficultyIndex: 0,
      locale: 'fr',
      localePath: '/fr/',
    }),
  ).toMatchObject({
    type: 'quiz',
    path: '/fr/mutawassit/track3-course1/ikhtibar-2/',
  })
})
test('last quiz of a track and next track starts with a chapter', (): void => {
  const nextStepCalculatorWithTracks = nextStepCalculatorGenerator(tracks)

  expect(
    nextStepCalculatorWithTracks(0)(2)({
      quizDifficultyIndex: 1,
      locale: 'fr',
      localePath: '/fr/',
    }),
  ).toMatchObject({
    type: 'chapter',
    path: '/fr/mubtadi/track2-course/track2-course-chapter1/',
  })
})
test('last quiz of a track and next track starts with a quiz (no chapter)', (): void => {
  const nextStepCalculatorWithTracks = nextStepCalculatorGenerator(tracks)

  expect(
    nextStepCalculatorWithTracks(1)(0)({
      quizDifficultyIndex: 1,
      locale: 'fr',
      localePath: '/fr/',
    }),
  ).toMatchObject({
    type: 'quiz',
    path: '/fr/mutawassit/track3-course1/ikhtibar-2/',
  })
})
