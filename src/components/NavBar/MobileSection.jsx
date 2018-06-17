// @flow
import * as React from 'react'
import MenuIcon from 'react-icons/lib/md/menu'
import {connect} from 'react-redux'
import Button from '../Button'
import TemporaryDrawer from './TemporaryDrawer'

type Props = {
  toggleDrawer: Function,
}
const MobileSection = (props: Props) => (
  <section className="mh3 pv0 dn-l mdc-toolbar__section mdc-toolbar__section mdc-toolbar__section--align-end">
    <Button onClick={props.toggleDrawer}>
      <MenuIcon />
    </Button>
    <TemporaryDrawer {...props} />
  </section>
)

const enhance = connect(
  ({drawer}) => ({isOpen: drawer}),
  (dispatch) => ({toggleDrawer: () => dispatch({type: 'TOGGLE_DRAWER'})}),
)
export default enhance(MobileSection)
