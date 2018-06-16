// @flow
import Button from 'components/Button'
import Card from 'components/Card'
import Link from 'gatsby-link'
import scrollTo from 'lib/scrollTo'
import * as React from 'react'
import {withPropsOnChange} from 'recompose'

const scrollToStart = () => scrollTo('quizs-start')

const Assessment = ({average, t}) => {
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

type Props = {
  average: number,
  chapterPathname: string,
  chapterStrings: {
    title: string,
  },
  finished: boolean,
  lastScore?: number,
  t: {
    average: string,
    assessmentFail: string,
    assessmentGood: string,
    assessmentPerfect: string,
    assessmentVeryGood: string,
    backToCourse: string,
    grade: string,
    quiz: string,
    restartQuizs: string,
    start: string,
    yourScore: string,
    yourLastScore: string,
  },
  totalQuestions?: number,
}

const QuizHeader = ({
  average,
  chapterPathname,
  chapterStrings: {title},
  finished,
  lastScore = 0,
  t,
  totalQuestions = 1,
}: Props) => (
  <div className="vh-100 flex justify-center items-center">
    <Card
      className="pv3 ph4 w-50-ns w-90 center flex flex-column justify-around items-center"
      rounded
    >
      <span className="f3">{t.quiz}</span>
      <h1 className="tc">{title}</h1>
      {finished ? (
        <div>
          {lastScore !== undefined && (
            <div className="mv3 f4">
              <div className="mv2">
                {t.yourScore}: {lastScore} / {totalQuestions}
              </div>

              <div className="mv2">
                {t.average}: {average} / 20
              </div>
              <div className="mv2">
                {t.grade}: <Assessment average={average} t={t} />
              </div>
            </div>
          )}
          <div className="flex flex-column flex-row-ns justify-between items-center tc">
            <Link to={chapterPathname}>
              <Button className="ma2 ph3 pointer b" secondary>
                {t.backToCourse}
              </Button>
            </Link>
            <Button className="ma2 ph3" secondary>
              {t.restartQuizs}
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-column flex-row-ns justify-between items-center tc">
          <Link to={chapterPathname}>
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
            {t.start}
          </Button>
        </div>
      )}
    </Card>
  </div>
)

const enhance = withPropsOnChange(
  ['lastScore'],
  ({lastScore = 0, totalQuestions = 1}) => ({
    average: Math.round(lastScore * 40 / totalQuestions) / 2,
  }),
)

export default enhance(QuizHeader)
