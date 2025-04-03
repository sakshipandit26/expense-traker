const mongoose=require("mongoose")
const mongo_url = "mongodb+srv://sakshi26:1234@cluster0.omlmvhh.mongodb.net/auth_db?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongo_url)
.then (()=>
{
    console.log("mongodb connected...")
}).catch((err)=>
{
    console.log('mongodb connection Error:',err)
})
//const mongo_url = "mongodb+srv://sakshi26:1234@cluster0.omlmvhh.mongodb.net/auth_db?retryWrites=true&w=majority&appName=Cluster0";
