import PropTypes from 'prop-types'
import {compose, lifecycle, setPropTypes} from 'recompose'

const addScoreWhenFinished = compose(
  setPropTypes({
    addScore: PropTypes.func.isRequired,
    score: PropTypes.number.isRequired,
  }),
  lifecycle({
    componentDidUpdate(prevProps) {
      if (
        prevProps.finished === false &&
        this.props.finished &&
        this.props.score
      ) {
        const {addScore, score} = this.props
        addScore(score)
      }
    },
  }),
)

export default addScoreWhenFinished
