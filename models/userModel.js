const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    // confirmPassword:{
    //     type:String,
      
    // },
},
{
    timestamps:true
})
module.exports=mongoose.model("Users",userSchema)