import * as React from 'react'

interface Props {
  source: string
  title: string
}
const VideoIframe = ({source = '', title}: Props) => {
  const iframeSource = `https://www.youtube.com/embed/${source}?cc_load_policy=1&color=white&iv_load_policy=3&modestbranding=1&rel=0&showinfo=0`
  return (
    <div className="relative aspect-ratio aspect-ratio--16x9 bg-light-gray">
      <iframe
        className="aspect-ratio--object"
        src={iframeSource}
        title={title}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  )
}

export default VideoIframe
