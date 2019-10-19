/** @jsx jsx */
import {jsx} from 'theme-ui'
import {connect} from 'react-redux'
import {IHomeOtherLocaleTranslations} from 'types/home'
import {INavBarTranslations} from '../../types/navbar'
import '@material/react-top-app-bar/index.scss'
import {DrawerAppContent} from '@material/react-drawer'
import TemporaryDrawer from './TemporaryDrawer'
import TopBar from './TopBar'

interface Props {
  isOpen: boolean
  otherLanguagePath: string
  otherLocaleTranslations: IHomeOtherLocaleTranslations
  t: INavBarTranslations
  closeDrawer: () => void
  toggleDrawer: () => void
}

const NavBar = ({
  closeDrawer,
  isOpen,
  otherLanguagePath,
  otherLocaleTranslations,
  t,
  toggleDrawer,
}: Props) => (
  <div>
    <TemporaryDrawer
      closeDrawer={closeDrawer}
      isOpen={isOpen}
      otherLocaleTranslations={otherLocaleTranslations}
      t={t}
    />
    <DrawerAppContent>
      <TopBar
        otherLanguagePath={otherLanguagePath}
        otherLocaleTranslations={otherLocaleTranslations}
        t={t}
        toggleDrawer={toggleDrawer}
      />
    </DrawerAppContent>
  </div>
)

const enhance = connect(
  ({drawer}: {drawer: boolean}) => ({isOpen: drawer}),
  (dispatch) => ({
    closeDrawer: () => dispatch({type: 'CLOSE_DRAWER'}),
    toggleDrawer: () => dispatch({type: 'TOGGLE_DRAWER'}),
  }),
)
export default enhance(NavBar)
