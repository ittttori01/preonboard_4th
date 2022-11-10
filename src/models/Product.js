const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const productSchema = new mongoose.Schema({
    market: {
        type : mongoose.Schema.Types.ObjectId, 
        ref: "market"
    },
    product_id : {
        type : Number,
        required : false
    },
    sku : {
        type : String,
        required : true,
        trim : true
    },
    title : {
        type : String,
        required : true,
        trim : true
    },
    description : {
        type : String,
        required : false,
        trim : true
    },
    category_num : {
        type : Number,
        required : true,
    },
    country : {
        type : Array,
        required : true,
        default : {"country" : "Korea"},
    },
    img_url : {
        type : String,
        required : false,
        trim : true
    },
    status : {
        type : String,
        required : true,
    },
    qty : {
        type : Number,
        required : true,
    
    },
    days_to_ship : {
        type : Number,
        required : true,
    },
    register_date : {
        type : Date,
        required : true,
        default: Date.now
    }
});

productSchema.plugin(AutoIncrement, {inc_field: 'product_id'});
const Product = mongoose.model("product",productSchema);

module.exports = Product;