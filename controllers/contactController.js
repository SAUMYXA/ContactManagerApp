const getContacts=(req,res)=>{
    res.status(201).json({message:"get all the contacts"})
    };
    const getContact=(req,res)=>{
        res.status(201).json({message:`get contact for ${req.params.id}`})
        }

    const createContact=(req,res)=>{
res.status(201).json({message:"create contacts"})
    }

    const updateContact=(req,res)=>{
        res.status(201).json({message:`Contact has been updated for ${req.params.id}`})
    }
    const deleteContact=(req,res)=>{
        res.status(201).json({message:`contact has been deleted for ${req.params.id}`})
    }
    module.exports={getContacts,getContact,createContact,updateContact,deleteContact};