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
