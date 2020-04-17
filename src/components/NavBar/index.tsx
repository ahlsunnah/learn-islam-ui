/** @jsx jsx */
import { jsx } from 'theme-ui';
import '@material/react-top-app-bar/index.scss';
import { DrawerAppContent } from '@material/react-drawer';
import TemporaryDrawer from './TemporaryDrawer';
import TopBar from './TopBar';
import { TTracksPageOtherTranslationsFragment, TAboutUsOtherTranslationFragment } from '../../graphqlTypes';
import { useState } from 'react';

interface Props {
  otherLanguagePath: string;
  otherLocaleTranslations: TTracksPageOtherTranslationsFragment | TAboutUsOtherTranslationFragment;
}

const NavBar: React.FC<Props> = ({ otherLanguagePath, otherLocaleTranslations }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const toggleDrawer = () => setOpen(!isOpen);
  const closeDrawer = () => setOpen(false);
  return (
    <div>
      <TemporaryDrawer closeDrawer={closeDrawer} isOpen={isOpen} otherLocaleTranslations={otherLocaleTranslations} />
      <DrawerAppContent>
        <TopBar
          otherLanguagePath={otherLanguagePath}
          otherLocaleTranslations={otherLocaleTranslations}
          toggleDrawer={toggleDrawer}
        />
      </DrawerAppContent>
    </div>
  );
};
export default NavBar;
