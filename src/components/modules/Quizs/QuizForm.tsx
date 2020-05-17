import React, { useState } from 'react'
import Card from 'components/atoms/Card/Card'
import Quiz from './Quiz'
import QuizFooter from './QuizFooter'
import QuizHeader from './QuizHeader'
import { TQuizzesPageTranslationsFragment, TQuizzesPageQuizFragment } from '../../../graphqlTypes'
import { INext } from 'types/chapter'
import { IParams } from 'types/quizs'

enum GameState {
  'not started' = 'not started',
  'started' = 'started',
  'finished' = 'finished',
}

interface QuizFormProps {
  coursePathname: string
  courseStrings: {
    id: number
    title: string
  }
  params: IParams
  levelSubtitle: string
  next: INext
  quizzes: TQuizzesPageQuizFragment[]
  t: TQuizzesPageTranslationsFragment
}

export type QuizComponentProps = QuizFormProps

const QuizForm: React.FC<QuizComponentProps> = ({
  coursePathname,
  courseStrings,
  levelSubtitle,
  next,
  quizzes,
  t,
  params,
}) => {
  const [gameState, setGameState] = useState<GameState>(GameState['not started'])
  return (
    <div id="quizs-top">
      <QuizHeader
        coursePathname={coursePathname}
        courseStrings={courseStrings}
        finished={false} // TODO
        lastScore={0} // TODO
        levelSubtitle={levelSubtitle}
        next={next}
        restartQuizs={() => undefined} // TODO
        started={true} // TODO
        t={t}
        totalQuestions={quizzes.length}
      />
      <div id="quizs-start">
        {quizzes.map((quiz, i) => {
          return (
            <Card key={quiz.id} className="mb5 pv4 ph4 w-60-l w-75-m w-100 center" rounded>
              <Quiz number={i + 1} finished={gameState === GameState.finished} t={t} locale={params.locale} {...quiz} />
            </Card>
          )
        })}
      </div>
      <QuizFooter finished={gameState === GameState.finished} totalQuestions={quizzes.length} t={t} />
    </div>
  )
}

export default QuizForm
