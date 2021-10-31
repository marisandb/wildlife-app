// import express from 'express';
// import { appendFile } from 'fs';


// import connectDB from './config/db';
// // import { connect } from 'net';
// // const cors=require('cors');
// connectDB();





// app.use(cors());
// app.use(express.json());









// server.listen().then(({url})=>{
//     console.log(`Server is running on port ${url}`);

// });

// // import express from 'express';
// // import { connect } from 'net';
// // const cors=require('cors');
// // const { MongoClient } = require('mongodb')

// // require('dotenv').config();

// // const app=express();
// // const port =process.env.Port || 5000;


// // app.use(cors());
// // app.use(express.json());

// // const uri =process.env.ATLAS_URI;
// // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// // const connection =mongoose.connection;
// // connection.once('open',() => {
// // console.log("MongoDB database connection established successfully")

// // });

// // app.listen(port, () =>{
// //     console.log(`Backend Server is running on port ${port}`);

// });
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://kay:myRealPassword@cluster0.mongodb.net/test?w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//  // perform actions on the collection object
//   client.close();
// });

