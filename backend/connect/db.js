const mongoose = require("mongoose")
const db= async()=>{
    try{
        mongoose.connect(process.env.URI_DB)
        console.log('connect mongoose')
    }catch(err){
        console.log('error',err)

    }

}
module.exports=db;