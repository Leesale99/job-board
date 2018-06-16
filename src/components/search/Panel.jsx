// @flow

import React, { Component } from 'react';
import styled from 'styled-components';

import { Input } from '../ui';
import ResultCard from './ResultCard';
import ResultDetails from './ResultDetails';

import logoTipico from '../../images/logo-tipico.png';
import logoCatena from '../../images/logo-catena.png';
import logoLeoVegas from '../../images/logo-leoVegas.png';

const JobsData = [
  {
    id: '1',
    img: logoCatena,
    title: 'Front End/Full Stack Developer',
    createdAt: '12 days ago',
    name: 'Catena Media',
    location: 'Sliema',
    isSaved: false
  },
  {
    id: '2',
    img: logoTipico,
    title: 'Front End/Full Stack Developer',
    createdAt: '12 days ago',
    name: 'Catena Media',
    location: 'Sliema',
    isSaved: true
  },
  {
    id: '3',
    img: logoLeoVegas,
    title: 'Front End/Full Stack Developer',
    createdAt: '12 days ago',
    name: 'Catena Media',
    location: 'Sliema',
    isSaved: true
  }
];

type StyledProps = { theme: { getColor: string => string } };

const StyledSearchPanel = styled.div`
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
    border-right: 1px solid
      ${({ theme }: StyledProps) => theme.getColor('borderColor')};
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
    border-bottom: 1px solid
      ${({ theme }: StyledProps) => theme.getColor('borderColor')};
  }

  .results {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

type S = {
  activeCard: string
};

class SearchPanel extends Component<{}, S> {
  state = {
    activeCard: ''
  };

  componentWillMount() {
    this.setState({ activeCard: JobsData[0].id });
  }

  handleResultCardAction = (
    event: | SyntheticEvent<HTMLLIElement>
      | SyntheticKeyboardEvent<HTMLButtonElement>,
    id: string
  ) => {
    event.stopPropagation();

    if (event.keyCode === 13 || event.type === 'click') {
      this.setState({ activeCard: id });
      return;
    }
  };

  render() {
    return (
      <StyledSearchPanel className="search-panel">
        <header className="search-panel__header">
          <div className="filter">
            <Input small type="text" placeholder="Job Type" />
            <Input small type="text" placeholder="Date Posted" />
            <Input small type="text" placeholder="Salary range" />
          </div>
        </header>

        <div className="search-panel__sidebar">
          <ul className="results">
            {JobsData.map(
              ({ id, img, title, createdAt, name, location, isSaved }) => {
                return (
                  <ResultCard
                    id={id}
                    key={id}
                    img={img}
                    title={title}
                    date={createdAt}
                    name={name}
                    location={location}
                    isActive={this.state.activeCard === id}
                    isSaved={isSaved}
                    onResultCardClick={(
                      e: | SyntheticEvent<HTMLLIElement>
                        | SyntheticKeyboardEvent<HTMLLIElement>
                    ) => this.handleResultCardAction(e, id)}
                    onResultCardKeyDown={(
                      e: | SyntheticEvent<HTMLLIElement>
                        | SyntheticKeyboardEvent<HTMLLIElement>
                    ) => this.handleResultCardAction(e, id)}
                  />
                );
              }
            )}
          </ul>
        </div>
        <div className="search-panel__main">
          <ResultDetails />
        </div>
      </StyledSearchPanel>
    );
  }
}

export default SearchPanel;
