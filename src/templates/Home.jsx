// @flow
import React from 'react'
import Link from 'gatsby-link'
// import Helmet from 'react-helmet'
import {Button} from 'antd'

const Home = ({data, pathContext}: {data: Object, pathContext: Object}) => {
  const {edges: sections} = data.allContentfulSection
  const {startButtonText, websiteTitle} = data.contentfulWebsite
  const {languagePath} = pathContext
  return (
    <div className="tc bg-light-gray">
      <div className="bg-white">
        <h1>{websiteTitle}</h1>
      </div>
      {sections &&
        sections.map(({node: section}) => (
          <div className="bg-white" key={section.slug}>
            <img
              alt="Logo"
              style={{
                height: section.logo.responsiveResolution.height,
                width: section.logo.responsiveResolution.width,
              }}
              src={section.logo.responsiveResolution.src}
              srcSet={section.logo.responsiveResolution.srcSet}
            />
            <h1>
              <Link to={`${languagePath}${section.slug}`}>{section.title}</Link>
            </h1>
            <Link to={`${languagePath}${section.slug}`}>
              <Button type="primary">{startButtonText}</Button>
            </Link>
          </div>
        ))}
    </div>
  )
}

export default Home

// $FlowIgnore
export const pageQuery = graphql`
  query homeQuery($locale: String!) {
    contentfulWebsite(node_locale: {eq: $locale}) {
      startButtonText
      websiteTitle
    }
    allContentfulSection(limit: 1000, filter: {node_locale: {eq: $locale}}) {
      edges {
        node {
          slug
          title
          logo {
            responsiveResolution(width: 50, height: 50) {
              src
              srcSet
              height
              width
            }
          }
          node_locale
        }
      }
    }
  }
`
