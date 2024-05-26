const mongoose = require('mongoose');
require('dotenv').config()
// const mongoUrl = process.env.MONGODB_URL_LOCAL
const mongoUrl = process.env.MONGODB_URL
mongoose.connect(mongoUrl ,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('connected' , ()=>{
    console.log('database connected successfully!!');
})
db.on('error', (err)=>{
    console.log('error occured', err);
})
db.on('disconnected' , ()=> {
    console.log('disconnected oopsy');
})

//export the database connection    
module.exports = db;