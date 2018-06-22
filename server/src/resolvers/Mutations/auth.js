const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const auth = {
  signup: async (parent, args, ctx) => {
    const password = await bcrypt.hash(args.password, 10);
    const user = await ctx.db.mutation.createUser(
      {
        data: { ...args, password }
      },
      ` { id } `
    );

    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

    return {
      token,
      user
    };
  },
  login: async (parent, args, ctx) => {
    const user = await ctx.db.query.user(
      { where: { email: args.email } },
      ` { id password } `
    );

    if (!user) {
      throw new Error('No such user found');
    }

    const valid = await bcrypt.compare(args.password, user.password);

    if (!valid) {
      throw new Error('Invalid password');
    }
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

    return {
      token,
      user
    };
  }
};

module.exports = { auth };
