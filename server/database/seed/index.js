

(async () => {
  try {
    const prisma = require('../../src/prisma')

    // use prisma here to seed
    const users = await require('./users')(prisma)

  } catch (error) {
    console.error(error)
  }
})()



