import styled, { css } from 'styled-components';
import { media } from '../../theme';

const Heading = styled.h1`
  font-weight: 400;
  margin: 0;
  color: ${({ theme, color }) =>
    color ? theme.getColor(color) : theme.getColor('headingText')};
  line-height: 1.38;
`;

export const H1 = Heading.extend`
  font-size: ${({ theme }) => theme.getFontSize('h1')};
  ${props =>
    props.introText &&
    css`
      font-size: 4.8rem;
      text-align: center;
      font-weight: 700;
      letter-spacing: -2px;
      text-transform: capitalize;

      & > span {
        color: ${props => props.theme.getColor('light')};
      }
    `};

  ${media.md`
    font-size: ${({ theme }) => theme.getFontSize('h2')} 
  `};
`;

export const H2 = Heading.withComponent('h2').extend`
  font-size: ${({ theme }) => theme.getFontSize('h2')};

  ${media.md`
    font-size: ${({ theme }) => theme.getFontSize('h3')} 
  `};
`;

export const H3 = Heading.withComponent('h3').extend`
  font-size: ${({ theme }) => theme.getFontSize('h3')};

  ${media.md`
    font-size: ${({ theme }) => theme.getFontSize('h4')} 
  `};
`;

export const H4 = Heading.withComponent('h4').extend`
  font-size: ${({ theme }) => theme.getFontSize('h4')};

  ${media.md`
    font-size: ${({ theme }) => theme.getFontSize('h5')} 
  `};
`;

export const H5 = Heading.withComponent('h5').extend`
  font-size: ${({ theme }) => theme.getFontSize('h5')};

  ${media.md`
    font-size: ${({ theme }) => theme.getFontSize('h6')} 
  `};
`;

export const H6 = Heading.withComponent('h6').extend`
  font-size: ${({ theme }) => theme.getFontSize('h6')};
`;

export const P = styled.p`
  margin: var(--space1) 0 0;
`;
