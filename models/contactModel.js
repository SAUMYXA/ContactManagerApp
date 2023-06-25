const mongoose=require("mongoose");
const contactSchema =mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
ref:"Users"
    },
    name:{
        type:String,
        required:true
       
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    }
},
{
    timestamps:true,
});
module.exports=mongoose.model("Contact",contactSchema)
