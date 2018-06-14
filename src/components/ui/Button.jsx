// @flow

import styled, { css } from 'styled-components';

type Props = {
  color: string,
  size: string,
  shape: string,
  outline: boolean,
  theme: {
    getColor: string => string,
    getFontSize: string => string,
    getBtnSize: string => string,
    getBtnShape: string => string
  }
};

const Button = styled.button`
  background: ${({ color, outline, theme }: Props) =>
    outline ? 'transparent' : theme.getColor(color)};
  color: ${({ color, outline, theme }: Props) =>
    outline ? theme.getColor(color) : theme.getColor('light')};
  margin: 1em;
  padding: 0.916em 1.666em;
  font-size: ${({ size, theme }: Props) => theme.getBtnSize(size)};
  line-height: 1.625;
  text-transform: uppercase;
  letter-spacing: 0.2px;
  font-weight: 700;
  height: auto;
  border: 2px solid ${({ color, theme }: Props) => theme.getColor(color)};
  border-radius: ${({ shape, theme }: Props) => theme.getBtnShape(shape)};
  -webkit-font-smoothing: antialiased;
  transition: all 0.2s ease-in-out;
  height: auto;
  cursor: pointer;

  &:hover {
    background: ${({ color, outline, theme }: Props) =>
      outline ? theme.getColor(color) : theme.getColor('bgHover')};
    color: #fff;
    border-color: ${({ color, outline, theme }: Props) =>
      outline ? theme.getColor(color) : theme.getColor('bgHover')};
  }

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background: ${theme.getColor('disabled')};
      border-color: ${theme.getColor('disabled')};
      cursor: not-allowed;

      &:hover {
        background: ${theme.getColor('disabled')};
        border-color: ${theme.getColor('disabled')};
      }
    `};
`;

Button.defaultProps = {
  color: 'primary',
  size: 'regular',
  shape: 'regular'
};

export default Button;
