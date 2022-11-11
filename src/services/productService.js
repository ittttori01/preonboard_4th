const productDao = require("../dao/productDao");
const Error = require("../middlewares/errorConstructor");
const productValidate = require("../utils/productValidate");

const registerProduct = async(market_id,sku,title,description,category_num,country,img_url,status, qty, days_to_ship) => {

    if(!sku){
        throw new Error("sku는 입력 항목입니다. ", 400);
    }
    
    if(!title){
        throw new Error("아이템명은 필수 입력 항목입니다. ", 400);
    }

    if(!category_num) {
        throw new Error("카테고리를 선택 해 주세요.", 400);
    }


    //마켓_id가져오기
    const market = await productDao.getMarketObjectId(market_id);

    //sku 중복 체크 
    await productValidate.checkSku(market_id,sku);

    //프로덕트 등록
    await productDao.registerProduct(market,sku,title,description,category_num,country,img_url,status, qty, days_to_ship);

    return true;


}

const getProduct = async(product_id) => {

    //상품 정보가져오기
    const productInfo = await productDao.getProduct(product_id);

    return productInfo;

}


const deleteProduct = async(product_id) => {

    //상품 삭제
    await productDao.deleteProduct(product_id) ;

    return true;
}

const updateProduct = async(product_id,sku,title,description,category_num,country,img_url,status,qty,days_to_ship) => {

    //같은 market_id중에서 같은 sku값이 있는지 검증
    await productValidate.checkRegisteredSku(product_id,sku);

    //상품 수정
    await productDao.updateProduct(product_id,sku,title,description,category_num,country,img_url,status,qty,days_to_ship);

    return true;
}

module.exports = {

    registerProduct,
    getProduct,
    deleteProduct,
    updateProduct
    
}
