require('dotenv').config();
const mongoose=require('mongoose');
// const { MongoClient } = require('mongodb')
const connectDB =async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        });
 
console.log("MongoDB database connection established successfully");
        }catch (error){
            console.error("MongoDB connection FAIL");
            process.exit(1);
        }

}

module.exports=connectDB;