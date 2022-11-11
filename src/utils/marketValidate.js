const Error = require("../middlewares/errorConstructor");
const marketDao = require("../dao/marketDao");

const checkMarketName = async(market_name) => {
    
    const marketNameCheck = await marketDao.checkMarketName(market_name);

    if(marketNameCheck) {

        throw new Error("이미존재하는 마켓 명입니다.",400);
    }else {

        return true;
    }
};

module.exports = {
    checkMarketName,
}