// @flow
import QuizsContainer from 'modules/Quizs'
import R from 'ramda'
import * as React from 'react'

const filterLanguage = (locale) => R.filter(R.propEq('locale', locale))
const filterStrings = R.curry((locale, str) =>
  R.evolve(
    {
      strings: filterLanguage(locale),
    },
    str,
  ),
)
const filterQuizs = (difficulty) => R.propEq('difficulty', difficulty)
const enhanceChapter = (locale, difficulty) =>
  R.evolve({
    strings: filterLanguage(locale),
    quizs: R.compose(
      R.filter(filterQuizs(difficulty)),
      R.map(filterStrings(locale)),
    ),
  })
const enhance = (props, locale, difficulty) =>
  R.over(
    R.lensPath(['data', 'chapter']),
    enhanceChapter(locale, difficulty),
    props,
  )

type Strings = Array<{locale: string}>
type Props = {
  data: {
    chapter: {
      id: string,
      slug: string,
      strings: Strings,
      quizs: Array<{
        difficulty: number,
        id: string,
        strings: Strings,
        type: string,
      }>,
    },
  },
  pathContext: {
    difficulty: number,
    locale: string,
  },
}

const Quizs = (props: Props) => (
  <QuizsContainer
    {...enhance(props, props.pathContext.locale, props.pathContext.difficulty)}
  />
)

export default Quizs

// $FlowIgnore
export const pageQuery = graphql`
  query quizQuery($locale: String!, $slug: String!) {
    chapter: feathersChapters(slug: {eq: $slug}) {
      id
      slug
      strings: chaptersStrings {
        locale
        title
      }
      quizs {
        difficulty
        id
        type
        strings: quizsStrings {
          locale
          data
        }
      }
    }
    translations: feathersTranslations(locale: {eq: $locale}) {
      chooseACategoryTitle
      fillInTheBlankTitle
      quiz
      quizTrue
      quizFalse
      start
    }
    otherLocaleTranslations: feathersTranslations(locale: {ne: $locale}) {
      localeName
      localePath
    }
  }
`
