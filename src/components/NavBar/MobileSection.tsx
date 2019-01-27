import * as React from 'react'
import MenuIcon from 'react-icons/lib/md/menu'
import {connect} from 'react-redux'
import Button from '../Button'
import TemporaryDrawer from './TemporaryDrawer'
import {INavBarTranslations} from '../../types/navbar'

interface Props {
  isOpen: boolean
  otherLocaleTranslations: {
    localeName: string
    localePath: string
  }
  t: INavBarTranslations
  toggleDrawer: () => void
}
class MobileSection extends React.Component<Props> {
  render() {
    return (
      <section className="pv0 dn-l mdc-toolbar__section mdc-toolbar__section mdc-toolbar__section--align-end">
        <Button onClick={this.props.toggleDrawer}>
          <MenuIcon />
        </Button>
        <TemporaryDrawer {...this.props} />
      </section>
    )
  }
}

const enhance = connect(
  ({drawer}: {drawer: boolean}) => ({isOpen: drawer}),
  (dispatch) => ({toggleDrawer: () => dispatch({type: 'TOGGLE_DRAWER'})}),
)
export default enhance(MobileSection)
