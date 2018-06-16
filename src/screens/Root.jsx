// @flow

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

import { theme } from '../theme';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ScreensHome from './Home';
import ScreensSearch from './Search';

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
`;

const Main = styled.main`
  grid-area: main;
  width: 100%;
  height: calc(100vh - 22.1rem);
`;

const ScreensRoot = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Container className="container">
        <Header />
        <Main className="main">
          <Switch>
            <Route exact path="/" component={ScreensHome} />
            <Route path="/search" component={ScreensSearch} />
          </Switch>
        </Main>
        <Footer />
      </Container>
    </Router>
  </ThemeProvider>
);

export default ScreensRoot;
