// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';

import { media } from '../theme';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ScreensHome from './Home';
import ScreensJobs from './Jobs';
import ScreensLogin from './Login';

// Global Styles
injectGlobal`
html {
  font-size: 62.5%;
  box-sizing: border-box;
}


body {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.5rem;
  color: #686868;
  background: #f8f8f8;
}

*, ::before, ::after {
  box-sizing: inherit;
}

:root {
  --space1: 0.9rem;
  --space2: 1.8rem;
  --space3: 3.6rem;
  --space4: 4.5rem;
  --space5: 7.2rem;
}

a {
  color: #686868;
}

button {
  background: transparent;
  border: none;
  padding: 0
}

`;

const Container = styled.div`
  display: grid;
  grid-template-areas:
    'header header header'
    '.      main   .'
    'footer footer footer';
  grid-template-columns: 1fr 114rem 1fr;
  grid-template-rows: auto 1fr auto;
  grid-row-gap: 2rem;

  ${media.xl`
    grid-template-columns: 1.5rem 1fr 1.5rem;
  `};
`;

const ScreensRoot = () => (
  <Container className="container">
    <Header />
    <Switch>
      <Route exact path="/" component={ScreensHome} />
      <Route path="/login" component={ScreensLogin} />
      <Route path="/jobs" component={ScreensJobs} />
      {/* <Route path="/companies" component={ScreensCompanies} /> */}
    </Switch>
    <Footer />
  </Container>
);

export default ScreensRoot;
