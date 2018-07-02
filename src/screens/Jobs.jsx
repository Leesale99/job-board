// @flow

import React from 'react';
import Main from '../components/layout/Main';
import JobsPanel from '../components/job/Panel';

const ScreensJobs = () => (
  <Main withSearchBar className="main">
    <JobsPanel />
  </Main>
);

export default ScreensJobs;
