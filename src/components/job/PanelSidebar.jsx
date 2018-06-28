// @flow

import React from 'react';
import { Query, Mutation } from 'react-apollo';
import SearchResultList from './ResultList';

import {
  GET_JOBS,
  GET_COMPANIES,
  GET_CANDIDATES,
  SET_ACTIVE_RESULT
} from '../../graphql';

const SearchPanelSidebar = (props: { category: string }) => {
  const { category } = props;
  const getQuery = () => {
    switch (category) {
      case 'jobs':
        return GET_JOBS;
      case 'companies':
        return GET_COMPANIES;
      case 'candidates':
        return GET_CANDIDATES;
      default:
        throw new Error(`Unknown category ${category}`);
    }
  };

  return (
    <div className="search-panel__sidebar">
      <Query query={getQuery()}>
        {({ loading, error, data }) => {
          if (loading) return <p>loading...</p>;
          if (error) return <p>error...</p>;

          return (
            <Mutation mutation={SET_ACTIVE_RESULT}>
              {setActiveResult => (
                <SearchResultList
                  setActiveResult={setActiveResult}
                  data={data[category]}
                />
              )}
            </Mutation>
          );
        }}
      </Query>
    </div>
  );
};

export default SearchPanelSidebar;
