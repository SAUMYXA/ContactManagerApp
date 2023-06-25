const mongoose = require("mongoose");

const connectDB =async()=> {
    try{
       const connect= await mongoose.connect(
         "mongodb+srv://root:root@cluster0.wqoauiq.mongodb.net/ContactManager?retryWrites=true&w=majority" 
        );
          console.log("Successfully connected to mongodb database:",connect.connection.host,connect.connection.name);
        
    }

  catch(err)  {
    console.log(err);
    process.exit(1);
  }
};
module.exports=connectDB;

