import NavBar from 'components/molecules/NavBar'
import React from 'react'
interface IProps {
  description?: string
  title: string
}
const BlueHero: React.FC<IProps> = ({ description, title }) => (
  <div className="flex flex-column mdc-theme--primary-bg">
    <NavBar />
    <div className="mt64 pt4 pb3 tc white">
      <h1 className="f3 f2-ns fw4">{title}</h1>
      <p className="">{description}</p>
    </div>
  </div>
)
export default BlueHero
