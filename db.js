const mongoose = require('mongoose');
const mongoUrl = 'mongodb://127.0.0.1:27017/hotels'
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