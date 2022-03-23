const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://AthiraNadeem:Athira18@@cluster0.ixxrt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useCreateIndex:true,
})
// mongoose.connect('mongodb+srv://Nadeem:Nadeem18@@cluster0.4puy9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
//     useNewUrlParser:true,
//     useCreateIndex:true,
// })