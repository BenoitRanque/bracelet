const { getUserId } = require('../utils')

module.exports = {
  // node (parent, { id }, ctx, info) {
  //   return ctx.prisma.bindings.query.node({ id }, info)
  // },
  sessionUser:  (obj, args, ctx, info) => {
    // will throw if no session jwt exists
    const userId = getUserId(ctx)
    return ctx.prisma.bindings.query.user({ where: { id: userId }}, info)
  },
  user: (obj, args, ctx, info) => ctx.prisma.bindings.query.user(args, info),
  users: (obj, args, ctx, info) => ctx.prisma.bindings.query.users(args, info)
}
