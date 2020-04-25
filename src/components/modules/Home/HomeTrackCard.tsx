import Button from 'components/atoms/Button/Button'
import _get from 'lodash/get'
import Card from 'components/atoms/Card/Card'
import RawHTML from 'components/RawHTML'
import { Link } from 'gatsby'
import { Styled } from 'theme-ui'
import React, { useMemo } from 'react'
import { THomeTrackFragment } from '../../../graphqlTypes'
import { useTranslation } from 'react-i18next'

type Props = {
  localePath: string
}

const HomeTrackCard = ({ localePath, slug, soon, translations }: THomeTrackFragment & Props) => {
  const { t, i18n } = useTranslation()

  const s = useMemo(() => translations.filter((translation) => translation.locale_code === i18n.language)[0], [
    i18n,
    translations,
  ])

  return (
    <Card className="mt3 ph3 pv1 flex flex-column flex-row-l justify-between items-center" rounded>
      <div className="mh2 flex flex-column item-center item-start-l">
        <h2 className="mb1 f5 self-center self-start-l">{_get(s, 'title')}</h2>
        <Styled.p as={RawHTML} className="child-p-mt0 black-50">
          {s.description}
        </Styled.p>
      </div>
      {soon ? (
        <Button className="mv2 cursor-default no-underline" disabled raised rounded>
          {t('soon')}
        </Button>
      ) : (
        <Link className="mv2 no-underline" to={`${localePath}${slug}/`}>
          <Button raised rounded>
            {t('start')}
          </Button>
        </Link>
      )}
    </Card>
  )
}

export default HomeTrackCard
