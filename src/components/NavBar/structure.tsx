import Tracks from 'react-icons/lib/fa/map-signs'
import AboutUs from 'react-icons/lib/md/info'

interface IItem {
  title: 'tracks' | 'aboutUs'
  link: string
  Icon: React.FC<{ className?: string }>
}

const items: IItem[] = [
  { title: 'tracks', link: 'masar/', Icon: Tracks },
  { title: 'aboutUs', link: 'nahnu/', Icon: AboutUs },
  // {title: 'courses', link: 'dourous', Icon: Courses},
]

export default items
