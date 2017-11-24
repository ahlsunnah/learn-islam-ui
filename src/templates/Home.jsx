// @flow
import React from 'react'
// import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import SectionDefaultIcon from 'react-icons/lib/md/folder-special'
import Button from '../components/Button'
import Card from '../components/Card'
import RawHTML from '../components/RawHTML'

const Header = styled.div`
  &::before {
    content: '';
    width: 100%;
    height: 660px;
    z-index: -1000;
    background: linear-gradient(160deg, #cdecff 0%, #fbf1a9 100%);
    transform-origin: left bottom;
    position: absolute;
    top: 0;
    left: 0;
    transform: skew(0deg, -15deg);
  }
`
type Props = {
  data: {
    allContentfulSection: {
      edges: Array<{
        node: {
          description: {
            childMarkdownRemark: {
              html: string,
            },
          },
          logo?: {
            responsiveResolution: {
              height: number,
              src: string,
              srcSet: string,
              width: number,
            },
          },
          slug: string,
          title: string,
        },
      }>,
    },
    contentfulWebsite: {
      heroBackground: {
        responsiveResolution: {
          height: number,
          src: string,
          srcSet: string,
          width: number,
        },
      },
      startButtonText: string,
      websiteDescription: {
        childMarkdownRemark: {
          html: string,
        },
      },
      websiteTitle: string,
    },
  },
  pathContext: Object,
}

const Home = ({data, pathContext}: Props) => {
  const {edges: sections} = data.allContentfulSection
  const {
    heroBackground,
    startButtonText,
    websiteDescription,
    websiteTitle,
  } = data.contentfulWebsite
  const {languagePath} = pathContext

  const CardWithBackground = styled(Card)`
    background-image: url("${heroBackground.responsiveResolution.src}");
    background-size: cover;
    flex: 1;
  `
  return (
    <Header className="pa4 relative flex items-stretch">
      <Link
        className="mr4-ns flex2 flex items-stretch br2 tc"
        to={sections[0] && `${languagePath}${sections[0].node.slug}`}
      >
        <CardWithBackground className="flex">
          <div className="w-100 flex flex-column justify-center items-center bg-black-20 br2">
            <h1 className="mt0 mb2 f1 white">{websiteTitle}</h1>
            {websiteDescription && (
              <RawHTML className="mb4 f5 white">
                {websiteDescription.childMarkdownRemark.html}
              </RawHTML>
            )}
            <Button className="f3" elevated>
              {startButtonText}
            </Button>
          </div>
        </CardWithBackground>
      </Link>
      <div className="ml4-ns flex1">
        {sections &&
          sections.map(({node: section}, index) => (
            <Card
              className={`${index ? 'mt3' : ''} flex items-center bg-white`}
              key={section.slug}
              to={`${languagePath}${section.slug}`}
            >
              <div className="flex2 self-stretch flex justify-center items-center br2 bg-lightest-blue">
                {section.logo ? (
                  <img
                    alt="Logo"
                    style={{
                      height: section.logo.responsiveResolution.height,
                      width: section.logo.responsiveResolution.width,
                    }}
                    src={section.logo.responsiveResolution.src}
                    srcSet={section.logo.responsiveResolution.srcSet}
                  />
                ) : (
                  <div className="pa1 br-pill bg-white">
                    <SectionDefaultIcon className="f-5 gold" />
                  </div>
                )}
              </div>
              <div className="pa3 mt2 flex3">
                <h2 className="f3">{section.title}</h2>
                {section.description && (
                  <RawHTML className="pt2 pb3 gray f6">
                    {section.description.childMarkdownRemark.html}
                  </RawHTML>
                )}
                <Button className="f5">{startButtonText}</Button>
              </div>
            </Card>
          ))}
      </div>
    </Header>
  )
}

export default Home

// $FlowIgnore
export const pageQuery = graphql`
  query homeQuery($locale: String!) {
    contentfulWebsite(node_locale: {eq: $locale}) {
      heroBackground {
        responsiveResolution(width: 780, height: 480) {
          src
          srcSet
          height
          width
        }
      }
      startButtonText
      websiteDescription {
        childMarkdownRemark {
          html
        }
      }
      websiteTitle
    }
    allContentfulSection(limit: 1000, filter: {node_locale: {eq: $locale}}) {
      edges {
        node {
          description {
            childMarkdownRemark {
              html
            }
          }
          node_locale
          logo {
            responsiveResolution(width: 70, height: 70) {
              src
              srcSet
              height
              width
            }
          }
          slug
          title
        }
      }
    }
  }
`
