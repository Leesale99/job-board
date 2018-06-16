import React from 'react';
import styled from 'styled-components';

import { Input, Button } from '../ui';

const SearchBarWrapper = styled.div`
  padding: 1.5rem;
  background: #fff;
  grid-area: search-bar;
  grid-column: 1 / -1;
  border-top: 1px solid ${({ theme }) => theme.getColor('borderColor')};
`;

const StyledSearchBar = styled.div`
  display: grid;
  grid-template-columns: minmax(20rem, 2fr) auto minmax(10rem, 1fr) auto;
  grid-column-gap: 1.5rem;
  max-width: 114rem;
  margin: 0 auto;
`;

const SearchBar = () => (
  <SearchBarWrapper>
    <StyledSearchBar>
      <Input placeholder="Job Title, Keywords or Company" />
      <Input placeholder="Jobs" />
      <Input placeholder="Location" />
      <Button>Search</Button>
    </StyledSearchBar>
  </SearchBarWrapper>
);

export default SearchBar;
