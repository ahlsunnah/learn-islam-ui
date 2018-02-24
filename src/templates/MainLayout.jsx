// @flow
import * as React from 'react'
import 'tachyons' // eslint-disable-line
import LanguagesNav from '../components/LanguagesNav'
import './styles.css'

type Props = {
  children: Function,
  location: {
    pathname: string,
  },
  data: {
    contentfulWebsite: {
      languageChoiceLabel: string,
    },
  },
  layoutContext: {
    languages: Array<Object>,
    locale: string,
  },
  location: {
    pathname: string,
  },
}
const MainLayout = ({children, data, layoutContext, location}: Props) => {
  const {languageChoiceLabel} = data.contentfulWebsite
  const {languages} = layoutContext
  const {pathname} = location
  return (
    <div>
      <LanguagesNav
        languageChoiceLabel={languageChoiceLabel}
        languages={languages}
        pathname={pathname}
      />
      {children()}
    </div>
  )
}

export default MainLayout

export const pageQuery = graphql`
  query mainWrapperQuery($locale: String!) {
    contentfulWebsite(node_locale: {eq: $locale}) {
      languageChoiceLabel
    }
  }
`
