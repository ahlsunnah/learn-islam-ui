// @flow
import * as React from 'react'

type Props = {
  featuredCoursesTitle: string,
}
const items = ['course1', 'course2', 'course3', 'course4']

const HomeCourses = ({featuredCoursesTitle}: Props) => (
  <section className="pv5 min-h-512 flex flex-column mdc-theme--secondary-bg">
    <div className="tc">
      <h2 className="white">{featuredCoursesTitle}</h2>
    </div>
    <div className="ph3 flex1 flex flex-column flex-row-ns justify-around items-center">
      {items.map((name) => (
        <div
          key={name}
          className="mt4 mt5-ns mh3 bg-white"
          style={{
            height: '15rem',
            width: '12rem',
          }}
        />
      ))}
    </div>
  </section>
)
export default HomeCourses
