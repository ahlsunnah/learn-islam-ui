import Button from 'components/Button'
import Card from 'components/Card'
import {Link} from 'gatsby'
import scrollTo from 'lib/scrollTo'
import * as React from 'react'
import {withPropsOnChange} from 'recompose'
import {IQuizsTranslations} from '../../types/quizs'

const scrollToStart = () => scrollTo('quizs-start')

const assessment = ({average, t}: {average: number; t: IQuizsTranslations}) => {
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

interface Props {
  average: number
  coursePathname: string
  courseStrings: {
    title: string
  }
  finished: boolean
  lastScore?: number
  levelSubtitle: string
  next: {
    path: string
    title: string
    type: string
  }
  nextQuiz?: {
    path: string
    title: string
    type: string
  }
  restartQuizs: () => void
  started: boolean
  t: IQuizsTranslations
  totalQuestions?: number
}

class QuizHeader extends React.Component<Props> {
  restartQuizs = () => {
    const {restartQuizs} = this.props
    restartQuizs()
    scrollToStart()
  }

  render() {
    const {
      average,
      coursePathname,
      courseStrings: {title: courseTitle},
      finished,
      lastScore = 0,
      levelSubtitle,
      next,
      nextQuiz,
      restartQuizs,
      started,
      t,
      totalQuestions = 1,
    } = this.props
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
                  secondary
                >
                  {t.restartQuizs}
                </Button>
                {average < 15 && (
                  <Link to={coursePathname}>
                    <Button autoSize className="ma2 ph3 pointer b" secondary>
                      {t.backToCourse}
                    </Button>
                  </Link>
                )}
                {nextQuiz && (
                  <Link to={nextQuiz.path}>
                    <Button autoSize className="ma2 ph3 pointer b" secondary>
                      {`${t.takeExam}${t[nextQuiz.title]}`}
                    </Button>
                  </Link>
                )}
              </div>
              {average > 15 && next.type === 'course' && (
                <div className="ph3 ph4-l bt b--black-60 flex flex-column flex-row-l justify-center items-center tc">
                  <Link to={next.path}>
                    <Button autoSize className="ma2 ph3 pointer b" secondary>
                      {t.nextCourse}
                    </Button>
                  </Link>
                  ({next.title})
                </div>
              )}
              {average > 15 && next.type === 'tracks' && (
                <div className="ph3 ph4-l bt b--black-60 flex flex-column justify-center items-center f4">
                  <p>{`${t.congratulations} [${next.title}]`}</p>
                  <p>{t.congratulationsCTA}</p>
                  <Link to={next.path}>
                    <Button autoSize className="ma2 ph3 pointer b" secondary>
                      {t.goToTracks}
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-column flex-row-ns justify-between items-center tc">
              <Link to={coursePathname}>
                <Button className="ma2 ph3 pointer b" secondary>
                  {t.backToCourse}
                </Button>
              </Link>

              <Button
                className="ma2 ph3 pointer"
                secondary
                onClick={scrollToStart}
                raised
                rounded
              >
                {started ? t.continue : t.start}
              </Button>
              {started && (
                <Button className="ma2 ph3" onClick={restartQuizs} secondary>
                  {t.restartQuizs}
                </Button>
              )}
            </div>
          )}
        </Card>
      </div>
    )
  }
}

const enhance = withPropsOnChange(
  ['lastScore'],
  ({lastScore = 0, totalQuestions = 1}) => ({
    average: Math.round((lastScore * 40) / totalQuestions) / 2,
  }),
)

export default enhance(QuizHeader)
