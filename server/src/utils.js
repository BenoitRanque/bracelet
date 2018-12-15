const jwt = require('jsonwebtoken')
const APP_SECRET = process.env.APP_SECRET
const BCRYPT_SALT_ROUNDS = Number(process.env.BCRYPT_SALT_ROUNDS)

function getUserId(context) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, APP_SECRET)
    return userId
  }
  throw new Error('Not authenticated')
}

module.exports = {
  APP_SECRET,
  BCRYPT_SALT_ROUNDS,
  getUserId
}
