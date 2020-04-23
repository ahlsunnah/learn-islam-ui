import firebase from 'firebase/app'

import axios from 'axios'

import 'firebase/auth'
import { useState, useEffect } from 'react'

firebase.initializeApp({
  apiKey: process.env.WEB_FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
})

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)

const googleProvider = new firebase.auth.GoogleAuthProvider()

export default function useAuth() {
  const [authState, setAuthState] = useState({ status: 'loading' })

  const signInWithGoogle = async () => {
    try {
      const result = await firebase.auth().signInWithPopup(googleProvider)
      const idToken = await result.user?.getIdToken()

      // call the backend to add custom claims
      await axios.post('/setCustomClaims', { idToken })
    } catch (error) {
      throw error
    }
  }

  const signOut = async () => {
    try {
      setAuthState({ status: 'loading' })
      await firebase.auth().signOut()
      setAuthState({ status: 'out' })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken()
        const idTokenResult = await user.getIdTokenResult()
      }
    })
  })

  return {
    authState,
    signInWithGoogle,
    signOut,
  }
}
