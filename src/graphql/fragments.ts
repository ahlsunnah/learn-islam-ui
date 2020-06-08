import gql from 'graphql-tag'

export const chapterPageTrack = gql`
  fragment ChapterPageTrack on tracks {
    id
    slug
    translations(where: { locale_code: { _eq: fr } }) {
      title
    }
    courses {
      id
      slug
      quiz_difficulties {
        quiz_difficulties
      }
      chapters {
        id
        slug
        translations(where: { locale_code: { _eq: fr } }) {
          title
        }
      }
      translations(where: { locale_code: { _eq: fr } }) {
        id
        locale_code
        title
      }
    }
  }
`
