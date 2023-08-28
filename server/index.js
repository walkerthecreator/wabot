const express = require('express')
const app = express()
const db = require("./config/db")
const dotenv = require("dotenv").config()
const port  = process.env.PORT
const cookieParser = require("cookie-parser")
const cors = require("cors")

// middlewares
// app.use(cors({
//     origin: 'http://localhost:3000', // Replace with your React app's domain
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//   }));
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true }))
app.use(cookieParser())



// checking user 
const checkUser = ( req , res , next ) => {
    const { user } = req.body
    console.log( req.body )
        if( user ){
            next()
        }
    return res.status(403).json({ message : "user not logged in" })
} 


// checking role for an user 
const checkRole = ( role ) => {
    return ( req , res , next ) => {
        if(req.body.user.role !== role ) {
            return res.status(401).send('Not Allowed')
        }
        next()
    }
}


app.get('/' , ( req , res) => {
    return res.send("welcome to wabot")
})

app.get('/admin' , checkUser , checkRole("admin") ,  (req , res) => {
    return res.send("admin panel")
})

app.use('/user' , require("./routes/auth"))

app.use('/product' , require("./routes/product.js"))


app.listen( port , ()=>{
    console.log("started server on " + port)
})
