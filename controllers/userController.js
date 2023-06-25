const asyncHandler=require("express-async-handler");
const registerUser=asyncHandler(async(req,res)=>{
    res.status(201).json({msg:"User has been registered"})
})
const loginUser=asyncHandler(async(req,res)=>{
    res.status(201).json({msg:"User has been login in"})
})
const currentUser=asyncHandler(async(req,res)=>{
    res.status(201).json({msg:"User's current informaton"})
})

module.exports={registerUser,loginUser,currentUser}