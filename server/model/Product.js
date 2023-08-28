const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    productName : {
        type : String ,
        required : true 
    },
    price : {
        type : Number ,
        required : true
    } ,
    category : {
        type : String ,
        required : true 
    } ,
    seller : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'User'
    }
    } , {
       timestamps : true 
    })

const Product = mongoose.model( "Product" , ProductSchema  )

module.exports = Product