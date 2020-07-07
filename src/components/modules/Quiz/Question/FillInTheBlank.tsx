import React from 'react'
import SelectInput from './SelectInput'
import { QuestionProps } from '.'
import { useTranslation } from 'react-i18next'

// Values to be lifted to the form state:
// the question_choice_id, user_id, order

function FillInTheBlank(props: QuestionProps) {
  const {
    number,
    question: { question, question_choices: questionChoices, id: questionId },
  } = props
  const textParts = question.split('##')
  const { t } = useTranslation()

  return (
    <div>
      <div className="pb2 flex bb items-center">
        <div className="flex-no-shrink mr2 b">{number} -&nbsp;</div>
        <div className="f4 b">{t('fillInTheBlankTitle')}</div>
      </div>
      <div className="mt3 mb0 f4">
        {textParts.map((part: string, i: number) =>
          i === 0 ? (
            <span key={`part${i}`} className="lh1-75rem">
              {part}
            </span>
          ) : (
            <>
              <div className="dib" key={`value${i - 1}`}>
                <SelectInput index={i} name={`question#${questionId}.${i - 1}`} options={questionChoices} />
              </div>
              <span key={`part${i}`} className="lh1-75rem">
                {part}
              </span>
            </>
          )
        )}
      </div>
    </div>
  )
}

export default FillInTheBlank
