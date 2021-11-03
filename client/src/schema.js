const { gql } = require("apollo-server");

const typeDefs = gql`
  # Your schema will go here
  # type Mutation {
  #   signUp(input: SignUpInput!): AuthUser!
  #   signIn(input: SignInInput!): AuthUser!
  #   addWildliferecord(content: String!): Wildliferecord
  #   addAnimal(animalId: ID!, wildliferecordBody: String!): Animal
  # }

  # input SignUpInput {
  #   email: String!
  #   password: String!
  #   name: String!
  # }

  # input SignInInput {
  #   email: String!
  #   password: String!
  # }

  # type AuthUser {
  #   user: User!
  #   token: String!
  # }
  # type User {
  #   id: ID!
  #   name: String!
  #   email: String!
  #   username: String
  #   firstName: String
  #   lastName: String
  # }

  type Animal {
    _id: ID!
    datein: String!
    datefound: String!
    progress: Float!
    title: String
    wildliferecords: [Wildliferecord]
    speciesName: String!
    circumstance: String
    initObservations: String!
    animaltype: String!
    isCompleted: Boolean!
    createdAt: String
    animalsbody: String

    # users: [User!]!
    # animals: [Animal!]!
  }

  type Wildliferecord {
    _id: ID
    content: String!
    username: String
    createdAt: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).

  # type Query {
  #   myAnimals: [Animal]!
  #   getAnimal(id: ID!): Animal
  # }
`;

module.exports = typeDefs;
