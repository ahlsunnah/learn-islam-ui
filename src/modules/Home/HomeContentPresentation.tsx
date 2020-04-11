import React from 'react'

interface IProps {
  text: string
  title: string
}

const HomeContentPresentation = ({text, title}: IProps) => (
  <section className="pv3 flex flex-column items-center justify-center mdc-theme--secondary-bg white">
    <h2>{title}</h2>
    <p className="mw6 f4 lh-copy tc">{text}</p>
  </section>
)
export default HomeContentPresentation
