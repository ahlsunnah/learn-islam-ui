// @flow
import * as React from 'react'
import Link from 'gatsby-link'

type Props = {
  className?: string,
  languageChoiceLabel: string,
  languages: Array<{
    languageName: string,
    languagePath: string,
  }>,
  pathname: string,
}
const LanguagesNav = ({
  className = '',
  languageChoiceLabel,
  languages,
  pathname,
}: Props) => {
  const pathnameWithoutLanguagePart = languages
    .reduce(
      (result, {languagePath}) => result.replace(languagePath.slice(1), ''),
      pathname,
    )
    .slice(1) // We don't need the beginning slash
  return (
    <div
      className={`absolute top-0 right-0 pa2 f6 bg-white z-9999 ${className}`}
    >
      <span className="fw6">{languageChoiceLabel}:</span>
      {languages.map(({languageName, languagePath}) => (
        <Link
          activeClassName="dn"
          className="ph1 underline"
          exact
          key={languageName}
          to={`${languagePath}${pathnameWithoutLanguagePart}`}
        >
          {languageName}
        </Link>
      ))}
    </div>
  )
}
export default LanguagesNav
