// @flow

import React, { Component } from 'react';
import styled from 'styled-components';

import { ICONS } from '../constants';
import { Icon } from './ui';

type StyledProps = { theme: { getColor: string => string } }; // eslint-disable-line react/no-unused-prop-types

type S = {
  isSaved: boolean
};

type P = {
  isSaved: boolean
};

class SaveButton extends Component<P, S> {
  state = {
    isSaved: this.props.isSaved
  };

  _onClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    this.setState(prevState => ({ isSaved: !prevState.isSaved }));
  };

  render() {
    const StyledSaveButton = styled.button`
      background: none;
      border: none;
      padding: 0;
      outline: none;
      cursor: pointer;

      &:focus,
      &:active {
        outline: none;
      }

      &::-moz-focus-inner {
        border: 0;
      }

      & > svg {
        transition: all 0.2s ease-in-out;
      }

      &:hover {
        & > svg {
          fill: ${(props: StyledProps) => props.theme.getColor('primaryDark')};
        }
      }
    `;

    return (
      <StyledSaveButton onClick={this._onClick}>
        <Icon icon={this.state.isSaved ? ICONS.HEART : ICONS.HEART_O} />
      </StyledSaveButton>
    );
  }
}

export default SaveButton;
