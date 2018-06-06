// @flow
import * as React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${props => (props.primary ? 'orange' : 'white')};
  color: ${props => (props.primary ? 'white' : 'orange')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid teal;
  border-radius: 3px;
`;

type Props = {
  children: React.Node,
  primary?: String
};

const Button = (props: Props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

Button.defaultProps = {
  primary: null
};

export default Button;
