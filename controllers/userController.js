const asyncHandler=require("express-async-handler");
const bcrypt=require("bcrypt")
const Users=require("../models/userModel");
const registerUser=asyncHandler(async(req,res)=>{
    const {username,email,password}=req.body;
    if(!username||!email||!password){
        res.status(400)
        throw new Error("All fields are necessary!")
    }
    const availableUser=await Users.findOne({email});
    if(availableUser){
        res.status(400)
        throw new Error("User already exist!")
    }
    const hashedpassword= await bcrypt.hash(password,10);
    const createUser= await Users.create({
        username,email,password:hashedpassword
    })
    console.log(`user created ${createUser}`);
    if(createUser){
        res.status(201).json({_id:createUser.id,email:createUser.email})

    }else{
        res.status(400)
        throw new Error("User data is not valid")
    }
    res.status(201).json({msg:"User has been registered"})
})
const loginUser=asyncHandler(async(req,res)=>{
    res.status(201).json({msg:"User has been login in"})
})
const currentUser=asyncHandler(async(req,res)=>{
    res.status(201).json({msg:"User's current informaton"})
})

module.exports={registerUser,loginUser,currentUser}