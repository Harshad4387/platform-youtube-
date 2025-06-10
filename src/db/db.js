const mongoose = require('mongoose');
const dbname = require('../constant.js')

const dbconnect = async()=> {
    try { 
        mongoose.connect(`${process.env.MONGO_URL}/${dbname}`)
        console.log(`database connected successfully`);
    }
    catch(error){
       console.log(`error  : ${error}` )
    }
}
module.exports = dbconnect;