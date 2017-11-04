// @flow
import * as React from 'react'
import 'antd/dist/antd.css'
import 'tachyons' // eslint-disable-line

type Props = {
  children: Function,
  location: {
    pathname: string,
  },
}
const MainWrapper = ({children, location}: Props) => {
  const lang: string = location.pathname.includes('/fr/') ? 'fr-FR' : 'ar'
  console.log(lang)
  return <div>{children()}</div>
}

export default MainWrapper
