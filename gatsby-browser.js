/* eslint react/jsx-filename-extension: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import Layout from './src/components/Layout'
import { AuthContext, useAuth } from './src/services/auth'

export const wrapPageElement = ({ element }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <AuthContext.Provider value={{ useAuth }}>
      <Layout>{element}</Layout>
    </AuthContext.Provider>
  )
}
wrapPageElement.propTypes = {
  element: PropTypes.node.isRequired,
}
