import Tracks from 'react-icons/lib/fa/map-signs'
import AboutUs from 'react-icons/lib/md/info'

interface Item {
  title: string
  link: string
  Icon: any
}

const items: Item[] = [
  {title: 'tracks', link: 'masar/', Icon: Tracks},
  {title: 'aboutUs', link: 'nahnu/', Icon: AboutUs},
  // {title: 'courses', link: 'dourous', Icon: Courses},
]

export default items
