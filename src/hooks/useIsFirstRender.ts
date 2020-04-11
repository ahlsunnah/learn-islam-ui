// https://stackoverflow.com/a/56267719/1673761
import {useRef, useEffect} from 'react'

export const useIsFirstRender = () => {
  const isFirstRenderRef = useRef(true)
  useEffect(() => {
    isFirstRenderRef.current = false
  }, [])
  return isFirstRenderRef.current
}
