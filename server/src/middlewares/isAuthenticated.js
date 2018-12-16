const jwt = require('jsonwebtoken')
const { APP_SECRET } = require('../utils')

function isAuthenticated (resolve, obj, args, ctx, info) {
  const Authorization = ctx.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const session = jwt.verify(token, APP_SECRET)
    return resolve(obj, args, { ...ctx, session }, info)
  }
  throw new Error('Se requiere Autenticación')
}

module.exports = {
  Query: {
    sessionUser: isAuthenticated
  },
  Mutation: {
    createUser: isAuthenticated,
    updateUser: isAuthenticated,
    createCheckPoint: isAuthenticated,
    createActivation: isAuthenticated,
    createBraceletGroups: isAuthenticated,
    createProduct: isAuthenticated
  }
}
