import Button from 'components/Button'
import Card from 'components/Card'
import scrollTo from 'lib/scrollTo'
import React from 'react'
import {TQuizzesPageTranslationsFragment} from '../../graphqlTypes'
import {INext} from 'types/chapter'

const scrollToStart = (): void => {
  scrollTo('quizs-start')
}

const assessment = ({
  average,
  t,
}: {
  average: number
  t: TQuizzesPageTranslationsFragment
}): string => {
  if (average === 20) {
    return t.assessmentPerfect
  }
  if (average >= 18) {
    return t.assessmentVeryGood
  }
  if (average >= 15) {
    return t.assessmentGood
  }
  return t.assessmentFail
}

interface IProps {
  coursePathname: string
  courseStrings: {
    title: string
  }
  finished: boolean
  lastScore?: number
  levelSubtitle: string
  next: INext
  restartQuizs: () => void
  started: boolean
  t: TQuizzesPageTranslationsFragment
  totalQuestions?: number
}

const QuizHeader = (props: IProps): JSX.Element => {
  const {
    coursePathname,
    courseStrings: {title: courseTitle},
    finished,
    lastScore = 0,
    levelSubtitle,
    next,
    restartQuizs,
    started,
    t,
    totalQuestions = 1,
  } = props
  const average = Math.round((lastScore * 40) / totalQuestions) / 2
  return (
    <div className="vh-100 flex justify-center items-center">
      <Card
        className="pv3 w-50-ns w-90 center flex flex-column justify-around items-center"
        rounded
      >
        <span className="ph3 ph4-l f3">{t.quizTitle}</span>
        <h1 className="ph3 ph4-l mb2 tc">{courseTitle}</h1>
        <p className="ph3 ph4-l mb4">({levelSubtitle})</p>
        {finished ? (
          <div>
            {lastScore !== undefined && (
              <div className="ph3 ph4-l mv3 f4">
                <div className="mv2">
                  {t.yourScore}: {lastScore} / {totalQuestions}
                </div>

                <div className="mv2">
                  {t.average}: {average} / 20
                </div>
                <div className="mv2">
                  {t.grade}: {assessment({average, t})}
                </div>
              </div>
            )}
            <div className="ph3 ph4-l flex flex-column flex-row-l justify-between items-center tc">
              <Button
                autoSize
                className="ma2 ph3 b"
                onClick={restartQuizs}
                raised
              >
                {t.restartQuizs}
              </Button>
              {average < 15 && (
                <Button autoSize raised to={coursePathname}>
                  {t.backToCourse}
                </Button>
              )}
            </div>
            {average > 15 && next.type === 'course' && (
              <div className="ph3 ph4-l bt b--black-60 flex flex-column flex-row-l justify-center items-center tc">
                <Button
                  autoSize
                  className="ma2 ph3 pointer b"
                  raised
                  to={next.path}
                >
                  {t.nextCourse}
                </Button>
                ({next.title})
              </div>
            )}
            {average > 15 && next.type === 'tracks' && (
              <div className="ph3 ph4-l bt b--black-60 flex flex-column justify-center items-center f4">
                <p>{`${t.congratulations} [${next.title}]`}</p>
                <p>{t.congratulationsCTA}</p>
                <Button autoSize className="ma2 ph3 pointer b" to={next.path}>
                  {t.goToTracks}
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-column flex-row-ns justify-between items-center tc">
            <Button className="ma2 ph3 pointer b" raised to={coursePathname}>
              {t.backToCourse}
            </Button>

            <Button
              className="ma2 ph3 pointer"
              onClick={scrollToStart}
              raised
              rounded
            >
              {started ? t.continue : t.start}
            </Button>
            {started && (
              <Button className="ma2 ph3" onClick={restartQuizs} raised>
                {t.restartQuizs}
              </Button>
            )}
          </div>
        )}
      </Card>
    </div>
  )
}

export default QuizHeader
