// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import SearchResultTab from './ResultTab';

const StyledSearchResultTab = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

type P = {
  data: Array<{ id: string }>,
  setActiveResult: ({ variables: { id: string } }) => void
};

type S = { activeResult: string };

type E = SyntheticEvent<HTMLLIElement> | SyntheticKeyboardEvent<HTMLLIElement>;

class SearchResultList extends Component<P, S> {
  state = {
    activeResult: ''
  };

  componentWillMount() {
    this.setState({ activeResult: this.props.data[0].id });
  }

  componentDidMount() {
    this.props.setActiveResult({ variables: { id: this.state.activeResult } });
  }

  handleTabClick = (event: E, id: string) => {
    if ((event && event.keyCode === 13) || (event && event.type === 'click')) {
      this.setState({ activeResult: id });
    }
    return;
  };

  render() {
    return (
      <StyledSearchResultTab>
        {this.props.data.map(result => (
          <SearchResultTab
            key={result.id}
            data={result}
            isActive={this.state.activeResult === result.id}
            isSaved={false}
            onTabClick={(e: E) => this.handleTabClick(e, result.id)}
          />
        ))}
      </StyledSearchResultTab>
    );
  }
}

export default SearchResultList;
