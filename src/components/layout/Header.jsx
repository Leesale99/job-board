import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchBar from '../layout/SearchBar';

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

const Header = () => (
  <StyledHeader className="header">
    <div className="logo">
      Jobs<span>Board</span>
    </div>
    <nav className="main-nav">
      <ul className="main-nav__navigation">
        <li className="main-nav__item">
          <Link to="/">Home</Link>
        </li>
        <li className="main-nav__item">
          <Link to="/">Home</Link>
        </li>
        <li className="main-nav__item">
          <Link to="/">Home</Link>
        </li>
        <li className="main-nav__item">
          <Link to="/">Home</Link>
        </li>
        <li className="main-nav__item">
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
    <SearchBar />
  </StyledHeader>
);

export default Header;
