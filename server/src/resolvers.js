const { extractFragmentReplacements } = require('prisma-binding')

const resolvers = {
  Query: require('./resolvers/Query'),
  Mutation: require('./resolvers/Mutation'),
  AuthPayload: require('./resolvers/AuthPayload')
}

module.exports = {
  resolvers,
  fragmentReplacements: extractFragmentReplacements(resolvers)
}
