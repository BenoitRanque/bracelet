module.exports = {
        typeDefs: /* GraphQL */ `type Activation {
  id: ID!
  user: User!
  bracelets(where: BraceletWhereInput, orderBy: BraceletOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bracelet!]
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
}

type ActivationConnection {
  pageInfo: PageInfo!
  edges: [ActivationEdge]!
  aggregate: AggregateActivation!
}

input ActivationCreateInput {
  user: UserCreateOneInput!
  bracelets: BraceletCreateManyInput
  products: ProductCreateManyWithoutActivationsInput
}

input ActivationCreateManyWithoutProductsInput {
  create: [ActivationCreateWithoutProductsInput!]
  connect: [ActivationWhereUniqueInput!]
}

input ActivationCreateOneInput {
  create: ActivationCreateInput
  connect: ActivationWhereUniqueInput
}

input ActivationCreateWithoutProductsInput {
  user: UserCreateOneInput!
  bracelets: BraceletCreateManyInput
}

type ActivationEdge {
  node: Activation!
  cursor: String!
}

enum ActivationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ActivationPreviousValues {
  id: ID!
}

input ActivationScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [ActivationScalarWhereInput!]
  OR: [ActivationScalarWhereInput!]
  NOT: [ActivationScalarWhereInput!]
}

type ActivationSubscriptionPayload {
  mutation: MutationType!
  node: Activation
  updatedFields: [String!]
  previousValues: ActivationPreviousValues
}

input ActivationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ActivationWhereInput
  AND: [ActivationSubscriptionWhereInput!]
  OR: [ActivationSubscriptionWhereInput!]
  NOT: [ActivationSubscriptionWhereInput!]
}

input ActivationUpdateDataInput {
  user: UserUpdateOneRequiredInput
  bracelets: BraceletUpdateManyInput
  products: ProductUpdateManyWithoutActivationsInput
}

input ActivationUpdateInput {
  user: UserUpdateOneRequiredInput
  bracelets: BraceletUpdateManyInput
  products: ProductUpdateManyWithoutActivationsInput
}

input ActivationUpdateManyWithoutProductsInput {
  create: [ActivationCreateWithoutProductsInput!]
  delete: [ActivationWhereUniqueInput!]
  connect: [ActivationWhereUniqueInput!]
  disconnect: [ActivationWhereUniqueInput!]
  update: [ActivationUpdateWithWhereUniqueWithoutProductsInput!]
  upsert: [ActivationUpsertWithWhereUniqueWithoutProductsInput!]
  deleteMany: [ActivationScalarWhereInput!]
}

input ActivationUpdateOneInput {
  create: ActivationCreateInput
  update: ActivationUpdateDataInput
  upsert: ActivationUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: ActivationWhereUniqueInput
}

input ActivationUpdateWithoutProductsDataInput {
  user: UserUpdateOneRequiredInput
  bracelets: BraceletUpdateManyInput
}

input ActivationUpdateWithWhereUniqueWithoutProductsInput {
  where: ActivationWhereUniqueInput!
  data: ActivationUpdateWithoutProductsDataInput!
}

input ActivationUpsertNestedInput {
  update: ActivationUpdateDataInput!
  create: ActivationCreateInput!
}

input ActivationUpsertWithWhereUniqueWithoutProductsInput {
  where: ActivationWhereUniqueInput!
  update: ActivationUpdateWithoutProductsDataInput!
  create: ActivationCreateWithoutProductsInput!
}

input ActivationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  bracelets_every: BraceletWhereInput
  bracelets_some: BraceletWhereInput
  bracelets_none: BraceletWhereInput
  products_every: ProductWhereInput
  products_some: ProductWhereInput
  products_none: ProductWhereInput
  AND: [ActivationWhereInput!]
  OR: [ActivationWhereInput!]
  NOT: [ActivationWhereInput!]
}

input ActivationWhereUniqueInput {
  id: ID
}

type AggregateActivation {
  count: Int!
}

type AggregateBracelet {
  count: Int!
}

type AggregateCheck {
  count: Int!
}

type AggregateCheckpoint {
  count: Int!
}

type AggregateGroup {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Bracelet {
  id: ID!
  code: String!
  group: Group!
  checks(where: CheckWhereInput, orderBy: CheckOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Check!]
}

type BraceletConnection {
  pageInfo: PageInfo!
  edges: [BraceletEdge]!
  aggregate: AggregateBracelet!
}

input BraceletCreateInput {
  code: String!
  group: GroupCreateOneWithoutBraceletsInput!
  checks: CheckCreateManyWithoutBraceletInput
}

input BraceletCreateManyInput {
  create: [BraceletCreateInput!]
  connect: [BraceletWhereUniqueInput!]
}

input BraceletCreateManyWithoutGroupInput {
  create: [BraceletCreateWithoutGroupInput!]
  connect: [BraceletWhereUniqueInput!]
}

input BraceletCreateOneWithoutChecksInput {
  create: BraceletCreateWithoutChecksInput
  connect: BraceletWhereUniqueInput
}

input BraceletCreateWithoutChecksInput {
  code: String!
  group: GroupCreateOneWithoutBraceletsInput!
}

input BraceletCreateWithoutGroupInput {
  code: String!
  checks: CheckCreateManyWithoutBraceletInput
}

type BraceletEdge {
  node: Bracelet!
  cursor: String!
}

enum BraceletOrderByInput {
  id_ASC
  id_DESC
  code_ASC
  code_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BraceletPreviousValues {
  id: ID!
  code: String!
}

input BraceletScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  code: String
  code_not: String
  code_in: [String!]
  code_not_in: [String!]
  code_lt: String
  code_lte: String
  code_gt: String
  code_gte: String
  code_contains: String
  code_not_contains: String
  code_starts_with: String
  code_not_starts_with: String
  code_ends_with: String
  code_not_ends_with: String
  AND: [BraceletScalarWhereInput!]
  OR: [BraceletScalarWhereInput!]
  NOT: [BraceletScalarWhereInput!]
}

type BraceletSubscriptionPayload {
  mutation: MutationType!
  node: Bracelet
  updatedFields: [String!]
  previousValues: BraceletPreviousValues
}

input BraceletSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BraceletWhereInput
  AND: [BraceletSubscriptionWhereInput!]
  OR: [BraceletSubscriptionWhereInput!]
  NOT: [BraceletSubscriptionWhereInput!]
}

input BraceletUpdateDataInput {
  code: String
  group: GroupUpdateOneRequiredWithoutBraceletsInput
  checks: CheckUpdateManyWithoutBraceletInput
}

input BraceletUpdateInput {
  code: String
  group: GroupUpdateOneRequiredWithoutBraceletsInput
  checks: CheckUpdateManyWithoutBraceletInput
}

input BraceletUpdateManyDataInput {
  code: String
}

input BraceletUpdateManyInput {
  create: [BraceletCreateInput!]
  update: [BraceletUpdateWithWhereUniqueNestedInput!]
  upsert: [BraceletUpsertWithWhereUniqueNestedInput!]
  delete: [BraceletWhereUniqueInput!]
  connect: [BraceletWhereUniqueInput!]
  disconnect: [BraceletWhereUniqueInput!]
  deleteMany: [BraceletScalarWhereInput!]
  updateMany: [BraceletUpdateManyWithWhereNestedInput!]
}

input BraceletUpdateManyMutationInput {
  code: String
}

input BraceletUpdateManyWithoutGroupInput {
  create: [BraceletCreateWithoutGroupInput!]
  delete: [BraceletWhereUniqueInput!]
  connect: [BraceletWhereUniqueInput!]
  disconnect: [BraceletWhereUniqueInput!]
  update: [BraceletUpdateWithWhereUniqueWithoutGroupInput!]
  upsert: [BraceletUpsertWithWhereUniqueWithoutGroupInput!]
  deleteMany: [BraceletScalarWhereInput!]
  updateMany: [BraceletUpdateManyWithWhereNestedInput!]
}

input BraceletUpdateManyWithWhereNestedInput {
  where: BraceletScalarWhereInput!
  data: BraceletUpdateManyDataInput!
}

input BraceletUpdateWithoutGroupDataInput {
  code: String
  checks: CheckUpdateManyWithoutBraceletInput
}

input BraceletUpdateWithWhereUniqueNestedInput {
  where: BraceletWhereUniqueInput!
  data: BraceletUpdateDataInput!
}

input BraceletUpdateWithWhereUniqueWithoutGroupInput {
  where: BraceletWhereUniqueInput!
  data: BraceletUpdateWithoutGroupDataInput!
}

input BraceletUpsertWithWhereUniqueNestedInput {
  where: BraceletWhereUniqueInput!
  update: BraceletUpdateDataInput!
  create: BraceletCreateInput!
}

input BraceletUpsertWithWhereUniqueWithoutGroupInput {
  where: BraceletWhereUniqueInput!
  update: BraceletUpdateWithoutGroupDataInput!
  create: BraceletCreateWithoutGroupInput!
}

input BraceletWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  code: String
  code_not: String
  code_in: [String!]
  code_not_in: [String!]
  code_lt: String
  code_lte: String
  code_gt: String
  code_gte: String
  code_contains: String
  code_not_contains: String
  code_starts_with: String
  code_not_starts_with: String
  code_ends_with: String
  code_not_ends_with: String
  group: GroupWhereInput
  checks_every: CheckWhereInput
  checks_some: CheckWhereInput
  checks_none: CheckWhereInput
  AND: [BraceletWhereInput!]
  OR: [BraceletWhereInput!]
  NOT: [BraceletWhereInput!]
}

input BraceletWhereUniqueInput {
  id: ID
  code: String
}

type Check {
  timestamp: DateTime!
  bracelet: Bracelet!
  checkpoint: Checkpoint!
}

type CheckConnection {
  pageInfo: PageInfo!
  edges: [CheckEdge]!
  aggregate: AggregateCheck!
}

input CheckCreateInput {
  timestamp: DateTime!
  bracelet: BraceletCreateOneWithoutChecksInput!
  checkpoint: CheckpointCreateOneWithoutChecksInput!
}

input CheckCreateManyWithoutBraceletInput {
  create: [CheckCreateWithoutBraceletInput!]
}

input CheckCreateManyWithoutCheckpointInput {
  create: [CheckCreateWithoutCheckpointInput!]
}

input CheckCreateWithoutBraceletInput {
  timestamp: DateTime!
  checkpoint: CheckpointCreateOneWithoutChecksInput!
}

input CheckCreateWithoutCheckpointInput {
  timestamp: DateTime!
  bracelet: BraceletCreateOneWithoutChecksInput!
}

type CheckEdge {
  node: Check!
  cursor: String!
}

enum CheckOrderByInput {
  timestamp_ASC
  timestamp_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type Checkpoint {
  id: ID!
  name: String!
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
  checks(where: CheckWhereInput, orderBy: CheckOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Check!]
}

type CheckpointConnection {
  pageInfo: PageInfo!
  edges: [CheckpointEdge]!
  aggregate: AggregateCheckpoint!
}

input CheckpointCreateInput {
  name: String!
  products: ProductCreateManyWithoutCheckpointInput
  checks: CheckCreateManyWithoutCheckpointInput
}

input CheckpointCreateOneWithoutChecksInput {
  create: CheckpointCreateWithoutChecksInput
  connect: CheckpointWhereUniqueInput
}

input CheckpointCreateOneWithoutProductsInput {
  create: CheckpointCreateWithoutProductsInput
  connect: CheckpointWhereUniqueInput
}

input CheckpointCreateWithoutChecksInput {
  name: String!
  products: ProductCreateManyWithoutCheckpointInput
}

input CheckpointCreateWithoutProductsInput {
  name: String!
  checks: CheckCreateManyWithoutCheckpointInput
}

type CheckpointEdge {
  node: Checkpoint!
  cursor: String!
}

enum CheckpointOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CheckpointPreviousValues {
  id: ID!
  name: String!
}

type CheckpointSubscriptionPayload {
  mutation: MutationType!
  node: Checkpoint
  updatedFields: [String!]
  previousValues: CheckpointPreviousValues
}

input CheckpointSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CheckpointWhereInput
  AND: [CheckpointSubscriptionWhereInput!]
  OR: [CheckpointSubscriptionWhereInput!]
  NOT: [CheckpointSubscriptionWhereInput!]
}

input CheckpointUpdateInput {
  name: String
  products: ProductUpdateManyWithoutCheckpointInput
  checks: CheckUpdateManyWithoutCheckpointInput
}

input CheckpointUpdateManyMutationInput {
  name: String
}

input CheckpointUpdateOneRequiredWithoutProductsInput {
  create: CheckpointCreateWithoutProductsInput
  update: CheckpointUpdateWithoutProductsDataInput
  upsert: CheckpointUpsertWithoutProductsInput
  connect: CheckpointWhereUniqueInput
}

input CheckpointUpdateWithoutProductsDataInput {
  name: String
  checks: CheckUpdateManyWithoutCheckpointInput
}

input CheckpointUpsertWithoutProductsInput {
  update: CheckpointUpdateWithoutProductsDataInput!
  create: CheckpointCreateWithoutProductsInput!
}

input CheckpointWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  products_every: ProductWhereInput
  products_some: ProductWhereInput
  products_none: ProductWhereInput
  checks_every: CheckWhereInput
  checks_some: CheckWhereInput
  checks_none: CheckWhereInput
  AND: [CheckpointWhereInput!]
  OR: [CheckpointWhereInput!]
  NOT: [CheckpointWhereInput!]
}

input CheckpointWhereUniqueInput {
  id: ID
  name: String
}

type CheckPreviousValues {
  timestamp: DateTime!
}

input CheckScalarWhereInput {
  timestamp: DateTime
  timestamp_not: DateTime
  timestamp_in: [DateTime!]
  timestamp_not_in: [DateTime!]
  timestamp_lt: DateTime
  timestamp_lte: DateTime
  timestamp_gt: DateTime
  timestamp_gte: DateTime
  AND: [CheckScalarWhereInput!]
  OR: [CheckScalarWhereInput!]
  NOT: [CheckScalarWhereInput!]
}

type CheckSubscriptionPayload {
  mutation: MutationType!
  node: Check
  updatedFields: [String!]
  previousValues: CheckPreviousValues
}

input CheckSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CheckWhereInput
  AND: [CheckSubscriptionWhereInput!]
  OR: [CheckSubscriptionWhereInput!]
  NOT: [CheckSubscriptionWhereInput!]
}

input CheckUpdateManyDataInput {
  timestamp: DateTime
}

input CheckUpdateManyMutationInput {
  timestamp: DateTime
}

input CheckUpdateManyWithoutBraceletInput {
  create: [CheckCreateWithoutBraceletInput!]
  deleteMany: [CheckScalarWhereInput!]
  updateMany: [CheckUpdateManyWithWhereNestedInput!]
}

input CheckUpdateManyWithoutCheckpointInput {
  create: [CheckCreateWithoutCheckpointInput!]
  deleteMany: [CheckScalarWhereInput!]
  updateMany: [CheckUpdateManyWithWhereNestedInput!]
}

input CheckUpdateManyWithWhereNestedInput {
  where: CheckScalarWhereInput!
  data: CheckUpdateManyDataInput!
}

input CheckWhereInput {
  timestamp: DateTime
  timestamp_not: DateTime
  timestamp_in: [DateTime!]
  timestamp_not_in: [DateTime!]
  timestamp_lt: DateTime
  timestamp_lte: DateTime
  timestamp_gt: DateTime
  timestamp_gte: DateTime
  bracelet: BraceletWhereInput
  checkpoint: CheckpointWhereInput
  AND: [CheckWhereInput!]
  OR: [CheckWhereInput!]
  NOT: [CheckWhereInput!]
}

scalar DateTime

type Group {
  code: String!
  bracelets(where: BraceletWhereInput, orderBy: BraceletOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bracelet!]
  activation: Activation
}

type GroupConnection {
  pageInfo: PageInfo!
  edges: [GroupEdge]!
  aggregate: AggregateGroup!
}

input GroupCreateInput {
  code: String!
  bracelets: BraceletCreateManyWithoutGroupInput
  activation: ActivationCreateOneInput
}

input GroupCreateOneWithoutBraceletsInput {
  create: GroupCreateWithoutBraceletsInput
  connect: GroupWhereUniqueInput
}

input GroupCreateWithoutBraceletsInput {
  code: String!
  activation: ActivationCreateOneInput
}

type GroupEdge {
  node: Group!
  cursor: String!
}

enum GroupOrderByInput {
  code_ASC
  code_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GroupPreviousValues {
  code: String!
}

type GroupSubscriptionPayload {
  mutation: MutationType!
  node: Group
  updatedFields: [String!]
  previousValues: GroupPreviousValues
}

input GroupSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GroupWhereInput
  AND: [GroupSubscriptionWhereInput!]
  OR: [GroupSubscriptionWhereInput!]
  NOT: [GroupSubscriptionWhereInput!]
}

input GroupUpdateInput {
  code: String
  bracelets: BraceletUpdateManyWithoutGroupInput
  activation: ActivationUpdateOneInput
}

input GroupUpdateManyMutationInput {
  code: String
}

input GroupUpdateOneRequiredWithoutBraceletsInput {
  create: GroupCreateWithoutBraceletsInput
  update: GroupUpdateWithoutBraceletsDataInput
  upsert: GroupUpsertWithoutBraceletsInput
  connect: GroupWhereUniqueInput
}

input GroupUpdateWithoutBraceletsDataInput {
  code: String
  activation: ActivationUpdateOneInput
}

input GroupUpsertWithoutBraceletsInput {
  update: GroupUpdateWithoutBraceletsDataInput!
  create: GroupCreateWithoutBraceletsInput!
}

input GroupWhereInput {
  code: String
  code_not: String
  code_in: [String!]
  code_not_in: [String!]
  code_lt: String
  code_lte: String
  code_gt: String
  code_gte: String
  code_contains: String
  code_not_contains: String
  code_starts_with: String
  code_not_starts_with: String
  code_ends_with: String
  code_not_ends_with: String
  bracelets_every: BraceletWhereInput
  bracelets_some: BraceletWhereInput
  bracelets_none: BraceletWhereInput
  activation: ActivationWhereInput
  AND: [GroupWhereInput!]
  OR: [GroupWhereInput!]
  NOT: [GroupWhereInput!]
}

input GroupWhereUniqueInput {
  code: String
}

scalar Long

type Mutation {
  createActivation(data: ActivationCreateInput!): Activation!
  updateActivation(data: ActivationUpdateInput!, where: ActivationWhereUniqueInput!): Activation
  upsertActivation(where: ActivationWhereUniqueInput!, create: ActivationCreateInput!, update: ActivationUpdateInput!): Activation!
  deleteActivation(where: ActivationWhereUniqueInput!): Activation
  deleteManyActivations(where: ActivationWhereInput): BatchPayload!
  createBracelet(data: BraceletCreateInput!): Bracelet!
  updateBracelet(data: BraceletUpdateInput!, where: BraceletWhereUniqueInput!): Bracelet
  updateManyBracelets(data: BraceletUpdateManyMutationInput!, where: BraceletWhereInput): BatchPayload!
  upsertBracelet(where: BraceletWhereUniqueInput!, create: BraceletCreateInput!, update: BraceletUpdateInput!): Bracelet!
  deleteBracelet(where: BraceletWhereUniqueInput!): Bracelet
  deleteManyBracelets(where: BraceletWhereInput): BatchPayload!
  createCheck(data: CheckCreateInput!): Check!
  updateManyChecks(data: CheckUpdateManyMutationInput!, where: CheckWhereInput): BatchPayload!
  deleteManyChecks(where: CheckWhereInput): BatchPayload!
  createCheckpoint(data: CheckpointCreateInput!): Checkpoint!
  updateCheckpoint(data: CheckpointUpdateInput!, where: CheckpointWhereUniqueInput!): Checkpoint
  updateManyCheckpoints(data: CheckpointUpdateManyMutationInput!, where: CheckpointWhereInput): BatchPayload!
  upsertCheckpoint(where: CheckpointWhereUniqueInput!, create: CheckpointCreateInput!, update: CheckpointUpdateInput!): Checkpoint!
  deleteCheckpoint(where: CheckpointWhereUniqueInput!): Checkpoint
  deleteManyCheckpoints(where: CheckpointWhereInput): BatchPayload!
  createGroup(data: GroupCreateInput!): Group!
  updateGroup(data: GroupUpdateInput!, where: GroupWhereUniqueInput!): Group
  updateManyGroups(data: GroupUpdateManyMutationInput!, where: GroupWhereInput): BatchPayload!
  upsertGroup(where: GroupWhereUniqueInput!, create: GroupCreateInput!, update: GroupUpdateInput!): Group!
  deleteGroup(where: GroupWhereUniqueInput!): Group
  deleteManyGroups(where: GroupWhereInput): BatchPayload!
  createProduct(data: ProductCreateInput!): Product!
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateManyProducts(data: ProductUpdateManyMutationInput!, where: ProductWhereInput): BatchPayload!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Product {
  id: ID!
  name: String!
  description: String!
  activations(where: ActivationWhereInput, orderBy: ActivationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Activation!]
  checkpoint: Checkpoint!
  checkLimit: Int
}

type ProductConnection {
  pageInfo: PageInfo!
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  name: String!
  description: String!
  activations: ActivationCreateManyWithoutProductsInput
  checkpoint: CheckpointCreateOneWithoutProductsInput!
  checkLimit: Int
}

input ProductCreateManyWithoutActivationsInput {
  create: [ProductCreateWithoutActivationsInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateManyWithoutCheckpointInput {
  create: [ProductCreateWithoutCheckpointInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateWithoutActivationsInput {
  name: String!
  description: String!
  checkpoint: CheckpointCreateOneWithoutProductsInput!
  checkLimit: Int
}

input ProductCreateWithoutCheckpointInput {
  name: String!
  description: String!
  activations: ActivationCreateManyWithoutProductsInput
  checkLimit: Int
}

type ProductEdge {
  node: Product!
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  checkLimit_ASC
  checkLimit_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProductPreviousValues {
  id: ID!
  name: String!
  description: String!
  checkLimit: Int
}

input ProductScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  checkLimit: Int
  checkLimit_not: Int
  checkLimit_in: [Int!]
  checkLimit_not_in: [Int!]
  checkLimit_lt: Int
  checkLimit_lte: Int
  checkLimit_gt: Int
  checkLimit_gte: Int
  AND: [ProductScalarWhereInput!]
  OR: [ProductScalarWhereInput!]
  NOT: [ProductScalarWhereInput!]
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
  AND: [ProductSubscriptionWhereInput!]
  OR: [ProductSubscriptionWhereInput!]
  NOT: [ProductSubscriptionWhereInput!]
}

input ProductUpdateInput {
  name: String
  description: String
  activations: ActivationUpdateManyWithoutProductsInput
  checkpoint: CheckpointUpdateOneRequiredWithoutProductsInput
  checkLimit: Int
}

input ProductUpdateManyDataInput {
  name: String
  description: String
  checkLimit: Int
}

input ProductUpdateManyMutationInput {
  name: String
  description: String
  checkLimit: Int
}

input ProductUpdateManyWithoutActivationsInput {
  create: [ProductCreateWithoutActivationsInput!]
  delete: [ProductWhereUniqueInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutActivationsInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutActivationsInput!]
  deleteMany: [ProductScalarWhereInput!]
  updateMany: [ProductUpdateManyWithWhereNestedInput!]
}

input ProductUpdateManyWithoutCheckpointInput {
  create: [ProductCreateWithoutCheckpointInput!]
  delete: [ProductWhereUniqueInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutCheckpointInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutCheckpointInput!]
  deleteMany: [ProductScalarWhereInput!]
  updateMany: [ProductUpdateManyWithWhereNestedInput!]
}

input ProductUpdateManyWithWhereNestedInput {
  where: ProductScalarWhereInput!
  data: ProductUpdateManyDataInput!
}

input ProductUpdateWithoutActivationsDataInput {
  name: String
  description: String
  checkpoint: CheckpointUpdateOneRequiredWithoutProductsInput
  checkLimit: Int
}

input ProductUpdateWithoutCheckpointDataInput {
  name: String
  description: String
  activations: ActivationUpdateManyWithoutProductsInput
  checkLimit: Int
}

input ProductUpdateWithWhereUniqueWithoutActivationsInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutActivationsDataInput!
}

input ProductUpdateWithWhereUniqueWithoutCheckpointInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutCheckpointDataInput!
}

input ProductUpsertWithWhereUniqueWithoutActivationsInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithoutActivationsDataInput!
  create: ProductCreateWithoutActivationsInput!
}

input ProductUpsertWithWhereUniqueWithoutCheckpointInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithoutCheckpointDataInput!
  create: ProductCreateWithoutCheckpointInput!
}

input ProductWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  activations_every: ActivationWhereInput
  activations_some: ActivationWhereInput
  activations_none: ActivationWhereInput
  checkpoint: CheckpointWhereInput
  checkLimit: Int
  checkLimit_not: Int
  checkLimit_in: [Int!]
  checkLimit_not_in: [Int!]
  checkLimit_lt: Int
  checkLimit_lte: Int
  checkLimit_gt: Int
  checkLimit_gte: Int
  AND: [ProductWhereInput!]
  OR: [ProductWhereInput!]
  NOT: [ProductWhereInput!]
}

input ProductWhereUniqueInput {
  id: ID
  name: String
}

type Query {
  activation(where: ActivationWhereUniqueInput!): Activation
  activations(where: ActivationWhereInput, orderBy: ActivationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Activation]!
  activationsConnection(where: ActivationWhereInput, orderBy: ActivationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ActivationConnection!
  bracelet(where: BraceletWhereUniqueInput!): Bracelet
  bracelets(where: BraceletWhereInput, orderBy: BraceletOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bracelet]!
  braceletsConnection(where: BraceletWhereInput, orderBy: BraceletOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BraceletConnection!
  checks(where: CheckWhereInput, orderBy: CheckOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Check]!
  checksConnection(where: CheckWhereInput, orderBy: CheckOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CheckConnection!
  checkpoint(where: CheckpointWhereUniqueInput!): Checkpoint
  checkpoints(where: CheckpointWhereInput, orderBy: CheckpointOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Checkpoint]!
  checkpointsConnection(where: CheckpointWhereInput, orderBy: CheckpointOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CheckpointConnection!
  group(where: GroupWhereUniqueInput!): Group
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group]!
  groupsConnection(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GroupConnection!
  product(where: ProductWhereUniqueInput!): Product
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  activation(where: ActivationSubscriptionWhereInput): ActivationSubscriptionPayload
  bracelet(where: BraceletSubscriptionWhereInput): BraceletSubscriptionPayload
  check(where: CheckSubscriptionWhereInput): CheckSubscriptionPayload
  checkpoint(where: CheckpointSubscriptionWhereInput): CheckpointSubscriptionPayload
  group(where: GroupSubscriptionWhereInput): GroupSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  username: String!
  password: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  username: String!
  password: String!
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  username: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  username: String
  password: String
}

input UserUpdateInput {
  username: String
  password: String
}

input UserUpdateManyMutationInput {
  username: String
  password: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  username: String
}
`
      }
    