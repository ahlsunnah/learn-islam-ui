/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Link} from 'gatsby'
import logoAr from 'images/logo-ar.png'
import logoFr from 'images/logo-fr.png'
import Drawer, {DrawerHeader, DrawerContent} from '@material/react-drawer'
import Button from '../Button'
import structure from './structure'
import {INavBarTranslations} from '../../types/navbar'
import '@material/react-drawer/dist/drawer.css'
import '@material/react-list/dist/list.css'
import List, {
  ListItem,
  ListItemGraphic,
  ListItemText,
} from '@material/react-list'

interface Props {
  isOpen: boolean
  otherLocaleTranslations: {
    localeName: string
    localePath: string
  }
  t: INavBarTranslations
  closeDrawer: () => void
}
const TemporaryDrawer = ({
  isOpen,
  otherLocaleTranslations,
  t,
  closeDrawer,
}: Props) => (
  <Drawer modal open={isOpen} onClose={closeDrawer}>
    <DrawerHeader
      sx={{
        pt: 15,
      }}
    >
      <Link onClick={closeDrawer} to={t.localePath}>
        <img
          alt={t.siteName}
          height="60px"
          src={t.locale === 'ar' ? logoAr : logoFr}
        />
      </Link>
    </DrawerHeader>
    <DrawerContent tag="nav">
      <List singleSelection>
        <Link
          onClick={closeDrawer}
          to={otherLocaleTranslations.localePath}
          sx={{
            textDecoration: 'none',
          }}
        >
          <ListItem>
            <Button rounded outlined>
              {otherLocaleTranslations.localeName}
            </Button>
          </ListItem>
        </Link>

        {structure.map(({title, link, Icon}) => (
          <ListItem>
            <Link
              onClick={closeDrawer}
              key={title}
              activeClassName="mdc-list-item--activated"
              className="mdc-list-item"
              to={`${t.localePath}${link}`}
            >
              <ListItemGraphic graphic={<Icon />} />
              <ListItemText primaryText={t[title]} />
            </Link>
          </ListItem>
        ))}
      </List>
    </DrawerContent>
  </Drawer>
)

export default TemporaryDrawer
