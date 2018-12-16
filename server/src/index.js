const { ApolloServer } = require('apollo-server')

const prisma = require('./prisma')
const schema = require('./schema')

const server = new ApolloServer({
  schema,
  context: ({ req }) => ({
    ...req,
    prisma
  }),
  playground: process.env.NODE_ENV === 'development',
  debug: process.env.NODE_ENV === 'development'
})

server.listen()
  .then(({ url, server }) => {
    console.log(`Server is running on ${url}`)
  })
