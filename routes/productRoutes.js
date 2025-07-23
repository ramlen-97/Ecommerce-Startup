const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send("Fetching all products");
})

router.get('/:productId',(req,res)=>{
    const id=req.params.productId;
    res.send(`Fetching product with ID : ${id}`);
})

router.post('/',(req,res)=>{
    res.send("Adding a new product");
})

module.exports=router;