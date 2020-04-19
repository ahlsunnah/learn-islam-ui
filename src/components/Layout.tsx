import React from 'react'
import Footer from 'components/Footer'
import { Styled, ThemeProvider } from 'theme-ui'
import theme from 'styles/theme'
import 'styles/fonts.scss'
import 'styles/theme.scss'
import '@material/react-ripple'
import { withTrans } from '../i18n/withTranslation'

type Props = {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Styled.root>
      {children}
      <Footer />
    </Styled.root>
  </ThemeProvider>
)

export default withTrans(Layout)
