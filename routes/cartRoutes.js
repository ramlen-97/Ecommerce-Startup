const express=require('express');
const router=express.Router();
const cartControllers=require('../controllers/userCartController');

router.get('/cart/:userId',cartControllers.getCartForUser);

router.post('/cart/:userId',cartControllers.addProductToCart);


module.exports=router;