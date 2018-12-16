const { makeExecutableSchema } = require('apollo-server')
const { applyMiddleware } = require('graphql-middleware')
const { importSchema } = require('graphql-import')

const typeDefs = importSchema('./src/schema/index.graphql')
const { resolvers } = require('./resolvers')
const middlewares = require('./middlewares')

const schema = makeExecutableSchema({ typeDefs, resolvers })
const schemaWithMiddleware = applyMiddleware(schema, ...middlewares)

module.exports = schemaWithMiddleware
