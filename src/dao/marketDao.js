const Market = require("../models/Market");
const Error = require("../middlewares/errorConstructor")

const registerMarket = async(user_id,tax_num,market_name,return_address) => {

    let market = new Market({
        user_id,
        tax_num,
        market_name,
        return_address

    })

    market.user_id = user_id;
    market.tax_num = tax_num;
    market.market_name = market_name;
    market.return_address = return_address;

    await market.save();

    return true;
}

module.exports = {
    registerMarket,
}