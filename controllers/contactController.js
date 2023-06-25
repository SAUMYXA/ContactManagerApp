const asyncHandler=require("express-async-handler")
const Contact=require("../models/contactModel")
const getContacts= asyncHandler(async (req,res)=>{
    const contacts=await Contact.find({user_id:req.user.id});
    res.status(201).json(contacts);
    });
    const getContact=asyncHandler(async (req,res)=>{
        const contact=await Contact.findById(req.params.id);
        if(!contact){
            res.status(404);
            throw new Error("Contact not found!")
        }
        res.status(201).json(contact);
        })

    const createContact=asyncHandler(async(req,res)=>{
        console.log("the request body is:",req.body);
        const{name,email,phone}=req.body;
        if(!name|| !email || !phone){
            res.staus(400);
            throw new Error("All fields are mandatory!")
        }
        const contact=await Contact.create({
            name,phone,email,user_id:req.user.id
        })
res.status(201).json(contact)
    })

    const updateContact=asyncHandler(async(req,res)=>{
        const contact=await Contact.findById(req.params.id);
        if(!contact){
            res.status(404)
            throw new Error("Contact not found!")
        }
        if(Contact.user_id.toString()!==req.user.id){
            res.status(403)
            throw new Error("user don't have permission to update other user's contact ")
        }
        const updatedContact=await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(201).json(updatedContact)
    })
    const deleteContact=asyncHandler(async(req,res)=>{
        const contact=await Contact.findById(req.params.id);
        if(!contact){
            res.status(404)
            throw new Error("Contact not found!")
        }
        if(Contact.user_id.toString()!==req.user.id){
            res.status(403)
            throw new Error("user don't have permission to delete other user's contact ")
        }
        await Contact.findByIdAndDelete(req.params.id);
        res.status(201).json({message:`contact has been deleted for ${req.params.id}`})
    })
    module.exports={getContacts,getContact,createContact,updateContact,deleteContact};