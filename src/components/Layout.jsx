import React from 'react'
import {Global, css} from '@emotion/core'
import {ThemeProvider} from 'emotion-theming'
import Footer from 'components/Footer'
import PropTypes from 'prop-types'
import 'styles/fonts.scss'
import 'styles/theme.scss'
import '@material/react-ripple'

const theme = {
  colors: {
    primary: '#0099CC',
    secondary: '#353535',
  },
  fonts: {
    secondary: "'Open Sans', 'Shahwan', sans-serif",
  },
}

const global = css`
  html,
  .mdc-button {
    font-family: 'Open Sans', 'Noto Kufi Arabic', sans-serif;
  }
`

const Layout = ({children}) => (
  <div className="mdc-typography">
    <Global styles={global} />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
    <Footer />
  </div>
)
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
