<<<<<<< HEAD
import express from 'express';
// import { connect } from 'net';
const cors=require('cors');
const { MongoClient } = require('mongodb').MongoClient;

require('dotenv').config();

const app=express();
const port =process.env.Port || 5000;


app.use(cors());
app.use(express.json());

const uri =process.env.ATLAS_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection =mongoose.connection;
connection.once('open',() => {
console.log("MongoDB database connection established successfully")

});

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);

});
=======
// import express from 'express';
// import { connect } from 'net';
// const cors=require('cors');
// const { MongoClient } = require('mongodb')

// require('dotenv').config();

// const app=express();
// const port =process.env.Port || 5000;


// app.use(cors());
// app.use(express.json());

// const uri =process.env.ATLAS_URI;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// const connection =mongoose.connection;
// connection.once('open',() => {
// console.log("MongoDB database connection established successfully")

// });

// app.listen(port, () =>{
//     console.log(`Backend Server is running on port ${port}`);

// });
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://kay:myRealPassword@cluster0.mongodb.net/test?w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//  // perform actions on the collection object
//   client.close();
// });

// ATLAS_URI=mongodb+src://zimmermanc6588:<Project3>@wildlife.hd29f.mongodb.net/wildlife?retryWrites=true&w=majority
>>>>>>> ff0063c (front and back end not connect to server or database)
