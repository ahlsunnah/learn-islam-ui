// @flow
import Button from 'components/Button'
import PropTypes from 'prop-types'
import * as React from 'react'
import {
  compose,
  setPropTypes,
  withPropsOnChange,
  withStateHandlers,
} from 'recompose'
import StepContent from './StepContent'

type Props = {
  content: string,
  cta?: React.Node,
  title: string,
}
const Transcription = ({content, cta, title}: Props) => (
  <StepContent cta={cta} title={title} content={content} />
)

const enhance = compose(
  withStateHandlers(
    {showArabic: true},
    {
      toggleLanguage: ({showArabic}) => () => ({showArabic: !showArabic}),
    },
  ),
  setPropTypes({
    arabicContent: PropTypes.string.isRequired,
    currentLanguageCTA: PropTypes.string.isRequired,
    otherLanguageContent: PropTypes.string,
    otherLanguageCTA: PropTypes.string.isRequired,
    showArabic: PropTypes.bool.isRequired,
  }),
  // Create the change language component
  withPropsOnChange(
    ['showArabic'],
    ({
      arabicContent,
      currentLanguageCTA,
      otherLanguageContent,
      otherLanguageCTA,
      showArabic,
      toggleLanguage,
    }) => ({
      content: showArabic ? arabicContent : otherLanguageContent,
      cta: otherLanguageContent && (
        <div className="">
          <Button onClick={toggleLanguage}>
            {showArabic ? currentLanguageCTA : otherLanguageCTA}
          </Button>
        </div>
      ),
    }),
  ),
)
export default enhance(Transcription)
