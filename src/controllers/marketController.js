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

/**
 *  @마켓_상품리스트조회
 *  @route GET /market/products/:market_id
 *  @access public
 *  @err
 */

 const getMarketProducts = async(req,res) => {

    const {market_id} = req.params;

    const title = req.query.title || "";
    const country = req.query.country || "";
    const category = req.query.category || 0;

    const productList = await marketService.getMarketProducts(market_id,title,country,category);
    
    res.status(200).send({list : productList});
    
}


module.exports = {
  
    registerMarket,
    getMarketProducts,
}