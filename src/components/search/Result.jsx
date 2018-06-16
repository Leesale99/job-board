// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import { H3 } from '../ui';
import SaveButton from '../SaveButton';

type StyledProps = {
  theme: {
    getColor: string => string,
    getFontSize: string => string
  }
};

const StyledResult = styled.li`
  .result {
    padding: 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-bottom: 1px solid
      ${({ theme }: StyledProps) => theme.getColor('borderColor')};

    &__img {
      width: 5rem;
      height: 5rem;
    }

    &__caption {
      flex: 1;
      padding-left: 1.5rem;

      h3 {
        font-size: ${({ theme }: StyledProps) => theme.getFontSize('h6')};
      }

      .date {
        font-size: 1.2rem;
        margin-left: auto;
        min-width: 8rem;
        text-align: right;
        position: relative;
        top: -0.5rem;
      }
    }

    &__title {
      display: flex;

      & > * {
        margin: 0;
      }
    }

    &__info {
      display: flex;

      & > * {
        margin: 0;
      }

      .save {
        margin-left: auto;
        display: flex;
        align-items: center;
      }
    }
  }
`;

type P = {
  img: string,
  title: string,
  date: string,
  name: string,
  location: string
};

type S = {
  isActive: boolean
};

class SearchResult extends Component<P, S> {
  state = { isActive: false };
  render() {
    const { img, title, date, name, location } = this.props;

    return (
      <StyledResult>
        <div className="result">
          <img src={img} alt="result" className="result__img" />
          <div className="result__caption">
            <div className="result__title">
              <H3>{title}</H3>
              <span className="date">{date}</span>
            </div>
            <div className="result__info">
              <p>
                {name} – {location}
              </p>
              <span className="save">
                <SaveButton />
              </span>
            </div>
          </div>
        </div>
      </StyledResult>
    );
  }
}

export default SearchResult;
