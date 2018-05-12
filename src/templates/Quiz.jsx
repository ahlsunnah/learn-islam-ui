// @flow
import R from 'ramda'
import * as React from 'react'

const filterLanguage = (locale) => R.filter(R.propEq('locale', locale))
const filterLanguageWithArabic = (locale) =>
  R.filter(R.either(R.propEq('locale', locale), R.propEq('locale', 'ar')))
const filterStrings = R.curry((locale, str) =>
  R.evolve(
    {
      strings: filterLanguage(locale),
    },
    str,
  ),
)
const enhanceCourse = (locale) =>
  R.evolve({
    strings: filterLanguage(locale),
    chapters: R.map(filterStrings(locale)),
  })
const enhanceChapter = (locale) =>
  R.evolve({
    strings: filterLanguageWithArabic(locale),
    course: enhanceCourse(locale),
  })
const enhance = (props, locale) =>
  R.over(R.lensPath(['data', 'chapter']), enhanceChapter(locale), props)

type Strings = Array<{locale: string}>
type Props = {
  data: {
    chapter: {
      strings: Strings,
      course: {
        strings: Strings,
        chapters: Array<{
          strings: Strings,
        }>,
      },
    },
  },
  pathContext: {
    locale: string,
  },
}

const Quiz = (props: Props) => (
  //   <QuizContainer {...enhance(props, props.pathContext.locale)} />
  <div>TEST</div>
)

export default Quiz

// $FlowIgnore
export const pageQuery = graphql`
  query quizQuery($locale: String!, $slug: String!) {
    chapter: feathersChapters(slug: {eq: $slug}) {
      slug
      strings: chaptersStrings {
        locale
        title
      }
      quizs {
        difficulty
        type
        strings: quizsStrings {
          data
        }
      }
    }
    translations: feathersTranslations(locale: {eq: $locale}) {
      start
      quiz
    }
    otherLocaleTranslations: feathersTranslations(locale: {ne: $locale}) {
      localeName
      localePath
    }
  }
`
