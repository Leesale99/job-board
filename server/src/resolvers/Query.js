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
  company: async (parent, args, ctx, info) => {
    return ctx.db.query.company({ where: { id: args.id } }, info);
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
  },
  job: async (parent, args, ctx, info) => {
    return ctx.db.query.job({ where: { id: args.id } }, info);
  }
};

module.exports = { Query };
