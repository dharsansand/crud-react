const mongoose =  require("mongoose")
const user = new mongoose.Schema({
    name:{
        type : String,
        require: true
    },
    phone:{
        type : String,
        require:true

    }
})

const Item = mongoose.model('Item', user); 
module.exports=Item;

