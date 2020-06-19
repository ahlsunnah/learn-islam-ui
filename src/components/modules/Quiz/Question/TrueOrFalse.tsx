import cx from 'classnames'
import Button from 'components/atoms/Button/Button'
import React, { useState } from 'react'
import ResultIndicator from './ResultIndicator'
import { QuestionProps } from '.'

interface ITrueOrFalseData {
  text: string
  isTrue: boolean
}

const TrueOrFalse: React.FC<QuestionProps> = ({ finished, number, t, quiz: { translations } }) => {
  const { text, isTrue }: ITrueOrFalseData = translations[0].data
  const [answer, setAnswer] = useState<boolean>()
  const handleAnswer = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => {
    const { name } = e.currentTarget
    setAnswer(name === 'true')
  }
  return (
    <div>
      <div className="flex">
        <div className="flex-no-shrink w2-5 b">{number} -</div>
        <div className="f4 b">{text}</div>
      </div>
      <div className="mt4 flex justify-between">
        <div>
          <div className="mt2">
            <ResultIndicator finished={finished} isCorrect={isTrue} selected={answer === true} />
            <Button
              greenOutlined={finished && isTrue && answer !== true}
              name="true"
              onClick={handleAnswer}
              rounded
              raised={answer === true}
              outlined={answer !== true}
            >
              {t('quizTrue')}
            </Button>
          </div>
          <div className="mt2">
            <ResultIndicator finished={finished} isCorrect={!isTrue} selected={answer === false} />
            <Button
              className={cx({
                ph3: answer === false,
              })}
              greenOutlined={finished && !isTrue && answer !== false}
              name="false"
              onClick={handleAnswer}
              rounded
              raised={answer === false}
              outlined={answer !== false}
            >
              {t('quizFalse')}
            </Button>
          </div>
        </div>
        {/* {finished &&
          (score ? (
            <div
              className={cx('self-end green f3', {
                tl: locale === 'ar',
                tr: locale !== 'ar',
              })}
            >
              1/1
            </div>
          ) : (
            <div
              className={cx('self-end green f3', {
                tl: locale === 'ar',
                tr: locale !== 'ar',
              })}
            >
              0/1
            </div>
          ))} */}
      </div>
    </div>
  )
}

export default TrueOrFalse
