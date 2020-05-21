import Tracks from 'react-icons/lib/fa/map-signs'
import AboutUs from 'react-icons/lib/md/info'

interface IItem {
  title: 'tracks' | 'aboutUs' | 'login' | 'Library'
  link: string
  Icon: React.FC<{ className?: string }>
}

const items: IItem[] = [
  { title: 'tracks', link: 'masar/', Icon: Tracks },
  { title: 'aboutUs', link: 'nahnu/', Icon: AboutUs },
  { title: 'Library', link: 'library/', Icon: AboutUs },
  { title: 'login', link: 'app/login/', Icon: AboutUs },
]

export default items
