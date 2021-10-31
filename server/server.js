const express = require('express');
const {AolloServer} = require('apollo-server-express');
const path = require('path');

const {typeDefs, resolvers } = require('./schemas');
const {authMiddleWare} = require('./utils/auth'); 
const db = require('./config/connection')
//more stuff to be added in a second
app.use(express.json());
const server = new ApolloServer({ 
    typeDefs, 
    resolvers, 
});
    server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
    });
           
