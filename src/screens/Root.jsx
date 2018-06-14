// @flow

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

import { theme } from '../theme';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SearchBar from '../components/layout/SearchBar';
import ScreensHome from './Home';

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
    'search-bar search-bar search-bar'
    '.      main   .'
    'footer footer footer';
`;

const Main = styled.main`
  margin: 6rem auto 0;
  grid-area: main;
  max-width: 114rem;
  width: 100%;
`;

const ScreensRoot = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Container>
        <Header />
        <SearchBar />
        <Main>
          <Switch>
            <Route path="/" component={ScreensHome} />
            <Route path="/edit" component={ScreensHome} />
          </Switch>
        </Main>
        <Footer />
      </Container>
    </Router>
  </ThemeProvider>
);

export default ScreensRoot;
