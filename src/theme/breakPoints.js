import { css } from 'styled-components';

const breakPoints = {
  lg: 992,
  md: 768,
  sm: 376
};

const media = Object.keys(breakPoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakPoints[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default media;
