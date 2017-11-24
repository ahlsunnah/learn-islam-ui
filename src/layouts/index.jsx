// @flow
import * as React from 'react'
import 'antd/dist/antd.css'
import 'tachyons' // eslint-disable-line
import './styles.css'

type Props = {
  children: Function,
  location: {
    pathname: string,
  },
}
const MainWrapper = ({children, location}: Props) => {
  const lang: string = location.pathname.includes('/fr/') ? 'fr-FR' : 'ar' // eslint-disable-line
  return <div>{children()}</div>
}

export default MainWrapper
