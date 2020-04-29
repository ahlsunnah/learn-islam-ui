import firebase from 'firebase/app'
import axios from 'axios'

import 'firebase/auth'
import { useState, useCallback, useEffect, createContext } from 'react'

type FirebaseUser = {
  authUser: firebase.User | null
}

type ContextType = {
  useAuth: () => UseAuth
}

type AuthState = {
  status: 'loading' | 'in' | 'out'
}

type UserCreationState = {
  status: 'userCreated' | 'loading'
}

type UseAuth = {
  userCreationState: UserCreationState
  authState: AuthState
  addNewUser: (email: string, pwd: string) => Promise<void>
  signInWithEmailAndPwdAndCookie: (email: string, pwd: string) => Promise<void>
  signInWithEmailAndPwd: (email: string, pwd: string) => Promise<void>
  signInWithGoogle: () => Promise<void>
  signOut: () => Promise<void>
  authUser: FirebaseUser
}

export const AuthContext = createContext<ContextType>({ useAuth })

firebase.initializeApp({
  apiKey: process.env.WEB_FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
})

// TODO: set this if you want to manage session cookies
// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)

const googleProvider = new firebase.auth.GoogleAuthProvider()

export function useAuth(): UseAuth {
  const [authUser, setAuthUser] = useState<FirebaseUser>({
    authUser: JSON.parse(localStorage.getItem('authUser') || ''),
  })

  const [userCreationState, setUserCreationState] = useState<UserCreationState>({ status: 'loading' })
  const [authState, setAuthState] = useState<AuthState>({ status: 'loading' })

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(
      async (user) => {
        if (user) {
          localStorage.setItem('authUser', JSON.stringify(user))
          setAuthUser({ authUser: user })
        }
      },
      () => {
        localStorage.removeItem('authUser')
        setAuthUser({
          authUser: null,
        })
      }
    )
  }, [])

  const signInWithGoogle = useCallback(async () => {
    try {
      const result = await firebase.auth().signInWithPopup(googleProvider)
      const idToken = await result.user?.getIdToken()

      setAuthState({ status: 'loading' })
      // call the backend to add custom claims
      await axios.post(`${process.env.AUTH_API}/auth/sessionLogin`, { idToken })

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

        await axios.post(`${process.env.AUTH_API}/auth/sessionLogin`, { idToken })

        setAuthState({ status: 'in' })
      } catch (err) {
        console.log(err)
      }
    },
    [setAuthState]
  )

  const signInWithEmailAndPwd = useCallback(
    async (email, pwd) => {
      try {
        setAuthState({ status: 'loading' })

        await firebase.auth().signInWithEmailAndPassword(email, pwd)

        setAuthState({ status: 'in' })
      } catch (err) {
        setAuthState({ status: 'out' })
        console.log(err)
      }
    },
    [setAuthState]
  )

  const addNewUser = useCallback(async (email, pwd) => {
    try {
      setUserCreationState({ status: 'loading' })

      const { user } = await firebase.auth().createUserWithEmailAndPassword(email, pwd)

      await axios.post(`${process.env.AUTH_API}/auth/setCustomClaims`, { uid: user?.uid })

      setUserCreationState({ status: 'userCreated' })
    } catch (err) {
      console.log(err)
    }
  }, [])

  const signOut = async () => {
    try {
      setAuthState({ status: 'loading' })
      await firebase.auth().signOut()
      setAuthState({ status: 'out' })
    } catch (error) {
      console.log(error)
    }
  }

  return {
    userCreationState,
    authState,
    addNewUser,
    signInWithEmailAndPwdAndCookie,
    signInWithEmailAndPwd,
    signInWithGoogle,
    signOut,
    authUser,
  }
}
