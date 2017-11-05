// @flow
import * as React from 'react'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
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
      title: string,
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
    const {contentfulChapter: chapter} = data
    const {languagePath} = pathContext
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
                className="ml2 pa2 bg-transparent"
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
          {chapter.content && (
            <ChapterContent
              dangerouslySetInnerHTML={{
                __html: chapter.content.childMarkdownRemark.html,
              }}
            />
          )}
          {/* <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{__html: section.html}}
        /> */}
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
  }
`
