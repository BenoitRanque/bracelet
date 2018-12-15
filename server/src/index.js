const { GraphQLServer } = require('graphql-yoga')
const prisma = require('./prisma')
const { resolvers } = require('./resolvers')
const middlewares = require('./middlewares')

const server = new GraphQLServer({
  typeDefs: './src/schema/index.graphql',
  resolvers,
  middlewares, // disabled auth for development
  context: req => ({
    ...req,
    prisma
  })
})

const options = {
  // only enable playground during development
  playground: process.env.NODE_ENV === 'development' ? '/' : false
}

server.start(options, ({ port, endpoint }) => console.log(`Server is running on http://localhost:${port}${endpoint === '/' ? '' : endpoint }`))
