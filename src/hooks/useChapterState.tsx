import React, { useContext } from 'react'
import usePersistedState from './usePersistedState'

export enum ChapterStates {
  'not started' = 'not started',
  'completed' = 'completed',
}

type TChapterStatesContextValue = [
  {
    [id: number]: ChapterStates
  },
  React.Dispatch<
    React.SetStateAction<{
      [id: number]: ChapterStates
    }>
  >
]

const ChapterStatesContext = React.createContext<TChapterStatesContextValue>([{}, () => {}])

export const ChapterStatesProvider: React.FC = ({ children }) => {
  const value = usePersistedState<{
    [id: number]: ChapterStates
  }>('chapters', {})

  return <ChapterStatesContext.Provider value={value}>{children}</ChapterStatesContext.Provider>
}

export function useAllChaptersStates() {
  return useContext(ChapterStatesContext)
}

export default function useChapterState(id: number): [ChapterStates, (newState: ChapterStates) => void] {
  const [chapterStates, setChapterStates] = useAllChaptersStates()
  const setChapterState = (newState: ChapterStates) => {
    setChapterStates({
      ...chapterStates,
      [id]: newState,
    })
  }
  return [chapterStates[id] || ChapterStates['not started'], setChapterState]
}
