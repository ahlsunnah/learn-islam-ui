// @flow
import React from 'react'
import Helmet from 'react-helmet'
import {Redirect} from 'react-router' // eslint-disable-line
import Loader from '../components/Loader'

type Props = {
  data: {
    contentfulCourse: Object,
  },
  pathContext: {
    languagePath: string,
    slug: string,
  },
}

const Course = ({data, pathContext}: Props) => {
  const course = data.contentfulCourse
  const chapters = course.chapter.slice().sort((a, b) => a.order - b.order) // TODO: sort in the query ?
  const {languagePath, slug} = pathContext

  return (
    <div className="">
      <Helmet title={`${course.title}`} />
      <div className="tc">
        <h1>{course.title}</h1>
        <Loader />
      </div>
      {/* TODO: redirect to the first non-completed chapter */}
      <Redirect
        to={`${languagePath}${course.section.slug}/${slug}/${chapters[0].slug}`}
      />
    </div>
  )
}

export default Course

// $FlowIgnore
// export const pageQuery = graphql`
//   query courseQuery($slug: String!, $locale: String!) {
//     contentfulCourse(slug: {eq: $slug}, node_locale: {eq: $locale}) {
//       title
//       section {
//         slug
//       }
//       chapter {
//         order
//         slug
//         title
//       }
//     }
//   }
// `
