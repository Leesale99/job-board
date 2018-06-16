// @flow

import React from 'react';
import styled, { css } from 'styled-components';
import { H3 } from '../ui';
import SaveButton from '../SaveButton';

type StyledProps = {
  theme: {
    getColor: string => string,
    getFontSize: string => string
  }
};

type P = {
  img: string,
  title: string,
  date: string,
  name: string,
  location: string,
  isActive: boolean,
  isSaved: boolean,
  onResultCardClick: (
    e: SyntheticEvent<HTMLLIElement> | SyntheticKeyboardEvent<HTMLLIElement>
  ) => void,
  onResultCardKeyDown: (
    e: SyntheticEvent<HTMLLIElement> | SyntheticKeyboardEvent<HTMLLIElement>
  ) => void
};

const SearchResult = ({
  img,
  title,
  date,
  name,
  location,
  isActive,
  isSaved,
  onResultCardClick,
  onResultCardKeyDown
}: P) => {
  const StyledResult = styled.li`
    .result {
      padding: 1.5rem;
      cursor: pointer;
      position: relative;
      display: flex;
      align-items: center;
      border-bottom: 1px solid
        ${({ theme }: StyledProps) => theme.getColor('borderColor')};

      ${isActive &&
        css`
          &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            height: 100%;
            width: 0.4rem;
            background: ${({ theme }: StyledProps) =>
              theme.getColor('primary')};
          }
        `};

      &__img {
        width: 5rem;
        height: 5rem;
      }

      &__caption {
        flex: 1;
        padding-left: 1.5rem;

        h3 {
          font-size: ${(props: StyledProps) => props.theme.getFontSize('h6')};
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

  return (
    <StyledResult>
      <div
        role="button"
        tabIndex={0}
        className="result"
        onClick={onResultCardClick}
        onKeyDown={onResultCardKeyDown}
      >
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
              <SaveButton isSaved={isSaved} />
            </span>
          </div>
        </div>
      </div>
    </StyledResult>
  );
};

export default SearchResult;
