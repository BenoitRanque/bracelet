module.exports = async function (prisma, users, checkpoints) {

  const test1 = await prisma.client.createBracelet({
    code: '01_001',
    group: {
      create: {
        code: '01',
        owner: { connect: { id: users[0].id } },
        activation: {
          create: {
            owner: { connect: { id: users[0].id } },
            products: {
              create: [
                {
                  name: 'Test Product 1',
                  description: 'Ingreso Adulto',
                  checkpoints: { connect: { name: 'INGRESO' } }
                }
              ]
            }
          }
        }
      }
    }
  })
  const test2 = await prisma.client.createBracelet({
    code: '02_001',
    group: {
      create: {
        code: '02',
        owner: { connect: { id: users[0].id } },
        activation: {
          create: {
            owner: { connect: { id: users[0].id } },
            products: {
              create: [
                {
                  name: 'Test Product 2',
                  description: 'Buffet Adulto',
                  checkpoints: { connect: { name: 'RESTAURANTE' } }
                }
              ]
            }
          }
        }
      }
    }
  })
  const test3 = await prisma.client.createBracelet({
    code: '03_001',
    group: {
      create: {
        code: '03',
        owner: { connect: { id: users[0].id } },
        activation: {
          create: {
            owner: { connect: { id: users[0].id } },
            products: {
              create: [
                {
                  name: 'Test Product 3',
                  description: 'Buffet Adulto limite 4 registros',
                  checklimit: 4,
                  checkpoints: { connect: { name: 'RESTAURANTE' } }
                }
              ]
            }
          }
        }
      }
    }
  })
  const test4 = await prisma.client.createBracelet({
    code: '04_001',
    group: {
      create: {
        code: '04',
        owner: { connect: { id: users[0].id } },
        activation: {
          create: {
            owner: { connect: { id: users[0].id } },
            products: {
              create: [
                {
                  name: 'Test Product 4',
                  description: 'Buffet Adulto limite 4 registros',
                  checklimit: 4,
                  checkpoints: { connect: { name: 'RESTAURANTE' } }
                },
                {
                  name: 'Test Product 5',
                  description: 'Postres ilimitados',
                  checklimit: null,
                  checkpoints: { connect: { name: 'RESTAURANTE' } }
                }
              ]
            }
          }
        }
      }
    }
  })
  const test5 = await prisma.client.createBracelet({
    code: '05_001',
    group: {
      create: {
        code: '05',
        owner: { connect: { id: users[0].id } },
        activation: {
          create: {
            owner: { connect: { id: users[0].id } },
            products: {
              create: [
                {
                  name: 'Test Product 6',
                  description: 'Buffet Adulto 4 registros',
                  checklimit: 4,
                  checkpoints: { connect: { name: 'RESTAURANTE' } }
                },
                {
                  name: 'Test Product 7',
                  description: 'Ingresos Adultos ilimitados',
                  checklimit: null,
                  checkpoints: { connect: { name: 'INGRESO' } }
                }
              ]
            }
          }
        }
      }
    }
  })

}



// create test bracelets


// invalid/unknown bracelet id
// code GMB001
// INVALID/UNKOWN


// code 1
// valid in


//