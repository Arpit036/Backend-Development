 // require mongoose
const mongoose = require('mongoose')

// connect with mongoDB '

async function connectDB(){
    
 try{
     await mongoose.connect("mongodb://127.0.0.1:27017/myDatabase", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
     });
     console.log("mongoDB connected successfully !")
    }
    catch(err){
        console.log("failed", err);
    }
}
connectDB();

// create Schema 
const userSchema = mongoose.Schema({
    name: String,
    userName : String,
    email: String
})

 
 

module.exports = mongoose.model("user", userSchema);  