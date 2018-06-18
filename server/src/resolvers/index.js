const { Query } = require('./Query');
const { company } = require('./Mutations/company');
const { job } = require('./Mutations/job');

module.exports = {
  Query,
  Mutation: {
    ...company,
    ...job
  }
};
