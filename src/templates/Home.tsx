import React from 'react';
import { useTranslation } from 'react-i18next';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import cx from 'classnames';
import HomeContainer from 'modules/Home';
import './styles.css';
import { IHomePageProps } from 'types/home';

const Home = (props: IHomePageProps): React.ReactNode => {
  const { i18n } = useTranslation();

  return (
    <div className={cx({ rtl: i18n.language === 'ar' })}>
      <Helmet>
        <html lang={i18n.language} />
      </Helmet>
      <HomeContainer {...props} />
    </div>
  );
};

export default Home;

// $FlowIgnore
export const pageQuery = graphql`
  fragment HomeTrack on api_tracks {
    id
    order
    slug
    soon
    translations {
      title
      description
      locale_code
    }
  }
  query homeQuery {
    api {
      tracks(limit: 3) {
        ...HomeTrack
      }
    }
  }
`;
