const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    foods: [Food]
    friends: [User]
  }

  type Food {
    _id: ID
    foodText: String
    createdAt: String
    username: String
    wildliferecordCount: Int
    wildliferecords: [Wildliferecord]
  }

  type Wildliferecord {
    _id: ID
    wildliferecordBody: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    foods(username: String): [Food]
    food(_id: ID!): Food
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addFood(foodText: String!): Food
    addWildliferecord(foodId: ID!, wildliferecordBody: String!): Food
    addFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;
