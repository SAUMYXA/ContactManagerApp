const express=require('express');
const router=express.Router();
const{getContacts,getContact,createContact,updateContact,deleteContact}=require("../controllers/contactController");
const { validateToken } = require('../middleware/validateTokenHandler');
// router.route("/").get((req,res)=>{
//   res.status(201).json({message:"get all the contacts"})  
// })
router.use(validateToken);
router.route("/").get(getContacts).post(createContact)
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact)
module.exports=router;
