// @flow
import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import FaBook from 'react-icons/lib/fa/book'

type Props = {
  data: {
    contentfulWebsite: {
      startButtonText: string,
    },
    contentfulSection: {
      title: string,
      description: {
        childMarkdownRemark: {
          html: string,
        },
      },
      course: Array<Object>,
    },
  },
  pathContext: {
    languagePath: string,
    slug: string,
  },
}

const Section = ({data, pathContext}: Props) => {
  const {contentfulSection: section} = data
  const {startButtonText} = data.contentfulWebsite
  const {languagePath, slug} = pathContext
  return (
    <div className="min-vh-100 flex flex-column tc bg-light-gray">
      <Helmet title={`${section.title}`} />
      <div className="flex items-center justify-center br-3 bg-white">
        <h1>{section.title}</h1>
        {section.description.childMarkdownRemark.html && (
          <div
            className="ph3"
            dangerouslySetInnerHTML={{
              __html: section.description.childMarkdownRemark.html,
            }}
          />
        )}
      </div>
      {section.course
        .slice()
        .sort((a, b) => a.order - b.order) // TODO: sort in the query ?
        .map(course => (
          <div key={course.slug} className="flex justify-center">
            <Link to={`${languagePath}${slug}/${course.slug}`}>
              <div className="mt3 flex items-center br2 bg-white">
                <div className="pa4">
                  <h2>{course.title}</h2>
                  {course.description.childMarkdownRemark.html && (
                    <div
                      className="ph3 black-80"
                      dangerouslySetInnerHTML={{
                        __html: course.description.childMarkdownRemark.html,
                      }}
                    />
                  )}
                  <button className="mt3 ph3 pv2 yellow bg-transparent bw1 b--yellow pointer">
                    {`${startButtonText} >`}
                  </button>
                </div>
                <div className="pa5 flex items-center bg-washed-blue">
                  <FaBook className="f1" />
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  )
}

export default Section

// $FlowIgnore
export const pageQuery = graphql`
  query sectionQuery($slug: String!, $locale: String!) {
    contentfulWebsite(node_locale: {eq: $locale}) {
      startButtonText
    }
    contentfulSection(slug: {eq: $slug}, node_locale: {eq: $locale}) {
      title
      order
      description {
        childMarkdownRemark {
          html
        }
      }
      course {
        title
        description {
          childMarkdownRemark {
            html
          }
        }
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
