const BCRYPT_SALT_ROUNDS = Number(process.env.BCRYPT_SALT_ROUNDS)
const DEFAULT_PASSWORD = ''
const bcrypt = require('bcryptjs')

module.exports = async (prisma, roles) => Promise.all([
  prisma.client.createUser({ username: 'admin',  password: await bcrypt.hash(DEFAULT_PASSWORD, BCRYPT_SALT_ROUNDS) })
])