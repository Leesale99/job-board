import gql from 'graphql-tag';

export const SET_ACTIVE_RESULT = gql`
  mutation setActiveResult($id: String!) {
    setActiveResult(id: $id) @client {
      id
    }
  }
`;

export const fake = 'fake eslint';
