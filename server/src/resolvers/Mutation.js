const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, BCRYPT_SALT_ROUNDS } = require('../utils')

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

module.exports = {
  authenticate
}
