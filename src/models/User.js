const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim :true
    },
    email : {
        type : String,
        required : true,
        trim :true
    },
    phone : {
        type : String,
        required : true,
        trim :true
    },
    user_id : {
        type : String,
        required : true
    },
    salt : {
        type : String,
        required : true 
    },
    password : {
        type : String,
        required : true 
    },
    markets : [{type : mongoose.Schema.Types.ObjectId, ref: "market"}],
    register_date : {
        type : Date,
        required : true,
        default: Date.now
    }
});

const User = mongoose.model("user",userSchema);

module.exports = User;