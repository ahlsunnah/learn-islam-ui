import { CheckboxWithLabel } from 'components/atoms/CheckBox/CheckBox'
import { Field } from 'formik'
import _shuffle from 'lodash/shuffle'
import React from 'react'
import type { QuestionProps } from '.'

const Choose: React.FC<QuestionProps> = ({ number, question }) => {
  const questionChoices = question.question_choices

  const text = question.question

  return (
    <div>
      <div className="flex">
        <div className="flex-no-shrink w2-5 b">{number} -</div>
        <div className="f4 b">{text}</div>
      </div>
      <div className="mt4">
        {_shuffle(questionChoices).map((value, index) => {
          return (
            <div className="mt2 flex items-center" key={index}>
              <Field
                name={`question#${value.question_id}.choice#${value.id}`}
                type="checkbox"
                component={CheckboxWithLabel}
                label={{ label: value.choice }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Choose
