import cx from 'classnames'
import React from 'react'
import ArrowForward from 'react-icons/lib/md/arrow-forward'
import Correct from 'react-icons/lib/md/check'
import Error from 'react-icons/lib/md/do-not-disturb-alt'
import MultilineSelect from './MultilineSelect'
import { QuestionProps } from '.'

interface ILinkTheSentencesData {
  title: string
  values: Array<{
    a: string
    b: string
  }>
}

const LinkTheSentences: React.FC<QuestionProps> = ({ number, question }) => {
  const { question: QuestionData } = question

  const handleAnswer = (name: string, value: string | undefined) => {}

  return (
    <div>
      <div className="pb2 mb3 flex bb items-center">
        <div className="flex-no-shrink mr2 b">{number} -</div>
        <div className="f4 b">{title}</div>
      </div>
      <div className="mv0 f4">
        {leftValues.map((leftValue, i) => {
          const rightValue = selectedValuesDictionary[leftValue]
          const correctValue = valuesDictionary[leftValue]
          const hasSelectedSomething = !!rightValue
          const isCorrect = hasSelectedSomething && correctValue === rightValue
          return (
            <div className="pb4" key={i}>
              {i !== 0 && <hr />}
              <div className="mt4">
                {i + 1}. {leftValue}
              </div>
              <div className="tc mb1 f2">
                {finished &&
                  hasSelectedSomething &&
                  (isCorrect ? <Correct className="dn-ns green" /> : <Error className="dn-ns red" />)}
                <ArrowForward
                  className={cx('moon-gray rotate-90 dib-ns', {
                    dn: finished && hasSelectedSomething,
                  })}
                />
              </div>
              <MultilineSelect
                correctAnswer={finished ? correctValue : ''}
                chooseAnswerString={t('chooseAnswer')}
                finished={finished}
                isRtl={locale === 'ar'}
                isCorrect={isCorrect}
                name={leftValue}
                onChange={handleAnswer}
                options={remainingValues}
                value={rightValue}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default LinkTheSentences
