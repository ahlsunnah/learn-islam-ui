// @flow
import React from 'react'
import Helmet from 'react-helmet'
import FaBook from 'react-icons/lib/fa/book'
import Button from '../components/Button'
import Card from '../components/Card'
import Header from '../components/Header'
import RawHTML from '../components/RawHTML'

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
    <div className="min-vh-100 pv3 flex flex-column items-center tc bg-light-gray">
      <Helmet title={`${section.title}`} />
      <Header className="flex items-center justify-center br-3 bg-white">
        <h1 className="f2">{section.title}</h1>
        {section.description && (
          <RawHTML className="ph3 f4 gray">
            {section.description.childMarkdownRemark.html}
          </RawHTML>
        )}
      </Header>
      <div className="mt6 mw6">
        {section.course &&
          section.course
            .slice()
            .sort((a, b) => a.order - b.order) // TODO: sort in the query ?
            .map((course) => (
              <Card
                className="mt3 flex items-center bg-white"
                key={course.slug}
                to={`${languagePath}${slug}/${course.slug}`}
              >
                <div className="pa3 flex3">
                  <h2 className="f3">{course.title}</h2>
                  {course.description && (
                    <div
                      className="ph3 f5 gray"
                      dangerouslySetInnerHTML={{
                        __html: course.description.childMarkdownRemark.html,
                      }}
                    />
                  )}
                  <Button className="mt3">{`${startButtonText} >`}</Button>
                </div>
                <div className="flex2 flex justify-center items-center self-stretch bg-washed-blue">
                  <div className="pa3 br-pill bg-white">
                    <FaBook className="f1 gold" />
                  </div>
                </div>
              </Card>
            ))}
      </div>
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
