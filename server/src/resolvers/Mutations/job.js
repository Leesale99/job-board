const job = {
  createJobDraft: (parent, args, ctx, info) => {
    return ctx.db.mutation.createJob(
      {
        data: {
          title: args.title,
          description: args.description,
          company: {
            connect: {
              id: args.companyId
            }
          }
        }
      },
      info
    );
  },
  publishJob: (parent, args, ctx, info) => {
    return ctx.db.mutation.updateJob(
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
  deleteJob: (parent, { id }, ctx, info) => {
    const jobExists = ctx.db.exists.Job({
      id
    });

    if (!jobExists) {
      throw new Error('Job not found!');
    }

    return ctx.db.mutation.deleteJob(
      {
        where: {
          id
        }
      },
      info
    );
  }
};

module.exports = { job };
