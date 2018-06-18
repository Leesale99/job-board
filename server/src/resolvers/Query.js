const Query = {
  companies: (parent, args, ctx, info) => {
    return ctx.db.query.companies(
      {
        where: {
          OR: [
            { name_contains: args.searchString },
            { description_contains: args.searchString }
          ]
        }
      },
      info
    );
  },
  jobs: (parent, args, ctx, info) => {
    return ctx.db.query.jobs(
      {
        where: {
          OR: [
            { title_contains: args.searchString },
            { description_contains: args.searchString }
          ]
        }
      },
      info
    );
  }
};

module.exports = { Query };
