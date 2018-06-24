// @flow
import Button from 'components/Button'
import Link from 'gatsby-link'
import * as React from 'react'

type Props = {
  difficultiesLinks: {[string]: string},
  t: {[string]: string},
}
const NavigationButtons = ({difficultiesLinks, t}: Props) =>
  difficultiesLinks ? (
    <div className="mb4 ph6-ns ph4 flex-ns items-center">
      <h3 className="mr3-ns">{t.quizCTA}:</h3>
      {Object.entries(difficultiesLinks).map(([difficulty, link]) => (
        <div key={difficulty} className="mv2 mr3 mr4-ns dib">
          <Link className="no-underline" to={link}>
            <Button raised>{t[difficulty]}</Button>
          </Link>
        </div>
      ))}
    </div>
  ) : null
export default NavigationButtons
