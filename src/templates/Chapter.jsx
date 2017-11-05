// @flow
/* eslint react/no-array-index-key: 0 */
import * as React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import {Button} from 'antd'
import FaBars from 'react-icons/lib/fa/bars'
import GoMoveLeft from 'react-icons/lib/go/move-left'
import ChapterSidebar from '../components/ChapterSidebar'

const SIDEBAR_WIDTH = '18rem'

const StyledChapterSidebar = styled(ChapterSidebar)`
  width: ${props => (props.isSideBarVisible ? SIDEBAR_WIDTH : '0')};
  transition: width 0.5s ease;
`
const ContentWrapper = styled.div`
  flex: 1;
  margin-left: ${props => (props.isSideBarVisible ? SIDEBAR_WIDTH : '0')};
  transition: margin 0.5s ease;
`
const ChapterContent = styled.div`
  p {
    font-size: 1.25rem;
  }
`
type Props = {
  data: {
    contentfulChapter: {
      content: {
        childMarkdownRemark: {
          html: string,
        },
      },
      course: {
        chapter: Array<{
          order: number,
          slug: string,
          title: string,
        }>,
        slug: string,
        section: {
          slug: string,
          title: string,
        },
        title: string,
      },
      order: number,
      title: string,
    },
    contentfulWebsite: {
      nextButton: string,
    },
  },
  pathContext: {
    languagePath: string,
    slug: string,
  },
}
type State = {
  isSideBarVisible: boolean,
}

class Chapter extends React.Component<Props, State> {
  state = {
    isSideBarVisible: true,
  }
  toggleSidebar: Function = () => {
    this.setState(({isSideBarVisible}) => ({
      isSideBarVisible: !isSideBarVisible,
    }))
  }
  render() {
    const {data, pathContext} = this.props
    const {isSideBarVisible} = this.state
    const {contentfulChapter: chapter, contentfulWebsite} = data
    const {languagePath} = pathContext
    const {nextButton} = contentfulWebsite
    // We split the content and youtube links
    const contentParts =
      chapter.content &&
      chapter.content.childMarkdownRemark.html
        .split(/<p><a href="https?:\/\/www.youtube.com\/watch\?v=(\w+)".*/)
        .filter(part => part !== '')
    // We get the nextChapter if there is one
    const nextChapter = chapter.course.chapter
      .slice()
      .sort((a, b) => a.order - b.order)
      .find(({order}) => order > chapter.order)
    const nextLink = nextChapter
      ? `${languagePath}${chapter.course.section.slug}/${chapter.course
          .slug}/${nextChapter.slug}/`
      : `${languagePath}${chapter.course.section.slug}/`
    return (
      <div className="flex">
        <Helmet title={`${chapter.title}`} />
        <StyledChapterSidebar
          course={chapter.course}
          languagePath={languagePath}
          isSideBarVisible={isSideBarVisible}
        />
        <ContentWrapper
          className="flex flex-column items-center"
          isSideBarVisible={isSideBarVisible}
        >
          <div className="w-100 relative flex justify-center items-center bg-moon-gray">
            <div className="absolute top-0 bottom-0 left-0 flex items-center">
              <button
                className="ml2 pa2 pointer bg-transparent"
                onClick={this.toggleSidebar}
              >
                {isSideBarVisible ? (
                  <GoMoveLeft className="f3" />
                ) : (
                  <FaBars className="f3" />
                )}
              </button>
            </div>
            <h1 className="mv2 tc" css={`flex: 2;`}>
              {chapter.title}
            </h1>
            <div />
          </div>
          {contentParts &&
            contentParts.map(
              (part, i) =>
                /^\w\w/.test(part) ? (
                  <div key={i} className="w-100 aspect-ratio aspect-ratio--4x3">
                    <iframe
                      className="aspect-ratio--object"
                      frameBorder="0"
                      title={`Video ${i}`}
                      type="text/html"
                      src={`https://www.youtube.com/embed/${part}?autoplay=0&origin=http://http://localhost:8000"`}
                    />
                  </div>
                ) : (
                  <ChapterContent
                    key={i}
                    className="mv4"
                    dangerouslySetInnerHTML={{
                      __html: part,
                    }}
                  />
                ),
            )}
          <div className="w-100 pa3 tl">
            <Link to={nextLink}>
              <Button type="primary" size="large">
                {nextButton}
              </Button>
            </Link>
          </div>
        </ContentWrapper>
      </div>
    )
  }
}

export default Chapter

// $FlowIgnore
export const pageQuery = graphql`
  query chapterQuery($slug: String!, $locale: String!) {
    contentfulChapter(slug: {eq: $slug}, node_locale: {eq: $locale}) {
      title
      order
      content {
        childMarkdownRemark {
          html
        }
      }
      course {
        slug
        title
        section {
          slug
          title
        }
        chapter {
          title
          slug
          order
        }
      }
    }
    contentfulWebsite(node_locale: {eq: $locale}) {
      nextButton
    }
  }
`
