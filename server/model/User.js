const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({

    name : {
        type : String ,
        required :  true
    } , 
    email : {
        type : String ,
        unique : true ,
        required : true
    } ,
    phone : {
        type : Number ,
        required : true
    } ,
    password : {
        type : String ,
        required : true
    } ,
    role : {
        type : String , 
        enum : ["user" , "admin" , "seller"] ,
        default : "user"
    }
}, {
    timeStamps : true 
})

const User = mongoose.model("user" , UserSchema)

module.exports = User 