module.exports = {
  __resolveType (obj, ctx, info) {
    return obj.__typename
  }
}