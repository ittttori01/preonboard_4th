const productService = require("../services/productService");

/**
 *  @상품_등록
 *  @route POST /product/register
 *  @access public
 *  @err
 */
const registerProduct = async(req,res) => {

    const {market_id,sku,title,description,category_num,country,img_url,status, qty, days_to_ship } = req.body;

    const register = await productService.registerProduct(market_id,sku,title,description,category_num,country,img_url,status, qty, days_to_ship)

    if(register) {

        res.status(200).send("등록되었습니다.");
    }else {

        res.status(500).send("저장에 실패 하였습니다. 다시 시도 해 주세요.");
    }

    
}

/**
 *  @상품_조회
 *  @route get /product/:product_id
 *  @access public
 *  @err
 */
 const getProduct = async(req,res) => {

    const { product_id } = req.params;

    const productInfo = await productService.getProduct(product_id);

    res.status(200).send({data:productInfo});
    
}

/**
 *  @상품_삭제
 *  @route DELETE /product/delete
 *  @access public
 *  @err
 */
const deleteProduct = async(req,res) => {

    const {product_id} = req.body;
    
    await productService.deleteProduct(product_id);

    res.status(200).send("삭제되었습니다.");
    
}

/**
 *  @상품_수정
 *  @route PUT /product/edit
 *  @access public
 *  @err
 */
const updateProduct = async(req,res) => {

    const {product_id,sku,title,description,category_num,country,img_url,status,qty,days_to_ship} = req.body;

    await productService.updateProduct(product_id,sku,title,description,category_num,country,img_url,status,qty,days_to_ship);
    
    res.status(200).send({message : "수정되었습니다." ,product_id:product_id});
    

}

module.exports = {
  
    registerProduct,
    getProduct,
    deleteProduct,
    updateProduct
}