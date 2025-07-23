const express=require('express');
const router=express.Router();
const userControllers=require("../controllers/userController");

router.get('/users',userControllers.getAllUsers)

router.get('/users/:userId',userControllers.getUserById)

router.post('/users',userControllers.addUser)

module.exports=router;