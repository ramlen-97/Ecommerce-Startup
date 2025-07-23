const path=require('path');
const { sendErrorResponse } = require('../utils/response');
const{sendResponse}=require('../utils/response');

const getAllProducts=(req,res)=>{
    res.sendFile(path.join(__dirname,"../view/product.html"));
}

const getProductById=(req,res)=>{
    const id=req.params.productId;
    return sendResponse(res,`Fetching product with ID : ${id}`,200);
}

const addProduct=(req,res)=>{
    console.log(req.body);
    return sendResponse(res,{name:req.body.productName},201)
}

module.exports={
    getAllProducts,
    getProductById,
    addProduct
}