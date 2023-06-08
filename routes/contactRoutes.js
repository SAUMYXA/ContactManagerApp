const express=require('express');
const router=express.Router();
router.get("/",(req,res)=>{
  res.status(201).json({message:"gett all the contacts"})  
})
router.post("/createContact",(req,res)=>{
    
    res.status(201).json({message:"Create a contact"})

})
router.put("/:id",(req,res)=>{
    res.status(201).json({message:`Contact has been updated for ${req.params.id}`})
})
router.delete("/:id",(req,res)=>{
    res.status(201).json({message:`contact has been deleted for ${req.params.id}`})
})
module.exports=router;