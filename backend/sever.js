import express from 'express';
const cors=require('cors');
const mongoose=require('mongoose');

require('dotnv').config();

const app=express();
const port =process.env.Port || 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);

});