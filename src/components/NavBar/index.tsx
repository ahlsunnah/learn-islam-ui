/** @jsx jsx */
import { jsx } from 'theme-ui';
import '@material/react-top-app-bar/index.scss';
import { DrawerAppContent } from '@material/react-drawer';
import TemporaryDrawer from './TemporaryDrawer';
import TopBar from './TopBar';
import { useState } from 'react';

type Props = {
  otherLanguagePath: string;
};

const NavBar: React.FC<Props> = ({ otherLanguagePath }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const toggleDrawer = () => setOpen(!isOpen);
  const closeDrawer = () => setOpen(false);
  return (
    <div>
      <TemporaryDrawer closeDrawer={closeDrawer} isOpen={isOpen} />
      <DrawerAppContent>
        <TopBar otherLanguagePath={otherLanguagePath} toggleDrawer={toggleDrawer} />
      </DrawerAppContent>
    </div>
  );
};
export default NavBar;
