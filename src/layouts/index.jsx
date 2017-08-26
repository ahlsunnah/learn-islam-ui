import React from 'react'
import PropTypes from 'prop-types'

const MainWrapper = ({children}) => {
  return (
    <div>
      {children()}
    </div>
  )
}

MainWrapper.propTypes = {
  children: PropTypes.func.isRequired,
}

export default MainWrapper
