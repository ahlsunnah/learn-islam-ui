import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

const Section = ({data, pathContext}) => {
  const {contentfulSection: section} = data
  const {languagePath, slug} = pathContext
  return (
    <div className="">
      <Helmet title={`${section.title}`} />
      <div className="tc">
        <h1>{section.title}</h1>
        <div>{section.description.description}</div>
        {section.course
          .slice()
          .sort((a, b) => a.order - b.order) // TODO: sort in the query ?
          .map(course => (
            <div key={course.slug}>
              <Link to={`${languagePath}${slug}/${course.slug}`}>
                {course.title}
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

export default Section

export const pageQuery = graphql`
  query sectionQuery($slug: String!, $locale: String!) {
    contentfulSection(slug: {eq: $slug}, node_locale: {eq: $locale}) {
      title
      order
      description {
        description
      }
      course {
        title
        slug
        order
      }
      slug
      logo {
        responsiveResolution(width: 50, height: 50) {
          src
          srcSet
          height
          width
        }
      }
    }
  }
`
