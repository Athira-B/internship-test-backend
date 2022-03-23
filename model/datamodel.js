const mongoose=require("mongoose");
const DataSchema=mongoose.Schema({
    name:{
        type:String
    }
},{timestamps:true})

const Data=mongoose.model("Data",DataSchema);
module.exports=Data