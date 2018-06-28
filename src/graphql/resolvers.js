import gql from 'graphql-tag';

const resolvers = {
  Mutation: {
    setActiveResult: (_, { id }, { cache }) => {
      const query = gql`
        query getActiveResult {
          activeResult @client {
            __typename
            id
          }
        }
      `;

      const previousState = cache.readQuery({ query });
      const data = {
        ...previousState,
        activeResult: {
          ...previousState.activeResult,
          id
        }
      };
      cache.writeData({ query, data });
      return null;
    }
  }
};

export default resolvers;
