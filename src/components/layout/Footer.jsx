import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  grid-area: footer;
  padding: 1rem;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);

  & > * {
    margin: 0;
  }

  .logo {
    color: ${({ theme }) => theme.getColor('primaryDark')};
    font-weight: 700;
    letter-spacing: -1px;

    span {
      color: ${({ theme }) => theme.getColor('primary')};
    }
  }
`;

const Footer = () => (
  <StyledFooter className="footer">
    <p>
      Copyright &copy; 2018{' '}
      <span className="logo">
        Jobs<span>Board</span>
      </span>, All rights reserved.
    </p>
  </StyledFooter>
);

export default Footer;
