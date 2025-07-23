const { sendErrorResponse } = require('../utils/response');
const{sendResponse}=require('../utils/response');

const getAllUsers=(req,res)=>{
    return sendResponse(res,"Fetching all users",200);
}

const getUserById=(req,res)=>{
    const id=req.params.userId;
    return sendResponse(res,`Fetching user with ID : ${id}`,200);
}

const addUser=(req,res)=>{
    return sendResponse(res,"Adding a new user",201);
}

module.exports={
    getAllUsers,
    getUserById,
    addUser
}