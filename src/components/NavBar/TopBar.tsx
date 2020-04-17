/** @jsx jsx */
import { jsx } from 'theme-ui';
import LogoSection from './LogoSection';
import MenuIcon from 'react-icons/lib/md/menu';
import NavSection from './NavSection';
import '@material/react-top-app-bar/index.scss';
import TopAppBar, { TopAppBarIcon, TopAppBarRow, TopAppBarSection, TopAppBarTitle } from '@material/react-top-app-bar';
import { TTracksPageOtherTranslationsFragment } from '../../graphqlTypes';
import { useTranslation } from 'react-i18next';

interface IProps {
  otherLanguagePath: string;
  otherLocaleTranslations: TTracksPageOtherTranslationsFragment;
  toggleDrawer: () => void;
}

const TopBar = ({ otherLanguagePath, otherLocaleTranslations, toggleDrawer }: IProps) => {
  const { t } = useTranslation();
  return (
    <TopAppBar
      sx={{
        backgroundColor: 'white',
        py: '.5rem',
      }}
    >
      <TopAppBarRow>
        <TopAppBarSection align="start">
          <TopAppBarTitle>
            <LogoSection locale={t('locale')} localePath={t('localePath')} siteName={t('siteName')} />
          </TopAppBarTitle>
        </TopAppBarSection>

        <TopAppBarSection align="end" role="toolbar" sx={{ display: 'flex' }}>
          <NavSection
            sx={{
              display: ['none', 'none', 'block'],
            }}
            otherLanguagePath={otherLanguagePath}
            otherLocaleTranslations={otherLocaleTranslations}
          />
          <button
            onClick={toggleDrawer}
            sx={{
              bg: 'transparent',
              borderColor: 'transparent',
              display: ['block', 'block', 'none'],
            }}
          >
            <TopAppBarIcon actionItem tabIndex={0}>
              <MenuIcon />
            </TopAppBarIcon>
          </button>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
  );
};
export default TopBar;
