import React, { useMemo } from 'react'
import MultilineSelect from './MultilineSelect'
import _map from 'lodash/map'
import { QuestionProps } from '.'
import { useTranslation } from 'react-i18next'

const LinkTheSentences: React.FC<QuestionProps> = ({ number, question }) => {
  const { question: QuestionText, title, question_choices, id } = question

  const selectOptions = useMemo(() => {
    return _map(question_choices, (el) => ({ label: el.choice || '', value: `${el.id}` }))
  }, [question_choices])

  const { t } = useTranslation()

  const handleAnswer = (name: string, value: string | undefined) => {}

  return (
    <div>
      <div className="pb2 mb3 flex bb items-center">
        <div className="flex-no-shrink mr2 b">{number} -</div>
        <div className="f4 b">{title}</div>
      </div>
      <div className="mv0 f4">
        <div className="pb4">
          <div className="mt4">{QuestionText}</div>
          <MultilineSelect
            chooseAnswerString={t('chooseAnswer')}
            name={`question#${id}`}
            onChange={handleAnswer}
            options={selectOptions}
          />
        </div>
      </div>
    </div>
  )
}

export default LinkTheSentences
