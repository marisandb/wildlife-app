const mongoose = require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const {DB_URI,DB_NAME, JWT_SECERT} = process.env;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/wildlifeapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

module.exports = mongoose.connection;