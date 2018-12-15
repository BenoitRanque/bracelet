function user(obj, args, ctx, info) {
  return ctx.prisma.bindings.query.user({ where: { id: obj.user.id } }, info)
}

module.exports = { user }
