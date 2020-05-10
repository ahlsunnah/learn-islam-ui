import firebase from 'firebase/app'
import axios from 'axios'

import 'firebase/auth'
import { useState, useCallback, useEffect, createContext } from 'react'

export type FirebaseUser = firebase.User | null | undefined

type ContextType = {
  user: UseAuth | null
}

type AuthState = {
  status: 'loading' | 'in' | 'out'
}

export type UseAuth = {
  authState: AuthState
  addNewUser: (email: string, pwd: string) => Promise<void>
  signInWithEmailAndPwdAndCookie: (email: string, pwd: string) => Promise<void>
  signInWithEmailAndPwd: (email: string, pwd: string) => Promise<void>
  signInWithGoogle: () => Promise<void>
  signOut: () => Promise<void>
  authUser: FirebaseUser
}

export const AuthContext = createContext<ContextType>({ user: null })

// TODO: set this if you want to manage session cookies
// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)

const googleProvider = new firebase.auth.GoogleAuthProvider()

export function useAuth(): UseAuth {
  const [authUser, setAuthUser] = useState<FirebaseUser>(undefined)

  useEffect(() => {
    firebase.initializeApp({
      apiKey: process.env.GATSBY_WEB_FIREBASE_API_KEY,
      authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
    })

    setAuthUser(JSON.parse(localStorage.getItem('authUser') as string))
  }, [])

  const [authState, setAuthState] = useState<AuthState>({ status: 'loading' })

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(
      async (user) => {
        if (user) {
          localStorage.setItem('authUser', JSON.stringify(user))
          setAuthUser(user)
        }
      },
      () => {
        localStorage.removeItem('authUser')
        setAuthUser(null)
      }
    )
  }, [])

  const signInWithGoogle = useCallback(async () => {
    try {
      const result = await firebase.auth().signInWithPopup(googleProvider)
      const idToken = await result.user?.getIdToken()

      setAuthState({ status: 'loading' })
      // call the backend to add custom claims
      await axios.post(`${process.env.GATSBY_AUTH_API}/auth/sessionLogin`, { idToken })

      setAuthState({ status: 'in' })
    } catch (error) {
      console.log(error)
    }
  }, [setAuthState])

  const signInWithEmailAndPwdAndCookie = useCallback(
    async (email, pwd) => {
      try {
        const user = await firebase.auth().signInWithEmailAndPassword(email, pwd)

        const idToken = await user.user?.getIdToken()

        setAuthState({ status: 'loading' })

        await axios.post(`${process.env.GATSBY_AUTH_API}/auth/sessionLogin`, { idToken })

        setAuthState({ status: 'in' })
      } catch (err) {
        console.log(err)
      }
    },
    [setAuthState]
  )

  const signInWithEmailAndPwd = useCallback(
    async (email, pwd) => {
      setAuthState({ status: 'loading' })

      await firebase.auth().signInWithEmailAndPassword(email, pwd)

      setAuthState({ status: 'in' })
    },
    [setAuthState]
  )

  const addNewUser = useCallback(async (email, pwd) => {
    await axios.post(`${process.env.GATSBY_AUTH_API}/auth/addNewUser`, { email, password: pwd })
  }, [])

  const signOut = async () => {
    try {
      setAuthState({ status: 'loading' })

      localStorage.removeItem('authUser')
      setAuthUser(undefined)
      await firebase.auth().signOut()

      setAuthState({ status: 'out' })
    } catch (error) {
      console.log(error)
    }
  }

  return {
    authState,
    addNewUser,
    signInWithEmailAndPwdAndCookie,
    signInWithEmailAndPwd,
    signInWithGoogle,
    signOut,
    authUser,
  }
}
