const marketDao = require("../dao/marketDao");
const Error = require("../middlewares/errorConstructor");

const registerMarket = async(user_id,tax_num,market_name,return_address) => {

    if(!market_name) {

        throw new Error("마켓 이름은 필수 입력 항목입니다. ", 400);
    }

    if(!return_address) {

        throw new Error("반송 주소는 필수 입력 항목입니다. ", 400);
    }
    
    const user = await marketDao.getObjectId(user_id);

    await  marketDao.registerMarket(user,user_id,tax_num,market_name,return_address);

}

module.exports = {
    
    registerMarket,
}