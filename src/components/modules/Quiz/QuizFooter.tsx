import Button from 'components/atoms/Button/Button'
import Card from 'components/atoms/Card/Card'
import scrollTo from 'lib/scrollTo'
import React from 'react'
import ProgressWrapper from './ProgressWrapper'
import { TFunction } from 'i18next'

const scrollToTop = () => scrollTo('quizs-top')

interface IProps {
  finished: boolean
  submit: () => void // TODO
  t: TFunction
  totalQuestions: number
}
const QuizFooter = ({ finished, t, totalQuestions, submit }: IProps) => (
  <div>
    <Card className="ph4 pt4 pb45vh w-100 flex justify-center items-start">
      {finished ? (
        <Button className="f4 ph4 pv2 h-auto" onClick={scrollToTop} raised>
          {t('goToTop')}
        </Button>
      ) : (
        <Button className="f4 ph4 pv2 h-auto" onClick={submit} raised>
          {t('seeYourScore')}
        </Button>
      )}
      <Card className="fixed fixedChild bottom-0 right-0 h3 ph4 w-100 flex justify-center items-start raised-bottom">
        <ProgressWrapper
          progressText={t('progress')}
          percent={0} // TODO: progress
        />
      </Card>
    </Card>
  </div>
)

export default QuizFooter
