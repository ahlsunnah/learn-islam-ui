/** @jsx jsx */
import { jsx } from 'theme-ui'
import AppNavBar from '../components/molecules/AppNavBar/AppNavBar'
import { Router } from '@reach/router'

type LayoutContainerProps = {
  children: React.ReactChild
}
const LayoutContainer: React.FC<LayoutContainerProps> = ({ children }) => (
  <div
    sx={{
      maxWidth: 'container',
      mx: 'auto',
      px: 3,
    }}
  >
    {children}
  </div>
)

const App = () => (
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      variant: 'layout.root',
    }}
  >
    <header
      sx={{
        width: '100%',
        variant: 'layout.header',
      }}
    >
      <LayoutContainer>
        <AppNavBar />
      </LayoutContainer>
    </header>
    <main
      sx={{
        width: '100%',
        flex: '1 1 auto',
        variant: 'layout.main',
      }}
    >
      <LayoutContainer>hello peaple</LayoutContainer>
    </main>
    <footer
      sx={{
        width: '100%',
        variant: 'layout.footer',
      }}
    >
      <LayoutContainer>Footer</LayoutContainer>
    </footer>
  </div>
)

export default App
