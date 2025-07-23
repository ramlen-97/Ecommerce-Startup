const express=require('express');
const router=express.Router();
const userControllers=require("../controllers/userController");

router.get('/',userControllers.getAllUsers)

router.get('/:userId',userControllers.getUserById)

router.post('/',userControllers.postUser)

module.exports=router;