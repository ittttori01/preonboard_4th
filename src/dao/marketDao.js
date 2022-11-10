const Market = require("../models/Market");
const User = require("../models/User");
const Error = require("../middlewares/errorConstructor")

const getObjectId = async(user_id) => {

    const objectId =(await User.findOne({user_id : user_id}))._id
    
    return objectId;
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

module.exports = {
    getObjectId,
    registerMarket,
}