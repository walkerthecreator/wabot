const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/wabot')

const db = mongoose.connection

db.once("open" , () => {
    console.log("Connected with Database")
})

db.on("error" , ()=>{
    console.log("error connecting database")
})