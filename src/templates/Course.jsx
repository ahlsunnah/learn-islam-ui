// @flow
import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

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
  const {contentfulCourse: course} = data
  const {languagePath, slug} = pathContext
  return (
    <div className="">
      <Helmet title={`${course.title}`} />
      <div className="tc">
        <h1>{course.title}</h1>
        {course.chapter
          .slice()
          .sort((a, b) => a.order - b.order) // TODO: sort in the query ?
          .map(chapter => (
            <div key={chapter.slug}>
              <Link
                to={`${languagePath}${course.section
                  .slug}/${slug}/${chapter.slug}`}
              >
                {chapter.title}
              </Link>
            </div>
          ))}
        {/* <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{__html: section.html}}
        /> */}
      </div>
    </div>
  )
}

export default Course

// $FlowIgnore
export const pageQuery = graphql`
  query courseQuery($slug: String!, $locale: String!) {
    contentfulCourse(slug: {eq: $slug}, node_locale: {eq: $locale}) {
      title
      section {
        slug
      }
      chapter {
        order
        slug
        title
      }
    }
  }
`
