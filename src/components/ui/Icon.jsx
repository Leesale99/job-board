// @flow

import React from 'react';
import styled from 'styled-components';

const Icon = ({
  icon,
  size,
  color
}: {
  icon: string,
  size?: string,
  color?: string
}) => {
  const StyledIcon = styled.svg`
    fill: ${(props: {
      theme: {
        getColor: (?string) => string
      }
    }) => props.theme.getColor(color)};
    width: ${size}px;
    height: ${size}px;
  `;

  return (
    <StyledIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
      <path d={icon} />
    </StyledIcon>
  );
};

Icon.defaultProps = {
  size: '24',
  color: 'primary'
};

export default Icon;
