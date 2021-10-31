// import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import  MongoClient  from 'mongodb';
import bcrypt from 'bcryptsjs';
import jwt  from 'jsonwebtoken';

const { ApolloServer, gql } = require('apollo-server'); //server stuff?
const dotenv= require('dotenv'); 
dotenv.config();
const {DB_URI,DB_NAME, JWT_SECERT} = process.env;

// I DONT KNOW WHAT THIS CODE IS FOR or why its here
//how long they have till they need to relog in
const getToken =(user)=>jwt.sign({id: user._id}, JWT_SECERT, {expiresIn:'9 hrs'});

const getUsersFromToken =async (token, db)=>{
  if (!token) {return null}

  const tokenData =jwt.verify(token, JWT_SECERT); 
  if (!tokenData?.id) {
    return null;
  }
return  await db.collection('Users').findOne({_id:ObjectID(tokenData.id) }); // this line of code on the front end speaks directly to your backend database?
}
// until here


// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

//this should be in your schemas typedef.js
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  
 type Mutation{
  signUp(input: SignUpInput!): AuthUser!
   signIn(input: SignInInput!): AuthUser!

createwildlifeRecond:WildlifeRecord!
 }
 input SignUpInput {
   email:String!
   password:String!
    name:String!

 }

 input SignInInput{
   email: String!
   password: String!
 }

 type AuthUser {
   user:User!
   token:String!
 }
  type User {
    id: ID!
    name: String!
    email:String!
   }

   type WildlifeRecord{
     Date in:String!
     Date found:String!
     progress:Float!
     
     users:[User!]!
     animals:[Animal!]!
   }

   type Animal{
   id: ID!
   content: String!
   isCompleted: Boolean!

  type Query{
    myWildlifeRecord:[WildlifeRecord]!
    myAnimal:(id:ID!):Animal

  
   }
 

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
  }
]

 // resolvers js file on backend!!!!!

const resolvers = {
  Query: {
    books: (root, data, context) => books,

  },

  Mutation: {
    signUp:async (_,{input}, {db})=> {
      const hashedPassword =bcrypt.hashSync(input.password);
      const newUser={
        ...input,
            pasword:hashedPassword,
    }

      

  const result =await db.collection('Users').insert(user); 
const  user= result.ops[0]
  return {
  user,
  token: getToken(user),
}  
},
    signIn: async(_,{input}, {db})=>{
      const user=await db.collection('User').findOne({email:input.email});
      const isPasswordCorrect= user && bcrypt.compareSync(input.password, user.password);
    
      if (!user || !isPasswordCorrect){
      throw new Error('Invaild credentials!');
    }    
  
    
    return {
      user,
      token: getToken(user),
    }
    },
  

    
    





// this should be inside the server js

const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  context: ({req})=> {
    const user = await getUserFromToken(req.headers.authorization, db);
    return{
    db,
    user,
 
  }),

  },

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
  

})
}

server();


