const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, BCRYPT_SALT_ROUNDS, getUserId } = require('../utils')

async function authenticate(obj, args, ctx, info) {
  const user = await ctx.prisma.bindings.query.user({ where: { username: args.username } }, `{ id password }`)
  if (user) {
    const valid = await bcrypt.compare(args.password, user.password)
    if (valid) {
      return {
        user,
        token: jwt.sign({ user: { id: user.id } }, APP_SECRET)
      }
    }
  }
  throw new Error('No se pudo Iniciar Session')
}

async function createProduct (obj, args, ctx, info) {
  return ctx.prisma.bindings.createProduct({
    data: {
      ...args.data,
      checkpoint: {
        connect: args.data.checkpoint
      }
    }
  }, info)
}
async function createBraceletGroups (obj, args, ctx, info) {
  return await Promise.all(args.data.map(group => ctx.prisma.bindings.create))
}
async function createActivation (obj, args, ctx, info) {
}
async function createCheck (obj, args, ctx, info) {

}

module.exports = {
  createUser: (obj, args, ctx, info) => ctx.prisma.createUser(args, info),
  authenticate: (obj, args, ctx, info) => ctx.prisma.authenticate(args, info),
  updateUser: (obj, args, ctx, info) => ctx.prisma.updateUser(args, info),
  createCheck: (obj, args, ctx, info) => ctx.prisma.createCheck(args, info),
  createCheckpoint: (obj, args, ctx, info) => ctx.prisma.createCheckpoint(args, info),
  createActivation: (obj, args, ctx, info) => ctx.prisma.createActivation(args, info),
  createBraceletGroups: (obj, args, ctx, info) => ctx.prisma.createBraceletGroups(args, info),
  createProduct: (obj, args, ctx, info) => ctx.prisma.createProduct(args, info)
}
