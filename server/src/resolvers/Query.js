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
  activation: (obj, args, ctx, info) => ctx.prisma.bindings.query.activation(args, info),
  activations: (obj, args, ctx, info) => ctx.prisma.bindings.query.activations(args, info),
  activationsConnection: (obj, args, ctx, info) => ctx.prisma.bindings.query.activationsConnection(args, info),
  bracelet: (obj, args, ctx, info) => ctx.prisma.bindings.query.bracelet(args, info),
  bracelets: (obj, args, ctx, info) => ctx.prisma.bindings.query.bracelets(args, info),
  braceletsConnection: (obj, args, ctx, info) => ctx.prisma.bindings.query.braceletsConnection(args, info),
  checks: (obj, args, ctx, info) => ctx.prisma.bindings.query.checks(args, info),
  checksConnection: (obj, args, ctx, info) => ctx.prisma.bindings.query.checksConnection(args, info),
  checkpoint: (obj, args, ctx, info) => ctx.prisma.bindings.query.checkpoint(args, info),
  checkpoints: (obj, args, ctx, info) => ctx.prisma.bindings.query.checkpoints(args, info),
  checkpointsConnection: (obj, args, ctx, info) => ctx.prisma.bindings.query.checkpointsConnection(args, info),
  group: (obj, args, ctx, info) => ctx.prisma.bindings.query.group(args, info),
  groups: (obj, args, ctx, info) => ctx.prisma.bindings.query.groups(args, info),
  groupsConnection: (obj, args, ctx, info) => ctx.prisma.bindings.query.groupsConnection(args, info),
  product: (obj, args, ctx, info) => ctx.prisma.bindings.query.product(args, info),
  products: (obj, args, ctx, info) => ctx.prisma.bindings.query.products(args, info),
  productsConnection: (obj, args, ctx, info) => ctx.prisma.bindings.query.productsConnection(args, info),
  user: (obj, args, ctx, info) => ctx.prisma.bindings.query.user(args, info),
  users: (obj, args, ctx, info) => ctx.prisma.bindings.query.users(args, info),
  usersConnection: (obj, args, ctx, info) => ctx.prisma.bindings.query.usersConnection(args, info),
}
