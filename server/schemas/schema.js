const { gql } = require("apollo-server-express");

const typeDefs = gql`
  #  to modify data, schema needs to define mutations

  type Mutation {
    # signUp(input: SignUpInput!): AuthUser!
    # signIn(input: SignInInput!): AuthUser!

    # createWildliferecord(title:String):AuthUser!:Wildliferecord!
    # updateWildliferecord(title:String):AuthUser!:Wildliferecord!

    deleteWildliferecord(id: ID!): Boolean!

    # createAnimal(title:String):AuthUser!:Animal!
    # updateAnimal(title:String):AuthUser!:Animal!
    # addUserAnimal(animalId:ID!, userId:ID!):Animal
    deleteAnimal(id: ID!): Boolean!
    addWildliferecord(content: String!, userId: ID!): Wildliferecord
    addAnimal(animalId: ID!, Body: String!): Animal
  }

  input SignUpInput {
    email: String!
    password: String!
    name: String!
  }

  input SignInInput {
    email: String!
    password: String!
  }

  type AuthUser {
    user: User!
    token: String!
    email: String!
  }
  type User {
    id: ID!
    name: String!
    email: String!
    username: String
    firstName: String
    lastName: String
  }
  # Object types, scalars, and enums
  # are the only kinds of types you can define in GraphQL.

  type Animal {
    id: ID!
    datein: String!
    datefound: String!
    progress: Float!
    title: String
    wildliferecords: [Wildliferecord]
    speciesName: String!
    circumstance: String
    initObservations: String!
    animaltype: String!
    isCompleted: Boolean
    createdAt: String
    sAgeGroup(speciesAges: SpeciesAgeGroup): String!
  }

  type Wildliferecord {
    id: ID
    content: String!
    username: String
    createdAt: String
    title: String
    wildliferecordbody: String
  }
  #   # The "Query" type is special: it lists all of the available queries that
  #   # clients can execute, along with the return type for each. In this
  #   # case, the "books" query returns an array of zero or more Books (defined above).
  type Comment {
    id: ID!
    title: String!
    name: String
    # type: String
  }

  type Query {
    myAnimals: [Animal]!
    # getAnimal:(id: ID!): Animal
    speciesAges: String
    me: User
    users: [User]
    user(username: String!): User
  }

  enum SpeciesAgeGroup {
    newborn
    hatchling
    nestling
    fledgling
    juvenile
  }
`;

module.exports = typeDefs;
