import { css } from 'styled-components';
import { BREAK_POINTS } from '../constants';

const media = Object.keys(BREAK_POINTS).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${BREAK_POINTS[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default media;
