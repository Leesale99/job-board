// @flow

import React from 'react';
import { Query } from 'react-apollo';
import SearchResultDetails from './ResultDetails';

import { GET_ACTIVE_RESULT } from '../../graphql';

const SearchPanelBody = () => (
  <Query query={GET_ACTIVE_RESULT}>
    {({ data }) => {
      const { id } = data.activeResult;

      return (
        <div className="search-panel__body">
          <SearchResultDetails resultId={id} />
        </div>
      );
    }}
  </Query>
);

export default SearchPanelBody;
