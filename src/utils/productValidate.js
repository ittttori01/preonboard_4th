const Error = require("../middlewares/errorConstructor");
const productDao = require("../dao/productDao");

const checkRegisteredSku = async(product_id,sku) => {

    const market_id = (await productDao.getProduct(product_id)).market._id;

    const originalSku = (await productDao.getProduct(product_id)).sku;

    if(originalSku !== sku) {

        const productSku = await productDao.getSku(market_id,sku);
        
        if(productSku) {
    
            throw new Error("이미 존재하는 sku 입니다. ", 400);
        }
     
    }

    return true;
}

const checkSku = async(market_id,sku) => {

    const productSku = await productDao.getSku(market_id,sku);
        
    if(productSku) {

        throw new Error("이미 존재하는 sku 입니다. ", 400);
    }

    return true;
}

module.exports = {
    checkRegisteredSku,
    checkSku
}