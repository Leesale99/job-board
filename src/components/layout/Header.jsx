import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import SearchBar from '../layout/SearchBar';

const AUTH_TOKEN = 'auth-token';

const StyledHeader = styled.header`
  ${'' /* position: fixed;
  top: 0;
  width: 100%; */}
  background: ${({ theme }) => theme.getColor('light')};
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);
  z-index: 10;
  grid-area: header;

  .logo {
    min-width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.getColor('primaryDark')};
    font-size: 2.8rem;
    font-weight: 700;
    letter-spacing: -2px;
    text-decoration: none;
    
    span {
      color: ${({ theme }) => theme.getColor('primary')};
    }
  }

  .main-nav {
    &__navigation {
      margin: 0;
      padding: 0;
      list-style: none;
      height: 100%;
      display: flex;
      justify-content: flex-end;
    }

    &__item {
      display: flex;
      align-items: center;
      padding: 2rem;

      & > * {
        text-decoration: none;
        color: ${({ theme }) => theme.getColor('baseText')};
      }
    }
  }
`;

const Header = props => {
  const authToken = localStorage.getItem(AUTH_TOKEN);
  return (
    <StyledHeader className="header">
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
                onClick={() => {
                  localStorage.removeItem(AUTH_TOKEN);
                  props.history.push('/');
                }}
              >
                logout
              </button>
            </li>
          ) : (
            <li className="main-nav__item">
              <Link to="/login">login</Link>
            </li>
          )}
        </ul>
      </nav>
      <SearchBar />
    </StyledHeader>
  );
};

export default withRouter(Header);
