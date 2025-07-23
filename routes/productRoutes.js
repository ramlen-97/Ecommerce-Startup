const express=require('express');
const router=express.Router();
const productControllers=require('../controllers/productController');

router.get('/',productControllers.getAllProducts)

router.get('/:productId',productControllers.getProductById)

router.post('/',productControllers.postProduct);

module.exports=router;