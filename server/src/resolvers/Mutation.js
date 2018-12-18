const startOfDay = require('date-fns/start_of_day')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, BCRYPT_SALT_ROUNDS, getUserId } = require('../utils')

async function authenticate(obj, args, ctx, info) {
  const { username, password } = args.data
  const user = await ctx.prisma.client.user({ username })
  if (user) {
    const valid = await bcrypt.compare(password, user.password)
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
  return ctx.prisma.bindings.mutation.createProduct({
    data: {
      ...args.data,
      checkpoint: {
        connect: args.data.checkpoint
      }
    }
  }, info)
}

async function createGroup (obj, args, ctx, info) {
  const userId = getUserId(ctx)
  return ctx.prisma.bindings.mutation.createGroup({
    data: {
      ...args.data,
      bracelets: {
        create: args.data.bracelets
      },
      owner: {
        connect: {
          id: userId
        }
      }
    }
  }, info)
}

async function createActivation (obj, args, ctx, info) {
  const userId = getUserId(ctx)
  return ctx.prisma.bindings.mutation.createActivation({
    data: {
      groups: {
        connect: args.data.groups
      },
      products: {
        connect: args.data.products
      },
      owner: {
        connect: {
          id: userId
        }
      }
    }
  }, info)
}

async function createCheck (obj, args, ctx, info) {

  const { bracelet, checkpoint } = args.data
  // Check if bracelet exists

  const [
    exists,
    checksOnPreviousDatesCount,
    isActivated,
    isActivatedForCheckpoint,
    checksAtCheckpointCount,
    activatedProducts
  ] = await Promise.all([
    ctx.prisma.client.$exists.bracelet(bracelet),
    ctx.prisma.client.checksConnection({
      where: {
        bracelet,
        timestamp_lt: startOfDay(new Date()).toISOString()
      }
    }).aggregate().count(),
    ctx.prisma.client.$exists.bracelet({
      ...bracelet,
      group: {
        activation: {
          id_not: null
        }
      }
    }),
    ctx.prisma.client.$exists.bracelet({
      ...bracelet,
      group: {
        activation: {
          products_some: {
            checkpoint
          }
        }
      }
    }),
    ctx.prisma.client.checksConnection({
      where: {
        bracelet,
        checkpoint
      }
    }).aggregate().count(),
    ctx.prisma.client.products({
      where: {
        checkpoint,
        activations_some: {
          groups_some: {
            bracelets_some: bracelet
          }
        }
      }
    })
  ])

  if (!exists) throw new Error(`Manilla no existe`)
  if (checksOnPreviousDatesCount > 0) throw new Error(`Manilla ya fue utilizada en fechas anteriores`)
  if (!isActivated) throw new Error(`Manilla no activada`)
  if (!isActivatedForCheckpoint) throw new Error(`Manilla no cuenta con producto para este punto de control`)

  const checkLimitForCheckpoint = activatedProducts
    .reduce((maxChecklimit, { checklimit }) => (checklimit === null || (maxChecklimit !== null && checklimit > maxChecklimi)) ? checklimit : maxChecklimit, 0)

  if (checkLimitForCheckpoint !== null && checksAtCheckpointCount >= checkLimitForCheckpoint) throw new Error(`Cantidad de registros para manilla ${bracelet} en punto de control ${checkpoint} exedida`)

  return ctx.prisma.bindings.mutation.createCheck({
    data: {
      bracelet: {
        connect: args.data.bracelet
      },
      checkpoint: {
        connect: args.data.checkpoint
      },
      timestamp: new Date().toISOString()
    }
  }, info)
}

module.exports = {
  createUser: (obj, args, ctx, info) => ctx.prisma.bindings.mutation.createUser(args, info),
  updateUser: (obj, args, ctx, info) => ctx.prisma.bindings.mutation.updateUser(args, info),
  createCheckpoint: (obj, args, ctx, info) => ctx.prisma.bindings.mutation.createCheckpoint(args, info),
  authenticate,
  createCheck,
  createActivation,
  createGroup,
  createProduct
}
