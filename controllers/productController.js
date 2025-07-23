const path=require('path');

const getAllProducts=(req,res)=>{
    res.sendFile(path.join(__dirname,"../view/product.html"));
}

const getProductById=(req,res)=>{
    const id=req.params.productId;
    res.send(`Fetching product with ID : ${id}`);
}

const addProduct=(req,res)=>{
    console.log(req.body);
    res.send({name:req.body.productName});
}

module.exports={
    getAllProducts,
    getProductById,
    addProduct
}