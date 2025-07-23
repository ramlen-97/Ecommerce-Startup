const { sendErrorResponse } = require('../utils/response');
const{sendResponse}=require('../utils/response');

const getCartForUser=(req,res)=>{
    const id=req.params.userId;
    return sendResponse(res,`Fetching cart for user with ID : ${id}`,200);
}

const addProductToCart=(req,res)=>{
    const id=req.params.userId;
    return sendResponse(res,`Adding product to cart for user with ID : ${id}`,200);
}

module.exports={
    getCartForUser,
    addProductToCart
}