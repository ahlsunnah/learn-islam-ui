import React, { useState } from 'react'
import Card from 'components/atoms/Card/Card'
import Question from './Question'
import QuizFooter from './QuizFooter'
import QuizHeader from './QuizHeader'
import { QuestionContainerQuestionFragment } from '../../../hasuraTypes'
import { useTranslation } from 'react-i18next'
import { Locale } from 'types'

enum GameState {
  'not started' = 'not started',
  'started' = 'started',
  'finished' = 'finished',
}

export type QuizComponentProps = {
  courseStrings: {
    id: number
    title: string
  }
  questions: QuestionContainerQuestionFragment[]
}

const QuizForm: React.FC<QuizComponentProps> = ({ courseStrings, questions }) => {
  const [gameState, setGameState] = useState<GameState>(GameState['not started'])
  const { t, i18n } = useTranslation()
  const locale = i18n.language as Locale

  return (
    <div id="quizs-top" className="mdc-theme--primary-bg">
      <QuizHeader
        courseStrings={courseStrings}
        finished={false} // TODO
        lastScore={0} // TODO
        restartQuizs={() => undefined} // TODO
        started={true} // TODO
        t={t}
        totalQuestions={questions.length}
      />
      <div id="quizs-start">
        {questions.map((question, i) => {
          return (
            <Card key={question.id} className="mb5 pv4 ph4 w-60-l w-75-m w-100 center" rounded>
              <Question
                number={i + 1}
                finished={gameState === GameState.finished}
                t={t}
                locale={locale}
                question={question}
              />
            </Card>
          )
        })}
      </div>
      <QuizFooter
        submit={() => 'TODO'}
        finished={gameState === GameState.finished}
        totalQuestions={questions.length}
        t={t}
      />
    </div>
  )
}

export default QuizForm
