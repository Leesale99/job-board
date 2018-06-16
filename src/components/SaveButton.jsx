import React, { Component } from 'react';
import styled from 'styled-components';

import { ICONS } from '../constants';
import { Icon } from './ui';

// const SaveIcon = styled(Icon)`
//   &:hover {
//     fill: ${({ theme }) => theme.getColor('primaryDark')};
//   }
// `;

class SaveButton extends Component {
  state = {
    isSaved: false
  };

  _onClick = () => {
    this.setState(prevState => ({ isSaved: !prevState.isSaved }));
  };

  render() {
    const StyledSaveButton = styled.button`
      background: none;
      border: none;
      padding: 0;
      outline: none;

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
          fill: ${({ theme }) => theme.getColor('primaryDark')};
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
