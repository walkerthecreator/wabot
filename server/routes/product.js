const express = require("express")
const { addProduct , getProduct, deleteProduct, updateProduct} = require("../controller/product") 
const router = express.Router()

router.get('/' , getProduct );
router.post('/' , addProduct );
router.post('/update/:productId' , updateProduct );

router.delete('/:productId'  , deleteProduct)


module.exports = router  