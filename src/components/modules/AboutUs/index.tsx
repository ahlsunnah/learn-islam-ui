import { useTranslation } from 'react-i18next'
import BlueHero from 'components/molecules/Hero/BlueHero'
import HomeFooter from 'components/molecules/Footer/HomeFooter'
import React from 'react'
import RawHTML from 'components/RawHTML'
import './styles.scss'
import { IAboutUsProps } from '../../../types/aboutUs'

const AboutUsContainer = ({ data }: IAboutUsProps) => {
  const { t } = useTranslation()
  return (
    <div>
      <BlueHero {...data} title={t('aboutUsPageTitle')} />
      <RawHTML className="about-us-content center pt3 pb4 ph3 ph4-m ph0-l">{t('aboutUsPageContent')}</RawHTML>
      <HomeFooter firstTrackSlug={`${t('localePath')}${data.api.tracks[0] && data.api.tracks[0].slug}`} />
    </div>
  )
}
export default AboutUsContainer
