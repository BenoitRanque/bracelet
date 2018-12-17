

(async () => {
  try {
    const prisma = require('../../src/prisma')

    // use prisma here to seed
    const users = await require('./users')(prisma)
    const checkpoints = await require('./checkpoints')(prisma)
    const products = await require('./products')(prisma, checkpoints)

  } catch (error) {
    console.error(error)
  }
})()



