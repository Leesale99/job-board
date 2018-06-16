// @flow

import React from 'react';
import styled from 'styled-components';

import { H2, Input } from '../components/ui';
import SearchResult from '../components/search/Result';

// import logoTipico from '../images/logo-tipico.png';
import logoCatena from '../images/logo-catena.png';
// import logoLeoVegas from '../images/logo-leoVegas.png';

const SearchPanel = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'panel-header panel-header'
    'panel-sidebar panel-main';
  background: #fff;
  height: 100%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);

  .search-panel__header {
    grid-area: panel-header;
  }

  .search-panel__sidebar {
    grid-area: panel-sidebar;
    border-right: 1px solid ${({ theme }) => theme.getColor('borderColor')};
    overflow-y: scroll;
  }

  .search-panel__main {
    grid-area: panel-main;
  }

  .filter {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    grid-column-gap: 1.5rem;
    padding: 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.getColor('borderColor')};
  }

  .results {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

const ScreensHome = () => {
  return (
    <SearchPanel className="search-panel">
      <header className="search-panel__header">
        <div className="filter">
          <Input small type="text" placeholder="Job Type" />
          <Input small type="text" placeholder="Date Posted" />
          <Input small type="text" placeholder="Salary range" />
        </div>
      </header>

      <div className="search-panel__sidebar">
        <ul className="results">
          {Array.from({ length: 18 }, () => (
            <SearchResult
              img={logoCatena}
              title="Front End/Full Stack Developer"
              date="12 days ago"
              name="Catena Media"
              location="Sliema"
            />
          ))}
        </ul>
      </div>
      <div className="search-panel__main">
        <article className="details">
          <header className="details__header">
            <H2>Job Title</H2>
          </header>
        </article>
      </div>
    </SearchPanel>
  );
};

export default ScreensHome;
