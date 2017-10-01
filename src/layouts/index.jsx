import React from 'react'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'
import 'tachyons' // eslint-disable-line

const MainWrapper = ({children, location}) => {
  const lang = location.pathname.includes('/fr/') ? 'fr-FR' : 'ar'
  console.log(lang)
  return <div>{children()}</div>
}

MainWrapper.propTypes = {
  children: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
}

export default MainWrapper
