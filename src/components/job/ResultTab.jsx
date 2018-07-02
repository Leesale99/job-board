// @flow

import React from 'react';
import styled, { css } from 'styled-components';
import { Mutation } from 'react-apollo';
import { H3 } from '../ui';
import SaveButton from '../SaveButton';
import withNormalData from '../hoc/withNormalData';
import logoLeoVegas from '../../assets/images/logo-leoVegas.png';
import { SET_ACTIVE_RESULT } from '../../graphql';

type P = {
  data: Array<string>,
  isActive: boolean,
  isSaved: boolean,
  onTabClick: (e: SyntheticEvent<HTMLLIElement>) => void
};

const SearchResultTab = (props: P) => {
  const { data, isActive, isSaved = false } = props;
  const [id, title, name, location] = data; // eslint-disable-line no-unused-vars

  const StyledResult = styled.li`
    .result {
      padding: 1.5rem;
      cursor: pointer;
      position: relative;
      display: flex;
      align-items: center;
      border-bottom: 1px solid
        ${(props: { theme: Theme }) => props.theme.getColor('borderColor')};

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
            background: ${(props: { theme: Theme }) =>
              props.theme.getColor('primary')};
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
          font-size: ${(
            props: { theme: Theme } // eslint-disable-line react/no-unused-prop-types
          ) => props.theme.getFontSize('h6')};
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
    <Mutation mutation={SET_ACTIVE_RESULT}>
      {setActiveResult => {
        return (
          <StyledResult>
            <div
              role="button"
              tabIndex={0}
              className="result"
              onClick={(e: SyntheticEvent<HTMLLIElement>) => {
                setActiveResult({ variables: { id } });
                props.onTabClick(e);
              }}
              onKeyDown={(e: SyntheticKeyboardEvent<HTMLLIElement>) => {
                setActiveResult({ variables: { id } });
                props.onTabClick(e);
              }}
            >
              <img src={logoLeoVegas} alt="result" className="result__img" />
              <div className="result__caption">
                <div className="result__title">
                  <H3>{title}</H3>
                  <span className="date">12 days ago</span>
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
      }}
    </Mutation>
  );
};

export default withNormalData(SearchResultTab);
