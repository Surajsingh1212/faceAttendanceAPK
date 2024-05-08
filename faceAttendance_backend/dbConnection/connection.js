const mongoose = require('mongoose');
require('dotenv').config() ;
const MongoUrl = process.env.MONGO_URL; 

const DBConnection =async ()=>{
            try{
                await mongoose.connect(MongoUrl)
                console.log('MongoDB Database Connected Successfully.')
            }
            catch(error)
            {
                console.log("MongoDB Database Connection Error!",+ error)
            }
}

module.exports = DBConnection ; 