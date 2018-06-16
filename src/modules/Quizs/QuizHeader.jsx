// @flow
import Button from 'components/Button'
import Card from 'components/Card'
import scrollTo from 'lib/scrollTo'
import * as React from 'react'

const scrollToStart = () => scrollTo('quizs-start')

type Props = {
  t: {
    quiz: string,
    start: string,
  },
  title: string,
}

const QuizHeader = ({t, title}: Props) => (
  <div className="vh-100 flex justify-center items-center">
    <Card
      className="pv3 ph4 w-50-ns w-90 center flex flex-column justify-around items-center tc"
      rounded
    >
      <span className="f3">{t.quiz}</span>
      <h1>{title}</h1>
      <div>
        <Button onClick={scrollToStart} raised rounded>
          {t.start}
        </Button>
      </div>
    </Card>
  </div>
)
export default QuizHeader
