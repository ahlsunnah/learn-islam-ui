// @flow
import BlueHero from 'components/BlueHero'
import HomeFooter from 'components/HomeFooter'
import * as React from 'react'
import RawHTML from 'components/RawHTML'
import './styles.scss'

type Props = {
  data: {
    firstTrack: {
      slug: string,
    },
    otherLocaleTranslations: Object,
    translations: Object,
  },
  pathContext: {
    otherLanguagePath: string,
  },
}
const AboutUsContainer = ({data, pathContext: {otherLanguagePath}}: Props) => (
  <div>
    <BlueHero
      {...data}
      otherLanguagePath={otherLanguagePath}
      title={data.translations.aboutUsPageTitle}
    />
    <RawHTML className="about-us-content center pt3 pb4 ph3 ph4-m ph0-l tj">
      {data.translations.aboutUsPageContent}
    </RawHTML>
    <HomeFooter
      {...data.translations}
      firstTrackSlug={`${data.translations.localePath}${data.firstTrack.slug}`}
    />
  </div>
)
export default AboutUsContainer
