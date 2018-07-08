// @flow
import Button from 'components/Button'
import Link from 'gatsby-link'
import * as React from 'react'

type Props = {
  difficulties: Array<{}>,
  t: {[string]: string},
}
const NavigationButtons = ({difficulties, t}: Props) =>
  difficulties ? (
    <div className="mb4 ph6-ns ph4 flex-ns items-center">
      <h3 className="mr3-ns">{t.quizCTA}:</h3>
      {difficulties.map(({title, path}) => (
        <div key={title} className="mv2 mr3 mr4-ns dib">
          <Link className="no-underline" to={path}>
            <Button raised>{t[title]}</Button>
          </Link>
        </div>
      ))}
    </div>
  ) : null
export default NavigationButtons
