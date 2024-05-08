const mongoose = require('mongoose')

const faceSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    base64Image:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Face',faceSchema)  