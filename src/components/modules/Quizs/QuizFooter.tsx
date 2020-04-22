import Button from 'components/atoms/Button/Button'
import Card from 'components/atoms/Card/Card'
import scrollTo from 'lib/scrollTo'
import PropTypes from 'prop-types'
import React from 'react'
import ProgressWrapper from './ProgressWrapper'

const scrollToTop = () => scrollTo('quizs-top')

interface IProps {
  finished: boolean
  submit?: Function // TODO
  t: {
    goToTop: string
    progress: string
    seeYourScore: string
  }
  totalQuestions: number
}
const QuizFooter = ({ submit, t, totalQuestions }: IProps) => (
  <div>
    <Card className="ph4 pt4 pb45vh w-100 flex justify-center items-start">
      {/* {quizsState.finished ? (
        <Button className="f4 ph4 pv2 h-auto" onClick={scrollToTop} raised>
          {t.goToTop}
        </Button>
      ) : (
        <Button className="f4 ph4 pv2 h-auto" onClick={submit} raised>
          {t.seeYourScore}
        </Button>
      )} */}
      <Card className="fixed fixedChild bottom-0 right-0 h3 ph4 w-100 flex justify-center items-start raised-bottom">
        {/* <ProgressWrapper
          progressText={t.progress}
          quizsState={quizsState}
          totalQuestions={totalQuestions}
        /> */}
      </Card>
    </Card>
  </div>
)

export default QuizFooter
