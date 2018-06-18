const company = {
  createCompanyDraft: (parent, args, ctx, info) => {
    return ctx.db.mutation.createCompany(
      {
        data: {
          name: args.name,
          location: args.location,
          industry: args.industry,
          description: args.description
          // author: {
          //   connect: {
          //     id: args.authorId
          //   }
          // }
        }
      },
      info
    );
  },
  publishCompany: (parent, args, ctx, info) => {
    return ctx.db.mutation.updateCompany(
      {
        where: {
          id: args.id
        },
        data: {
          published: true
        }
      },
      info
    );
  },
  deleteCompany: (parent, { id }, ctx, info) => {
    const companyExists = ctx.db.exists.Company({
      id
    });

    if (!companyExists) {
      throw new Error('Company not found!');
    }

    return ctx.db.mutation.deleteCompany(
      {
        where: {
          id
        }
      },
      info
    );
  }
};

module.exports = { company };
