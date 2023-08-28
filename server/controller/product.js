const Product = require("../model/Product")

const addProduct = async(req , res) => {
    const { productName , category , price } = req.body
    console.log(req.body)

    const product = await Product.findOne( {productName} )
    
    if(product){
        return res.status(401).json("Product Already exsist")
    }

    const newProduct = await Product.create({
        productName , category , price
    })

    if(newProduct){
        const products = await Product.find()
        return res.status(201).send(products)
    }

    return res.status(400).send("There's and error with db")

}       

const getProduct= async(req , res) => {
    const products = await Product.find()

    if(!products){
        return res.status(401).send("error getting products")
    }

    return res.status(200).json(products)

} 


const updateProduct = async(req , res) => {

    const { productId } = req.params
    const { productName , price , category , _id  } = req.body


    const product = await Product.updateOne({ _id : productId } , 
        { 
            productName , 
            price ,
            category 
        })

        if(product){
            return res.status(200).send("updated successfully")
        }
        return res.status(401).send("oops something went wrong with updation")

}

const deleteProduct = async(req , res) => {
    const { productId } = req.params
    const deletedProduct = await Product.deleteOne({ _id : productId })
    return res.status(200).send("deleted successfully")
}

module.exports = { addProduct , getProduct , deleteProduct , updateProduct }
