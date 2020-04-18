/** @jsx jsx */
import { jsx } from 'theme-ui';
import '@material/react-top-app-bar/index.scss';
import { DrawerAppContent } from '@material/react-drawer';
import TemporaryDrawer from './TemporaryDrawer';
import TopBar from './TopBar';
import { useState } from 'react';

const NavBar: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const toggleDrawer = () => setOpen(!isOpen);
  const closeDrawer = () => setOpen(false);
  return (
    <div>
      <TemporaryDrawer closeDrawer={closeDrawer} isOpen={isOpen} />
      <DrawerAppContent>
        <TopBar toggleDrawer={toggleDrawer} />
      </DrawerAppContent>
    </div>
  );
};
export default NavBar;
