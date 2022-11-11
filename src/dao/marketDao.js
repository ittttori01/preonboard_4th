const Market = require("../models/Market");
const User = require("../models/User");
const Error = require("../middlewares/errorConstructor");
const Product = require("../models/Product");

const getObjectId = async(user_id) => {

    const objectId =(await User.findOne({user_id : user_id}))._id
    
    return objectId;
}

const checkMarketName = async(market_name) => {

    const marketCheck = await Market.findOne({market_name : market_name});


    return marketCheck;

}

const registerMarket = async(user,user_id,tax_num,market_name,return_address) => {

    let market = new Market({
        user,
        user_id,
        tax_num,
        market_name,
        return_address

    })

    market.user = user;
    market.user_id = user_id;
    market.tax_num = tax_num;
    market.market_name = market_name;
    market.return_address = return_address;

    await market.save();

    return true;
}

const getMarketObjectId = async(market_id) => {

    const objectId = (await Market.findOne({market_id : market_id}))._id

    return objectId;
}

const getMarketProducts = async(market, title, country,category) => {

    const productList = await Product.find(
                {  $and: [
                    { $and: [ { title :{ $regex : '.*'+ title + '.*' }}] },
                    { $and: [ { "country": { $regex : '.*'+ country + '.*' }}] },
                    { $and :[ { category_num : category> 0 ? {$eq: category } : {$gt: category }}] },
                    { $and: [ { market : market}] },
                    { $and: [ { status : {$ne : "DELETED"}}] }
                ]},        
                ).sort({
                    register_date: -1 ,
                    days_to_ship : +1
                })
            
             

    return productList;
}


module.exports = {
    getObjectId,
    checkMarketName,
    registerMarket,
    getMarketObjectId,
    getMarketProducts,
}