import HomeFooter from 'components/HomeFooter';
import React from 'react';
import HomeContentPresentation from './HomeContentPresentation';
import HomeFeatures from './HomeFeatures';
import HomeHero from './HomeHero';
import HomeNewsletter from './HomeNewsletter';
import { IHomePageProps } from 'types/home';
import { useTranslation } from 'react-i18next';

const HomeContainer = ({ data, pageContext: { otherLanguagePath } }: IHomePageProps) => {
  const { t } = useTranslation();
  return (
    <div>
      <HomeHero {...data} otherLanguagePath={otherLanguagePath} />
      <HomeContentPresentation text={t('siteContentPresentation')} title={t('homeContentTitle')} />
      <HomeFeatures />
      {/* <HomeCourses {...data.translations} /> */}
      {/* <div className="mdc-theme--primary-bg" style={{height: '3px'}} /> */}
      <HomeNewsletter {...data.translations} />
      <HomeFooter dark firstTrackSlug={`${t('localePath')}${data.api.tracks[0] && data.api.tracks[0].slug}`} />
    </div>
  );
};
export default HomeContainer;
