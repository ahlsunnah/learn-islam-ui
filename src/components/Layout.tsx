import React from 'react';
import Footer from 'components/Footer';
import PropTypes from 'prop-types';
import { Styled, ThemeProvider } from 'theme-ui';
import theme from 'styles/theme';
import 'styles/fonts.scss';
import 'styles/theme.scss';
import '@material/react-ripple';
import { withTrans } from '../i18n/withTranslation';

interface IProps {
  children: JSX.Element;
}

const Layout = ({ children }: IProps) => (
  <ThemeProvider theme={theme}>
    <Styled.root>
      {children}
      <Footer />
    </Styled.root>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withTrans(Layout);
