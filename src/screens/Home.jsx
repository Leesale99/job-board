// @flow

import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { H1 } from '../components/ui';

const GET_JOBS = gql`
  {
    jobs {
      id
      title
      description
      company {
        id
        name
        description
        location
        industry
      }
    }
  }
`;

const ScreensHome = () => (
  <Query query={GET_JOBS}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.jobs.map(job => (
        <div key={job.id}>
          <H1>{`${job.title}: ${job.description}`}</H1>
        </div>
      ));
    }}
  </Query>
);

export default ScreensHome;
