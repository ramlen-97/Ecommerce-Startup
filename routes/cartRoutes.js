const express=require('express');
const router=express.Router();
const cartControllers=require('../controllers/userCartController');

router.get('/:userId',cartControllers.getCartForUser);

router.post('/:userId',cartControllers.addProductToCart);


module.exports=router;