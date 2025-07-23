const express=require('express');
const router=express.Router();
const productControllers=require('../controllers/productController');

router.get('/products',productControllers.getAllProducts)

router.get('/products/:productId',productControllers.getProductById)

router.post('/products',productControllers.addProduct);

module.exports=router;