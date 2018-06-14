// @flow

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, injectGlobal } from 'styled-components';

import { theme } from '../theme';
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
  font-size: 1rem;
  color: #686868;
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

const ScreensRoot = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route path="/" component={ScreensHome} />
        <Route path="/edit" component={ScreensHome} />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default ScreensRoot;
