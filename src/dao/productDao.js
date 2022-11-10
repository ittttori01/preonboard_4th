const Product = require("../models/Product");
const Market = require("../models/Market");
const Error = require("../middlewares/errorConstructor")

const getMarketObjectId = async(market_id) => {

    const objectId =(await Market.findOne({market_id : market_id}))._id
    
    return objectId;
}

const registerProduct = async(market,sku,title,description,category_num,country,img_url,status, qty, days_to_ship) => {


    let product = new Product({
        market,
        sku,
        title,
        description,
        category_num,
        country,
        img_url,
        status,
        qty,
        days_to_ship

    })

    product.title = title;
    product.description = description;
    product.category_num = category_num;
    product.country = country;
    product.img_url = img_url;
    product.status = status;
    product.qty = qty;
    product.days_to_ship = days_to_ship;   
   
    await product.save((err) => {
        
        if(err) {
  
            throw new Error("상품정보 저장 실패");

        } else {
            return true;

        }
            
    });



}

const getProduct = async(product_id) => {
    
    const data = await Product.findOne({_id:product_id}).populate("market");

    return data; 
}

const deleteProduct = async(product_id) => {

    await Product.updateOne({_id :product_id},{ status : "DELETED"});
    
    return true;
    
}

const getSku = async(market_id,sku) => {
    
    const productSku = await Product.findOne( {sku:sku},{market:market_id});
    
    return productSku;
}

const updateProduct = async(product_id,sku,title,description,category_num,country,img_url,status,qty,days_to_ship) => {

    await Product.updateOne(
        { _id: product_id },
        {
          $set: {
            sku : sku,
            title : title,
            description : description,
            category_num : category_num,
            country : country,
            img_url : img_url,
            status : status,
            qty : qty,
            days_to_ship : days_to_ship
          }
        }).exec((err,result)=> {

            if(err) throw new Error("상품 수정 실패");

            return true;
        })

}

module.exports = {
    getMarketObjectId,
    registerProduct,
    getProduct,
    deleteProduct,
    getSku,
    updateProduct
}