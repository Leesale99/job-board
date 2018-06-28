// @flow

import React from 'react';
import { Query } from 'react-apollo';
import { H2 } from '../ui';

import { GET_ACTIVE_RESULT } from '../../graphql';

const ResultDetails = () => (
  <Query query={GET_ACTIVE_RESULT}>
    {({ data }) => {
      const { id } = data.activeResult;
      return (
        <article className="details">
          <header className="details__header">
            <H2>{id}</H2>
          </header>
          <section>Content</section>
        </article>
      );
    }}
  </Query>
);

export default ResultDetails;
