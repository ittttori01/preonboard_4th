const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const marketSchema = new mongoose.Schema({
    user: {
        type : mongoose.Schema.Types.ObjectId, 
        ref: "user"
    },
    user_id : {
        type : String,
        required : true,
    },
    market_id : {
        type : Number,
        required : false
    },
    tax_num : {
        type : String,
        required : false,
    },
    market_name : {
        type : String,
        required : true,
        trim : true
    },
    return_address : {
        type : String,
        required : true,
    },
    products : [{type : mongoose.Schema.Types.ObjectId, ref: "product"}],
    register_date : {
        type : Date,
        required : true,
        default: Date.now
    }
});

marketSchema.plugin(AutoIncrement, {inc_field: 'market_id'});
const Market = mongoose.model("market",marketSchema);

module.exports = Market;