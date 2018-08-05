// @flow
import cx from 'classnames'
import Button from 'components/Button'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import PropTypes from 'prop-types'
import * as React from 'react'
import {compose, setPropTypes, withHandlers, withStateHandlers} from 'recompose'

type Props = {
  enroll: string,
  handleChange: Function,
  handleSubmit: Function,
  homeEmailPlaceHolder: string,
  homeEmailTitle: string,
  message?: string,
  success?: boolean,
}

const HomeNewsletter = ({
  enroll,
  homeEmailPlaceHolder,
  homeEmailTitle,
  handleChange,
  handleSubmit,
  message,
  success,
}: Props) => (
  <section className="pv5 min-h-512-ns flex flex-column justify-center items-center mdc-theme--primary-bg">
    <div className="ph4 tc white">
      <h2>{homeEmailTitle}</h2>
    </div>
    <div className="relative flex flex-column flex-row-ns justify-around items-center">
      <input
        type="text"
        className="mh2 ph4 pv2 br-pill ba bw1 b--light-gray raised"
        onChange={handleChange}
        placeholder={homeEmailPlaceHolder}
      />
      {/* <label className="mdc-floating-label" htmlFor="newsletter-field">
          {homeEmailPlaceHolder}
        </label> */}
      <Button
        className="mt4 mt0-ns mh2 ph3 ph4-ns"
        onClick={handleSubmit}
        elevated
        inverse
      >
        {enroll}
      </Button>
      {message && (
        <div
          className={cx('absolute bottom--3 ph4 overflow-visible', {
            green: success,
            red: !success,
          })}
        >
          {message}
        </div>
      )}
    </div>
  </section>
)

const enhance = compose(
  withStateHandlers(
    {
      email: '',
    },
    {
      handleChange: () => (e) => ({email: e.target.value}),
      setSuccess: () => (success, message) => ({message, success}),
    },
  ),
  setPropTypes({
    newsletterEmailNotValid: PropTypes.string.isRequired,
    newsletterSubscribed: PropTypes.string.isRequired,
    newsletterSuccess: PropTypes.string.isRequired,
  }),
  withHandlers({
    handleSubmit: ({
      email,
      newsletterEmailNotValid,
      newsletterSubscribed,
      newsletterSuccess,
      setSuccess,
    }) => () => {
      try {
        addToMailchimp(email).then((callResult) => {
          const {msg, result} = callResult
          let message = msg
          if (msg.includes('already subscribed to list'))
            message = newsletterSubscribed
          else if (msg.includes('Thank you for subscribing!'))
            message = newsletterSuccess
          setSuccess(result === 'success', message)
        })
      } catch (e) {
        setSuccess(
          false,
          e.includes('email must be of type string and a valid email address')
            ? newsletterEmailNotValid
            : e,
        )
      }
    },
  }),
)
export default enhance(HomeNewsletter)
