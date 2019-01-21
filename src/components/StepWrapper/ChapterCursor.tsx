import * as React from 'react'

interface Props {
  className?: string
  isQuiz?: boolean
  isComplete?: boolean
}
const ChapterCursor = ({className, isComplete, isQuiz}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    viewBox="0 0 10 10"
    className={className}
  >
    {isQuiz ? (
      <path
        fill="#ccc"
        d="M6.4 7.2L5 6 3.5 7.2l.7-1.8-1.5-1 1.9.2.4-1.8.5 1.8 1.8-.1-1.6 1z"
      />
    ) : (
      !isComplete && <circle cx="5" cy="5" r="1.2" fill="#ccc" />
    )}
    {isComplete && (
      <path fill="#7CFC00" d="M4 6.1L2.9 5l-.4.4L4.1 7l3.5-3.6-.4-.4z" />
    )}
  </svg>
)
export default ChapterCursor
