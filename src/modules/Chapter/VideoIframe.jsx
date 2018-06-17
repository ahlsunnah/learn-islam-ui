// @flow
import * as React from 'react'
import {withPropsOnChange} from 'recompose'

type Props = {
  source: string,
  title: string,
}
const VideoIframe = ({source = '', title}: Props) => (
  <div className="relative aspect-ratio aspect-ratio--16x9 bg-light-gray">
    <iframe
      className="aspect-ratio--object"
      src={source}
      title={title}
      frameBorder="0"
      allowFullScreen
    />
  </div>
)

const enhance = withPropsOnChange(['source'], ({source}) => ({
  source: `https://www.youtube.com/embed/${source}?autoplay=1&cc_load_policy=1&color=white&iv_load_policy=3&modestbranding=1&rel=0&showinfo=0`,
}))

export default enhance(VideoIframe)
