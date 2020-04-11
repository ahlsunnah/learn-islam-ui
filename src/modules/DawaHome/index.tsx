import React from 'react'
import {IDawaHomeProps} from 'types/dawaHome'
import {Link} from 'gatsby'
export const DawaHome: React.FC<IDawaHomeProps> = ({
  data: {
    api: {track},
  },
  pageContext: {locale, localePaths},
}) => {
  const localePath = localePaths[locale]
  const {slug: trackSlug, translations, courseSet} = track
  const {title, description} = translations.edges[0].node
  return (
    <>
      <h1>Ceci est notre croyance: Exercices</h1>
      <h2>{title}</h2>
      <p
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
      <ul>
        {courseSet.edges.map(
          ({
            node: {
              id,
              slug: courseSlug,
              translations: courseTranslations,
              quizDifficulties,
            },
          }): JSX.Element | null => {
            const {title} = courseTranslations.edges[0].node
            const difficulty = quizDifficulties[0]
            if (difficulty)
              return (
                <li key={id}>
                  <Link
                    to={`${localePath}${trackSlug}/${courseSlug}/ikhtibar-${difficulty}/`}
                  >
                    {title}
                  </Link>
                </li>
              )
            return null
          },
        )}
      </ul>
    </>
  )
}

export default DawaHome
