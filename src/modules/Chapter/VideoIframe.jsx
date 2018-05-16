// @flow
import * as React from 'react'

type Props = {
  source: string,
}
const VideoIframe = ({source = ''}: Props) => (
  <div className="relative aspect-ratio aspect-ratio--16x9 bg-light-gray">
    <iframe
      className="aspect-ratio--object"
      src={source}
      frameBorder="0"
      allowFullScreen
    />
  </div>
)

export default VideoIframe
