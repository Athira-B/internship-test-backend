const express=require("express");
var cors=require("cors");
const app=express();
const datarouters=require("./routes/data");
// require("./db/mongoose");
const port=process.env.port || 8000;
app.use(express.json());
app.use(datarouters);
app.listen(port,()=>{
    console.log("server running on port "+port);
})