import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import { RadioGroup } from './../../../atoms/RadioGroup/RadioGroup'

import { QuestionProps } from '.'
import { useTranslation } from 'react-i18next'
import { Field } from 'formik'

const ChooseACategory: React.FC<QuestionProps> = ({ number, question }) => {
  const { t } = useTranslation()

  const { question: questionTitle, question_choices } = question

  return (
    <div>
      <div className="pb2 flex bb items-center">
        <div className="flex-no-shrink mr2 b">{number} - &nbsp;</div>
        <div className="f4 b">{t('chooseACategoryTitle')}</div>
      </div>
      <div className="mt3 f4">
        <div className="pb4 flex">
          <div>
            <div>{questionTitle}</div>
            <div className="mt1">
              <Field component={RadioGroup} name={`question#${question.id}`}>
                {question_choices.map(
                  (category): JSX.Element => (
                    <FormControlLabel
                      value={category.id}
                      key={category.id}
                      control={<Radio />}
                      label={category.choice as string}
                    />
                  )
                )}
              </Field>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseACategory
