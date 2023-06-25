const express=require("express");
const router=express.Router();
router.post("/register",(req,res)=>{
    res.status(201).json({msg:"User has been registered"})
})
router.post("/login",(req,res)=>{
    res.status(201).json({msg:"User has been login in"})
})
router.get("/current",(req,res)=>{
    res.status(201).json({msg:"User's current informaton"})
})
module.exports=router;