const marketService = require("../services/marketService");

/**
 *  @마켓_등록
 *  @route POST /market/register
 *  @access public
 *  @err
 */

const registerMarket = async(req,res) => {

    const {user_id,tax_num,market_name,return_address} = req.body;

    await marketService.registerMarket(user_id,tax_num,market_name,return_address)

    res.status(200).send("등록되었습니다.");

    
}

module.exports = {
  
    registerMarket
}