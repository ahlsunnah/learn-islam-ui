/** @jsx jsx */
import { jsx } from 'theme-ui'
import Button from 'components/atoms/Button/Button'
import { useCallback, useState } from 'react'
import { QuestionProps } from '.'
import { useTranslation } from 'react-i18next'
import { useField } from 'formik'

const TrueOrFalse: React.FC<QuestionProps> = ({ number, question }) => {
  const text = question.question
  const { t } = useTranslation()

  const [buttonState, setButtonState] = useState<{ [key: string]: { bg: string } }>({
    true: { bg: 'primary_base' },
    false: { bg: 'primary_base' },
  })

  const [, , helper] = useField(`question#${question.id}`)

  const handleAnswer = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => {
      const { name } = e.currentTarget
      helper.setValue(name)

      setButtonState((st) => ({
        ...st,
        [name]: { bg: st[name].bg === 'success_base' ? 'primary_base' : 'success_base' },
        [`${!(name === 'true')}`]: { bg: 'primary_base' },
      }))
    },
    [helper]
  )

  return (
    <div>
      <div className="flex">
        <div className="flex-no-shrink w2-5 b">{number} -</div>
        <div className="f4 b">{text}</div>
      </div>
      <div className="mt4 flex justify-between">
        <div>
          <div className="mt2">
            <Button name="true" onClick={handleAnswer} rounded sx={buttonState.true}>
              {t('quizTrue')}
            </Button>
          </div>
          <div className="mt2">
            <Button name="false" onClick={handleAnswer} rounded sx={buttonState.false}>
              {t('quizFalse')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrueOrFalse
