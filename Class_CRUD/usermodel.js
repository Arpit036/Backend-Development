// require mongoose
const mongoose = require('mongoose')

// connect with mongoDB 
mongoose.connect(`mongodb://127.0.0.1:27017/name`)


// create Schema 
const userSchema = mongoose.Schema({
    name: String,
    userName : String,
    email: String
})

// model ke basis pr hi CRUD kr skte ho.
// so we need model 
// given name ka pluralised version name ka model bnega . ex : user -> users

// mongoose.model("user", userSchema);

module.exports = mongoose.model("user", userSchema);  

// and isme name(user) ke sath ye bhi btana hota hai ki schema kaun sa use krna hai. so hm userSchema use kr rhe hain jo upr bnaya hai.


// CRUD operation 
// now we need crud operation on the respectively way(Routes) -> /register, /user , /update, /delete

//  Hm log ye sare kaam routes ki help se krna chahte hain, jiske liye hme model export krna hi pdega

/*  module.exports = mongoose.model("user", userSchema);  */


// and now we have a file : usermodel.js jise hm application.js mre require krna hai . now do that. 