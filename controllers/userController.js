const asyncHandler=require("express-async-handler");
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken");
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
    const{email,password}=req.body;
    if(!email||!password){
        res.status(400)
        throw new Error("All fields are necessary!")
    }
    const user=await Users.findOne({email});
    if(user && (await bcrypt.compare(password,user.password))){
        const accessToken=jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id
            }
        },
        process.env.ACCESS_TOKEN_SECRET,{expiresIn:"1m"})
        res.status(200).json({accessToken})
    }else{
        res.status(401)
        throw new error("email or password  is not valid")
    }
    res.status(201).json({msg:"User has been login in"})
})
const currentUser=asyncHandler(async(req,res)=>{
    res.status(201).json(req.user)
})

module.exports={registerUser,loginUser,currentUser}