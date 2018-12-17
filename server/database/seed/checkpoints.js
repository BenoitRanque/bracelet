module.exports = async (prisma) => Promise.all([
  prisma.client.createCheckpoint({ name: 'INGRESO' }),
  prisma.client.createCheckpoint({ name: 'RESTAURANTE' })
])