// @flow
import * as React from 'react'
// import 'tachyons/css/tachyons.min.css' // TODO: do not include in footer
import 'styles/theme.scss'

type Props = {
  children: Function,
}
const DefaultLayout = ({children}: Props) => (
  <div className="mdc-typography">{children()}</div>
)
export default DefaultLayout
