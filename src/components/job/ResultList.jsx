// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import ResultCard from './ResultCard';

import { GET_JOBS, GET_COMPANIES, GET_CANDIDATES } from '../../constants';

const StyledResultList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

type S = {
  activeResultIndex: number
};

class ResultList extends Component<{ category: string }, S> {
  state = {
    activeResultIndex: 0
  };

  handleResultCardClick = (
    event: | SyntheticEvent<HTMLLIElement>
      | SyntheticKeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (event.keyCode === 13 || event.type === 'click') {
      this.setState({ activeResultIndex: index });
    }
    return;
  };

  render() {
    const { category } = this.props;
    const getQuery = () => {
      switch (category) {
        case 'jobs':
          return GET_JOBS;
        case 'companies':
          return GET_COMPANIES;
        case 'candidates':
          return GET_CANDIDATES;
        default:
          return GET_JOBS;
      }
    };

    return (
      <StyledResultList className="results">
        <Query query={getQuery()}>
          {({ loading, error, data }) => {
            if (loading) return <li>loading...</li>;
            if (error) return <li>error...</li>;

            return data[category].map((result, index) => (
              <ResultCard
                key={result.id}
                data={result}
                isActive={this.state.activeResultIndex === index}
                isSaved={false}
                onResultCardClick={(
                  e: | SyntheticEvent<HTMLLIElement>
                    | SyntheticKeyboardEvent<HTMLLIElement>
                ) => this.handleResultCardClick(e, index)}
              />
            ));
          }}
        </Query>
      </StyledResultList>
    );
  }
}

export default ResultList;
