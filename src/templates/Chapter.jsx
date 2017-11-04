import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

const Chapter = ({data, pathContext}) => {
  const {contentfulChapter: chapter} = data
  const {languagePath, slug} = pathContext
  return (
    <div className="">
      <Helmet title={`${chapter.title}`} />
      <div className="tc">
        <h1>{chapter.title}</h1>
        {chapter.content && (
          <div
            dangerouslySetInnerHTML={{
              __html: chapter.content.childMarkdownRemark.html,
            }}
          />
        )}
        {// NAV
        chapter.course.chapter
          .slice()
          .sort((a, b) => a.order - b.order) // TODO: sort in the query ?
          .map(navChapter => (
            <div key={navChapter.slug}>
              <Link
                to={`${languagePath}${chapter.course.section.slug}/${chapter
                  .course.slug}/${navChapter.slug}`}
              >
                {navChapter.title}
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

export default Chapter

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
