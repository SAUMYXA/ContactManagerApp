const express=require('express');
const router=express.Router();
const{getContacts,getContact,createContact,updateContact,deleteContact}=require("../controllers/contactController")
// router.route("/").get((req,res)=>{
//   res.status(201).json({message:"get all the contacts"})  
// })
router.get("/",getContacts)
router.get("/:id",getContact)
router.post("/createContact",createContact)
router.put("/:id",updateContact)
router.delete("/:id",deleteContact)
module.exports=router;