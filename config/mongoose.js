//require mongoose to connect to DB
const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config({ path: 'config.env' });

mongoose.connect(process.env.DB);

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Error connecting to mongodb'));

db.once('open',function(){
    console.log('Connected to database::MongoDB');
});

module.exports = db;
