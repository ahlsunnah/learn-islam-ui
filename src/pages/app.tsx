/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { Fragment, useContext } from 'react'
import { Router } from '@reach/router'
import _get from 'lodash/get'
import AppNavBar from '../components/molecules/AppNavBar/AppNavBar'
import CssBaseLine from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { AuthContext } from 'services/auth'
import Login from '../components/modules/Login/Login'
import Profile from 'components/modules/Profile/Profile'
import Tracks from 'components/modules/Tracks'

type LayoutContainerProps = {
  children: React.ReactChild
}

const LayoutContainer: React.FC<LayoutContainerProps> = ({ children }) => (
  <div
    sx={{
      mx: 'auto',
    }}
  >
    {children}
  </div>
)

const App = () => {
  const { user } = useContext(AuthContext)

  if (!user) return null

  const isAuthLoading = _get(user, 'authState.status') === 'loading'

  return (
    <Fragment>
      <CssBaseLine />
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
            <AppNavBar authUser={user.authUser} />
          </LayoutContainer>
        </header>
        <main
          sx={{
            width: '100%',
            flex: '1 1 auto',
            variant: 'layout.main',
          }}
        >
          <Container
            sx={{
              mt: 3,
            }}
            maxWidth="sm"
          >
            <Router basepath="/app">
              <Tracks path="/" />
              <Profile path="/profile" me={user.authUser} signOut={user.signOut} />
              <Login
                path="/login"
                signInWithEmailAndPwd={user.signInWithEmailAndPwd}
                authUser={user.authUser}
                addNewUser={user.addNewUser}
                isAuthLoading={isAuthLoading}
              />
            </Router>
          </Container>
        </main>
        <footer
          sx={{
            width: '100%',
            variant: 'layout.footer',
          }}
        ></footer>
      </div>
    </Fragment>
  )
}

export default App
