import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.div`
  ${'' /* position: fixed;
  top: 0;
  width: 100%; */} height: 6rem;
  background: ${({ theme }) => theme.getColor('light')};
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  ${'' /* box-shadow: 0 0 8px rgba(0, 0, 0, 0.08); */}
  border: 1px solid ${({ theme }) => theme.getColor('borderColor')}
  z-index: 10;
  grid-area: header;

  .logo {
    min-width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
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
      padding: 10px;

      & > * {
        text-decoration: none;
        color: ${({ theme }) => theme.getColor('baseText')};
      }
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="logo">Logo text</div>
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
  </StyledHeader>
);

export default Header;
