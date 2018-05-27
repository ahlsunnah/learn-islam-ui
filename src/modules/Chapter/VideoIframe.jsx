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
  source: `https://www.youtube.com/embed/${source}`,
}))

export default enhance(VideoIframe)
