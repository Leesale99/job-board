// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import type { RouterHistory } from 'react-router-dom';
import SearchBar from '../layout/SearchBar';
import { AUTH_TOKEN } from '../../constants';

const StyledHeader = styled.header`
  ${'' /* position: fixed;
  top: 0;
  width: 100%; */}
  background: ${(props: { theme: Theme, dark: string }) =>
    props.dark
      ? props.theme.getColor('primaryDark')
      : props.theme.getColor('light')};
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  box-shadow: 0 0 8px ${props =>
    props.dark ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.08)'};
  z-index: 10;
  grid-area: header;

  .logo {
    min-width: 16rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props: { theme: Theme }) =>
      props.dark
        ? props.theme.getColor('primary')
        : props.theme.getColor('primaryDark')};
    font-size: 2.6rem;
    font-weight: 700;
    letter-spacing: -2px;
    text-decoration: none;
    
    span {
      color: ${(props: { theme: Theme }) => props.theme.getColor('primary')};
    }
  }

  .main-nav {
    &__navigation {
      margin: 0;
      padding: 0 1.5rem 0 0;
      list-style: none;
      height: 100%;
      display: flex;
      justify-content: flex-end;
    }

    &__item {
      display: flex;
      align-items: center;
      padding: 1.5rem;
      

      & > * {
        text-decoration: none;
        color: ${props =>
          props.dark
            ? props.theme.getColor('light')
            : props.theme.getColor('baseText')};
      }
    }
  }
`;

class Header extends Component<{ history: RouterHistory }> {
  state = {
    pagesWithSearchBar: ['/jobs', '/companies']
  };

  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    const currentPage = this.props.location.pathname;

    const renderSearchBar = () => {
      const { pagesWithSearchBar } = this.state;

      if (pagesWithSearchBar.includes(currentPage)) {
        return <SearchBar />;
      }
    };

    return (
      <StyledHeader dark={currentPage === '/'} className="header">
        <Link to="/" className="logo">
          Jobs<span>Board</span>
        </Link>
        <nav className="main-nav">
          <ul className="main-nav__navigation">
            <li className="main-nav__item">
              <Link to="/jobs">Jobs</Link>
            </li>
            <li className="main-nav__item">
              <Link to="/companies">Companies</Link>
            </li>
            {authToken ? (
              <li className="main-nav__item">
                <button
                  link
                  onClick={() => {
                    localStorage.removeItem(AUTH_TOKEN);
                    this.props.history.push('/');
                  }}
                >
                  logout
                </button>
              </li>
            ) : (
              <li className="main-nav__item">
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </nav>
        {renderSearchBar()}
      </StyledHeader>
    );
  }
}

export default withRouter(Header);
