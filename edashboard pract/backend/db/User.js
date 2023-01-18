const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name:String,
    email:String,
    pass:String
})

module.exports =  mongoose.model('users',userSchema)