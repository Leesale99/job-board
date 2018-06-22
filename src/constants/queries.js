import gql from 'graphql-tag';

export const GET_JOBS = gql`
  {
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

export const GET_COMPANIES = gql`
  {
    companies {
      id
      name
      industry
      location
    }
  }
`;

export const GET_CANDIDATES = gql`
  {
    candidates {
      id
      name
      title
      location
      birth_date
    }
  }
`;
