import cx from 'classnames'
import Button from 'components/Button'
import shuffle from 'lib/shuffle'
import React, { useState } from 'react'
import ResultIndicator from './ResultIndicator'
import { QuizProps } from 'types/quizs'

interface IChooseData {
  text: string
  values: string[]
}

const Choose: React.FC<QuizProps> = ({ finished, number, t, id, locale, translations }) => {
  const data: IChooseData = translations[0].data
  const [values] = useState<string[]>(shuffle(data.values))
  const [answer, setAnswer] = useState<string | null>(null)
  const handleAnswer = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const text = e.currentTarget.innerText
    setAnswer(text)
  }
  const { text } = data
  const correctAnswer = data.values[0]
  const isAnswerCorrect = answer === correctAnswer
  return (
    <div>
      <div className="flex">
        <div className="flex-no-shrink w2-5 b">{number} -</div>
        <div className="f4 b">{text}</div>
      </div>
      <div className="mt4">
        {values.map((value, index) => {
          const isSelected = answer === value
          const isCorrectAnswer = value === correctAnswer
          return (
            <div className="mt2 flex items-center" key={index}>
              <ResultIndicator finished={finished} isCorrect={isAnswerCorrect} selected={isSelected} />
              <Button
                className={cx('pv2 h-auto lh-title tl', {
                  ph3: isSelected,
                })}
                raised={isSelected}
                greenOutlined={finished && isCorrectAnswer && !isSelected}
                outlined={!isSelected}
                onClick={handleAnswer}
                name={value}
              >
                {value}
              </Button>
            </div>
          )
        })}
      </div>
      {/* {finished &&
        (score ? (
          <div
            className={cx('mt3 green f3', {
              tl: locale === 'ar',
              tr: locale !== 'ar',
            })}
          >
            1/1
          </div>
        ) : (
          <div
            className={cx('mt3 green f3', {
              tl: locale === 'ar',
              tr: locale !== 'ar',
            })}
          >
            0/1
          </div>
        ))} */}
    </div>
  )
}

export default Choose
