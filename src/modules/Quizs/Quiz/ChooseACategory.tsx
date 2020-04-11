import cx from 'classnames'
import shuffle from 'lib/shuffle'
import React, {useState} from 'react'
import RadioButton from './RadioButton'
import ResultIndicator from './ResultIndicator'
import {QuizProps} from 'types/quizs'

interface IChooseACategoryData {
  values: Array<{
    name: string
    items: string[]
  }>
}

const ChooseACategory: React.FC<QuizProps> = ({
  finished,
  number,
  t: {chooseACategoryTitle},
  id,
  locale,
  translations,
}) => {
  const data: IChooseACategoryData = translations[0].data
  const categories = data.values.map(({name}) => name)
  const itemsDictionary = data.values.reduce<{
    [item: string]: string
  }>((acc, {name, items}) => {
    items.forEach((value) => {
      acc[value] = name
    })
    return acc
  }, {})
  const [shuffledItems] = useState<string[]>(
    shuffle(Object.keys(itemsDictionary)),
  )
  const [answersDictionary, setAnswersDictionary] = useState<{
    [item: string]: string
  }>({})
  const handleAnswer = (e: React.FormEvent<HTMLInputElement>) => {
    const {value: category, name: item} = e.currentTarget
    setAnswersDictionary({
      ...answersDictionary,
      [item]: category,
    })
  }
  return (
    <div>
      <div className="pb2 flex bb items-center">
        <div className="flex-no-shrink mr2 b">{number} - &nbsp;</div>
        <div className="f4 b">{chooseACategoryTitle}</div>
      </div>
      <div className="mt3 f4">
        {shuffledItems.map(
          (item): JSX.Element => {
            const currentAnswer = answersDictionary[item]
            const isCorrect = currentAnswer === itemsDictionary[item]

            return (
              <div className="pb4 flex" key={item}>
                <ResultIndicator
                  finished={finished}
                  isCorrect={isCorrect}
                  selected={currentAnswer !== undefined}
                />
                <div>
                  <div>{item}</div>
                  <div className="mt1">
                    {categories.map(
                      (category, categoryIndex): JSX.Element => {
                        const isCurrentAnswer = currentAnswer === category
                        const isCorrectAnswer =
                          category === itemsDictionary[item]
                        return (
                          <RadioButton
                            key={categoryIndex}
                            checked={isCurrentAnswer}
                            error={finished && !isCorrect && isCurrentAnswer}
                            greenChecked={
                              finished && !isCorrect && isCorrectAnswer
                            }
                            id={`radio${category}-${item}`}
                            name={item}
                            onChange={handleAnswer}
                            value={category}
                          >
                            {category}
                          </RadioButton>
                        )
                      },
                    )}
                  </div>
                </div>
              </div>
            )
          },
        )}
      </div>
      {/* {finished && (
        <div
          className={cx('mt3 f3', {
            tl: locale === 'ar',
            tr: locale !== 'ar',
            green: score > itemsOrder.length / 2,
            red: score <= itemsOrder.length / 2,
          })}
        >
          {score}/{itemsOrder.length}
        </div>
      )} */}
    </div>
  )
}

export default ChooseACategory
