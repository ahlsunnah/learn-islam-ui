import usePersistedState from './usePersistedState'

export enum ChapterStates {
  'not started' = 'not started',
  'completed' = 'completed',
}

export function useAllChaptersStates() {
  const value = usePersistedState<{
    [id: number]: ChapterStates
  }>('chapters', {})
  return value
}

export default function useChapterState(
  id: number,
): [ChapterStates, (newState: ChapterStates) => void] {
  const [chapterStates, setChapterStates] = useAllChaptersStates()
  const setChapterState = (newState: ChapterStates) => {
    setChapterStates({
      ...chapterStates,
      [id]: newState,
    })
  }
  return [chapterStates[id], setChapterState]
}
