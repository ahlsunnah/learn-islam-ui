/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import logoAr from 'images/logo-ar.png';
import logoFr from 'images/logo-fr.png';
import Drawer, { DrawerHeader, DrawerContent } from '@material/react-drawer';
import Button from '../Button';
import structure from './structure';
import '@material/react-drawer/dist/drawer.css';
import '@material/react-list/dist/list.css';
import List, { ListItem, ListItemGraphic, ListItemText } from '@material/react-list';
import { useTranslation } from 'react-i18next';

interface IProps {
  isOpen: boolean;
  closeDrawer: () => void;
}

const TemporaryDrawer = ({ isOpen, closeDrawer }: IProps) => {
  const { t } = useTranslation();
  return (
    <Drawer modal open={isOpen} onClose={closeDrawer}>
      <DrawerHeader
        sx={{
          pt: 15,
        }}
      >
        <Link onClick={closeDrawer} to={t('localePath')}>
          <img alt={t('siteName')} height="60px" src={t('locale') === 'ar' ? logoAr : logoFr} />
        </Link>
      </DrawerHeader>
      <DrawerContent tag="nav">
        <List singleSelection>
          <Link
            onClick={closeDrawer}
            to={t('localePath')}
            sx={{
              textDecoration: 'none',
            }}
          >
            <ListItem>
              <Button rounded outlined>
                {t('localeName')}
              </Button>
            </ListItem>
          </Link>

          {structure.map(({ title, link, Icon }) => (
            <ListItem key={title}>
              <Link
                onClick={closeDrawer}
                key={title}
                activeClassName="mdc-list-item--activated"
                className="mdc-list-item"
                to={`${t('localePath')}${link}`}
              >
                <ListItemGraphic graphic={<Icon />} />
                <ListItemText primaryText={t(`${title}`)} />
              </Link>
            </ListItem>
          ))}
        </List>
      </DrawerContent>
    </Drawer>
  );
};

export default TemporaryDrawer;
