import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { useIsFirstRender } from './useIsFirstRender'

const getPersistedValue = (key: string) => {
  if (typeof window === 'undefined') return
  const value = localStorage.getItem(key)
  if (value) {
    return JSON.parse(value)
  }
}

const usePersistedState = <T>(key: string, initialState: T): [T, Dispatch<SetStateAction<T>>] => {
  const isFirstRender = useIsFirstRender()

  const [state, setState] = useState((getPersistedValue(key) as T) || initialState)

  useEffect(() => {
    // When the key change we update the state
    if (!isFirstRender) {
      setState((getPersistedValue(key) as T) || initialState)
    }
  }, [key]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [state]) // eslint-disable-line react-hooks/exhaustive-deps

  return [state, setState]
}

export default usePersistedState
