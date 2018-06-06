// @flow
import React from 'react'
import 'styles/custom.scss'
import 'tachyons/css/tachyons.min.css'

const Footer = () =>
  process.env.NODE_ENV === 'production' ? null : (
    <link
      rel="stylesheet"
      href="https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css"
    />
  )
export default Footer
