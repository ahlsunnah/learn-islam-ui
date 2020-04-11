import Button from 'components/Button'
import Card from 'components/Card'
import RawHTML from 'components/RawHTML'
import {Link} from 'gatsby'
import {Styled} from 'theme-ui'
import React from 'react'
import {THomeTrackFragment, THomeTranslationsFragment} from '../../graphqlTypes'

interface IProps {
  localePath: string
  t: THomeTranslationsFragment
}
const HomeTrackCard = ({
  localePath,
  slug,
  soon,
  translations,
  t,
}: THomeTrackFragment & IProps) => {
  const s = translations[0]
  return (
    <Card
      className="mt3 ph3 pv1 flex flex-column flex-row-l justify-between items-center"
      rounded
    >
      <div className="mh2 flex flex-column item-center item-start-l">
        <h2 className="mb1 f5 self-center self-start-l">{s.title}</h2>
        <Styled.p as={RawHTML} className="child-p-mt0 black-50">
          {s.description}
        </Styled.p>
      </div>
      {soon ? (
        <Button
          className="mv2 cursor-default no-underline"
          disabled
          raised
          rounded
        >
          {t.soon}
        </Button>
      ) : (
        <Link className="mv2 no-underline" to={`${localePath}${slug}/`}>
          <Button raised rounded>
            {t.start}
          </Button>
        </Link>
      )}
    </Card>
  )
}

export default HomeTrackCard
