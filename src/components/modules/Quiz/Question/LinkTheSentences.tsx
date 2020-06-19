import cx from 'classnames'
import shuffle from 'lib/shuffle'
import React, { useState } from 'react'
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
const LinkTheSentences: React.FC<QuestionProps> = ({ finished, number, t, locale, quiz: { translations } }) => {
  const { title, values }: ILinkTheSentencesData = translations[0].data
  const valuesDictionary = values.reduce<{ [left: string]: string }>((acc, { a, b }) => {
    acc[a] = b
    return acc
  }, {})
  const [leftValues] = useState<string[]>(shuffle(Object.keys(valuesDictionary)))
  const rightValues = Object.values(valuesDictionary).sort()
  const [selectedValuesDictionary, setSelectedValuesDictionary] = useState<{
    [left: string]: string | undefined
  }>({})
  const handleAnswer = (name: string, value: string | undefined) => {
    setSelectedValuesDictionary({
      ...selectedValuesDictionary,
      [name]: value,
    })
  }
  const chosenValues = Object.values(selectedValuesDictionary)
  const remainingValues = rightValues.filter((rightValue) => !chosenValues.includes(rightValue))
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
      {/* {finished && (
        <div
          className={cx('mt3 f3', {
            tl: locale === 'ar',
            tr: locale !== 'ar',
            green: score > answers.length / 2,
            red: score <= answers.length / 2,
          })}
        >
          {score}/{answers.length}
        </div>
      )} */}
    </div>
  )
}

export default LinkTheSentences
