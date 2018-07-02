// @flow

import React from 'react';
import { Query } from 'react-apollo';
import { H2 } from '../ui';
import { GET_JOB } from '../../graphql';

const SearchResultDetails = (props: { resultId: string }) => {
  return (
    <Query query={GET_JOB} variables={{ id: props.resultId }}>
      {({ loading, error, data: { job } }) => {
        if (loading || !job) return 'Loading...';
        if (error) return `Error! ${error.message}`;

        const {
          title,
          description,
          createdAt,
          company: { name: companyName, location: companyLocation }
        } = job;

        return (
          <article className="details">
            <header className="details__header">
              <H2>{title}</H2>
            </header>
            <section>
              <p>{description}</p>
              <p>{createdAt}</p>
              <p>{companyName}</p>
              <p>{companyLocation}</p>
            </section>
          </article>
        );
      }}
    </Query>
  );
};

export default SearchResultDetails;
