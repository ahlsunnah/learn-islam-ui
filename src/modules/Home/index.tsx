import HomeFooter from 'components/HomeFooter';
import React from 'react';
import HomeContentPresentation from './HomeContentPresentation';
import HomeFeatures from './HomeFeatures';
import HomeHero from './HomeHero';
import HomeNewsletter from './HomeNewsletter';
import { IHomePageProps } from 'types/home';

const HomeContainer = ({ data, pageContext: { otherLanguagePath } }: IHomePageProps) => (
  <div>
    <HomeHero {...data} otherLanguagePath={otherLanguagePath} />
    <HomeContentPresentation
      text={data.translations.siteContentPresentation}
      title={data.translations.homeContentTitle}
    />
    <HomeFeatures {...data.translations} />
    {/* <HomeCourses {...data.translations} /> */}
    {/* <div className="mdc-theme--primary-bg" style={{height: '3px'}} /> */}
    <HomeNewsletter {...data.translations} />
    <HomeFooter
      t={data.translations}
      dark
      firstTrackSlug={`${data.translations.localePath}${data.api.tracks[0] && data.api.tracks[0].slug}`}
    />
  </div>
);
export default HomeContainer;
