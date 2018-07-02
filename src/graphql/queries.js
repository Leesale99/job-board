import gql from 'graphql-tag';

export const GET_JOBS = gql`
  query {
    jobs {
      id
      title
      company {
        name
        location
      }
    }
  }
`;

export const GET_JOB = gql`
  query($id: ID!) {
    job(id: $id) {
      id
      title
      description
      createdAt
      company {
        id
        name
        location
      }
    }
  }
`;

export const GET_COMPANIES = gql`
  query {
    companies {
      id
      name
      industry
      location
    }
  }
`;

export const GET_CANDIDATES = gql`
  query {
    candidates {
      id
      name
      title
      location
      birth_date
    }
  }
`;

export const GET_ACTIVE_RESULT = gql`
  query {
    activeResult @client {
      __typename
      id
    }
  }
`;
