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
import RawHTML from '../components/RawHTML'

const SIDEBAR_WIDTH = '18rem'

const StyledChapterSidebar = styled(ChapterSidebar)`
  width: ${(props) => (props.isSideBarVisible ? SIDEBAR_WIDTH : '0')};
  transition: width 0.5s ease;
`
const ContentWrapper = styled.div`
  flex: 1;
  margin-left: ${(props) => (props.isSideBarVisible ? SIDEBAR_WIDTH : '0')};
  transition: margin 0.5s ease;
`
const ChapterContent = styled(RawHTML)`
  p {
    font-size: 1.25rem;
  }
`
type Content = {
  childMarkdownRemark: {html: string},
}
type Props = {
  data: {
    chapter: {
      content: Content,
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
  arabicChapter?: {
    content: Content,
    title: string,
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
  splitContent = (content: Content) =>
    content &&
    content.childMarkdownRemark.html
      .split(/<p><a href="https?:\/\/www.youtube.com\/watch\?v=(\w+)".*/)
      .filter((part) => part !== '')
  indexOtherContent = (otherContent: Content, arabicParts: Array<string>) => {
    const otherParts = otherContent.childMarkdownRemark.html.split(/<hr>/)
    let currentIndex = 0
    return arabicParts.map((arabicPart) => {
      if (!/^\w\w/.test(arabicPart)) {
        currentIndex += 1
        return otherParts[currentIndex - 1]
      }
      return undefined
    })
  }
  render() {
    const {data, pathContext} = this.props
    const {isSideBarVisible} = this.state
    const {arabicChapter, chapter, contentfulWebsite} = data
    const {languagePath} = pathContext
    const {nextButton} = contentfulWebsite
    // We split the content and youtube links (videos are in the arabic content)
    const contentParts: Array<string> = this.splitContent(
      (arabicChapter || chapter).content,
    )
    // If we have content in arabic we want to index the othe language content
    // according to videos in arabic content
    const otherContentParts: Array<string> = arabicChapter
      ? this.indexOtherContent(chapter.content, contentParts)
      : []
    console.log(otherContentParts)
    // We get the nextChapter if there is one
    const nextChapter = chapter.course.chapter
      .slice()
      .sort((a, b) => a.order - b.order)
      .find(({order}) => order > chapter.order)
    const nextLink = nextChapter
      ? `${languagePath}${chapter.course.section.slug}/${chapter.course.slug}/${
          nextChapter.slug
        }/`
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
            <h1
              className="mv2 tc"
              css={`
                flex: 2;
              `}
            >
              {chapter.title}
              {arabicChapter && (
                <span className="pl3">{arabicChapter.title}</span>
              )}
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
                      src={`https://www.youtube.com/embed/${part}?autoplay=0`}
                    />
                  </div>
                ) : (
                  <div key={i}>
                    {arabicChapter && (
                      <ChapterContent className="mv4">
                        {otherContentParts[i]}
                      </ChapterContent>
                    )}
                    <ChapterContent className="mv4">{part}</ChapterContent>
                  </div>
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
  query chapterQuery(
    $slug: String!
    $locale: String!
    $arabic: Boolean!
    $arabicLocale: String!
  ) {
    chapter: contentfulChapter(slug: {eq: $slug}, node_locale: {eq: $locale}) {
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
    arabicChapter: contentfulChapter(
      slug: {eq: $slug}
      node_locale: {eq: $arabicLocale}
    ) @skip(if: $arabic) {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
    contentfulWebsite(node_locale: {eq: $locale}) {
      nextButton
    }
  }
`
