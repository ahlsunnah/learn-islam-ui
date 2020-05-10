/** @jsx jsx */
import { jsx } from 'theme-ui'
import cx from 'classnames'
import Button from 'components/atoms/Button/Button'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const HomeNewsletter = () => {
  const { t } = useTranslation()

  const [email, setEmail] = useState<string>('')
  const [result, setResult] = useState<{
    message: string
    success: boolean
  }>({ message: '', success: false })

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleSubmit = () => {
    try {
      addToMailchimp(email).then((callResult) => {
        const { msg, result } = callResult
        let message = msg
        if (msg.includes('already subscribed to list')) message = t('newsletterSubscribed')
        else if (msg.includes('Thank you for subscribing!')) message = t('newsletterSuccess')
        setResult({ success: result === 'success', message })
      })
    } catch (e) {
      setResult({
        success: false,
        message: e.includes('email must be of type string and a valid email address')
          ? t('newsletterEmailNotValid')
          : e,
      })
    }
  }

  return (
    <section className="pv5 min-h-512-ns flex flex-column justify-center items-center mdc-theme--primary-bg">
      <div className="ph4 tc white">
        <h2>{t('homeEmailTitle')}</h2>
      </div>
      <div className="relative flex flex-column flex-row-ns justify-around items-center">
        <input
          type="text"
          className="mh2 ph4 pv2 br-pill ba bw1 b--light-gray raised"
          onChange={handleChangeEmail}
          placeholder={t('homeEmailPlaceHolder')}
        />
        {/* <label className="mdc-floating-label" htmlFor="newsletter-field">
          {homeEmailPlaceHolder}
        </label> */}
        <Button
          className="mt4 mt0-ns mh2 ph3 ph4-ns"
          onClick={handleSubmit}
          elevated
          color="default"
          sx={{
            bg: '#fff',
          }}
        >
          {t('enroll')}
        </Button>
        {result.message && (
          <div
            className={cx('absolute bottom--3 ph4 overflow-visible', {
              green: result.success,
              red: !result.success,
            })}
          >
            {result.message}
          </div>
        )}
      </div>
    </section>
  )
}

export default HomeNewsletter
