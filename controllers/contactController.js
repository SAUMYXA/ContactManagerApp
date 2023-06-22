const asyncHandler=require("express-async-handler")
const getContacts= asyncHandler(async (req,res)=>{
    res.status(201).json({message:"get all the contacts"})
    });
    const getContact=asyncHandler(async (req,res)=>{
        res.status(201).json({message:`get contact for ${req.params.id}`})
        })

    const createContact=asyncHandler(asyncHandler(async(req,res)=>{
        console.log("the requestbody is:",req.body);
        const{name,email,phone}=req.body;
        if(!name|| !email || !phone){
            res.staus(400);
            throw new Error("All fields are mandatory!")
        }
res.status(201).json({message:"create contacts"})
    }))

    const updateContact=asyncHandler(async(req,res)=>{
        res.status(201).json({message:`Contact has been updated for ${req.params.id}`})
    })
    const deleteContact=asyncHandler(async(req,res)=>{
        res.status(201).json({message:`contact has been deleted for ${req.params.id}`})
    })
    module.exports={getContacts,getContact,createContact,updateContact,deleteContact};