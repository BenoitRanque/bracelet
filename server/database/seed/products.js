module.exports = async (prisma, checkpoints) => Promise.all([
  prisma.client.createProduct({ name: 'Ingreso Adulto', description: 'Producto de carga inicial, descricpion va aqui', checkpoint: { connect: { id: checkpoints[0].id, } } }),
  prisma.client.createProduct({ name: 'Ingreso Adulto 16:30', description: 'Producto de carga inicial, descricpion va aqui', checkpoint: { connect: { id: checkpoints[0].id, } } }),
  prisma.client.createProduct({ name: 'Ingreso Adolescente', description: 'Producto de carga inicial, descricpion va aqui', checkpoint: { connect: { id: checkpoints[0].id, } } }),
  prisma.client.createProduct({ name: 'Ingreso Adolescente 16:30', description: 'Producto de carga inicial, descricpion va aqui', checkpoint: { connect: { id: checkpoints[0].id, } } }),
  prisma.client.createProduct({ name: 'Ingreso Niño', description: 'Producto de carga inicial, descricpion va aqui', checkpoint: { connect: { id: checkpoints[0].id, } } }),
  prisma.client.createProduct({ name: 'Ingreso Niño 16:30', description: 'Producto de carga inicial, descricpion va aqui', checkpoint: { connect: { id: checkpoints[0].id, } } }),
  prisma.client.createProduct({ name: 'Buffet Adulto', description: 'Producto de carga inicial, descricpion va aqui', checkpoint: { connect: { id: checkpoints[1].id, } } }),
  prisma.client.createProduct({ name: 'Buffet Niño', description: 'Producto de carga inicial, descricpion va aqui', checkpoint: { connect: { id: checkpoints[1].id, } } })
])