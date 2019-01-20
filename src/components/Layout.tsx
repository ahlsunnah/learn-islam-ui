import React from 'react'
import {Global, css} from '@emotion/core'
import {ThemeProvider} from 'emotion-theming'
import Footer from 'components/Footer'
import 'normalize.css'
import 'styles/fonts.scss'
import 'styles/theme.scss'

interface Props {
  children: JSX.Element
}

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
  html {
    font-family: 'Open Sans', 'Noto Kufi Arabic', sans-serif;
  }
`

const Layout = ({children}: Props) => (
  <div className="mdc-typography">
    <Global styles={global} />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
    <Footer />
  </div>
)
export default Layout
