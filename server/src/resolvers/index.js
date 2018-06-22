const { Query } = require('./Query');
const { auth } = require('./Mutations/auth');
const { company } = require('./Mutations/company');
const { job } = require('./Mutations/job');
const { AuthPayload } = require('./AuthPayload');

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...company,
    ...job
  },
  AuthPayload
};
