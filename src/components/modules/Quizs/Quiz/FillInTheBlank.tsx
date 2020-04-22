import cx from 'classnames'
import React from 'react'
import SelectInput from './SelectInput'
import { QuizProps } from 'types/quizs'

interface IFillInTheBlankData {
  text: string
  values: string[]
}

type DisplayAnswerProps = {
  answer?: string
  answerIndex?: number
  index: number
  value: string
}
const DisplayAnswer = ({ answer, answerIndex, index, value }: DisplayAnswerProps) => {
  if (answerIndex === undefined) return <div className="green">{value}</div>
  if (answerIndex === index) return <div className="dark-blue">{value}</div>
  return (
    <div>
      <span className="dib dark-blue bt bw2 b--red lh0-9">{answer}</span> <div className="dib green">{value}</div>
    </div>
  )
}

interface IFillInTheBlankState {
  answers: string[]
  selectStyle?: React.CSSProperties
}

class FillInTheBlank extends React.PureComponent<QuizProps, IFillInTheBlankState> {
  state: IFillInTheBlankState = {
    answers: [],
    selectStyle: undefined,
  }

  myRefs: HTMLDivElement[] = []

  componentDidMount() {
    // We fix the width of selects so it does not change
    setTimeout(() => {
      const maxWidth = this.myRefs.reduce((max, ref) => {
        if (!ref) {
          return max
        }
        const width = ref.offsetWidth
        return width > max ? width : max
      }, 0)
      this.setState({ selectStyle: { width: maxWidth } })
    }, 2000)
  }

  setRef = (ref: HTMLDivElement, index: number) => {
    this.myRefs[index] = ref
  }
  handleAnswer = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.currentTarget
    const index = parseInt(name, 10)
    const newAnswers = this.state.answers.slice()
    newAnswers[index] = value
    this.setState({
      answers: newAnswers,
    })
  }

  render() {
    const {
      finished,
      number,
      translations,
      t: { fillInTheBlankTitle, locale },
    } = this.props
    const { answers, selectStyle } = this.state
    const { text, values }: IFillInTheBlankData = translations[0].data
    const textParts = text.split('##')
    const orderedValues = values.slice().sort()
    const remainingValues = orderedValues.filter((value) => !answers.includes(value))
    return (
      <div>
        <div className="pb2 flex bb items-center">
          <div className="flex-no-shrink mr2 b">{number} -&nbsp;</div>
          <div className="f4 b">{fillInTheBlankTitle}</div>
        </div>
        <div className="mt3 mb0 f4">
          {textParts.map((part, i) =>
            i === 0 ? (
              <span key={`part${i}`} className="lh1-75rem">
                {part}
              </span> // eslint-disable-line react/no-array-index-key
            ) : (
              [
                <div
                  className="dib"
                  key={`value${i - 1}`}
                  //   className="bg-light-green"
                >
                  {finished ? (
                    <DisplayAnswer answer={answers[i - 1]} index={i - 1} value={values[i - 1]} />
                  ) : (
                    <SelectInput
                      index={i}
                      name={(i - 1).toString()}
                      onChange={this.handleAnswer}
                      options={remainingValues}
                      setRef={this.setRef}
                      style={selectStyle}
                      value={answers[i - 1]}
                    />
                  )}
                </div>,
                <span key={`part${i}`} className="lh1-75rem">
                  {part}
                </span>, // eslint-disable-line react/no-array-index-key
              ]
            )
          )}
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
}

export default FillInTheBlank
