import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import  MongoClient  from 'mongodb';

const { ApolloServer, gql } = require('apollo-server');
const dotenv= require('dotenv');
dotenv.config();
const {DB_URI,DB_NAME} = process.env;




// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  
// type Mutation{
//   signUp(input: SignUpInput): AuthUser!
//   signIn(input: SignInInput): AuthUser!
// }

// input SignUpInput {
//   email:String!
//   password:String!
//    name:String!

// }

// input SignInInput{
//   email: String!
//   password: String!
// }

// type AuthUser {
//   user:User!
//   token:String!
// }
//  type User {
//    id: ID!
//    name: String!
//    email:String!
//   }

//   type WildlifeRecord{
//     Date in:String!
//     Date found:String!
//     progress:Float!
//     users:[User!]!
//     animals:[Animal!]!
//   }

//   type Animal{
//   id: ID!
//   content: String!
//   isCompleted: Boolean!

//   wildliferecond:WildlifeRecord!
  
//   }


# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each. In this
# case, the "books" query returns an array of zero or more Books (defined above).
type Query {
  books: [Book]
}
`;


const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];
 // Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: (root, data, context) => books,

  },

  // Mutation: {
  //   signUp:()=> {
  //     console.log()

  //   },
  //   signIn:()=> {

  //   },
  
};

const start =async() => {
  const client = new MongoClient(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  const db=client.db(DB_NAME);

  const context ={
    db,
  }

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers, context });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀 Frontend Server ready at ${url}`);
  });

  const connection =client.connection;
connection.once('open',() => {
console.log("MongoDB database connection established successfully")

});
}
start();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
ReactDOM.render(
  // eslint-disable-next-line react/jsx-no-undef
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);