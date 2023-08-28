import { useEffect, useState } from "react"
import { useSelector , useDispatch } from "react-redux"
import { selectsellerProduct } from "../feature/ProductSlice"
import { fetchSellerProduct } from "../feature/ProductSlice"
import { Link } from "react-router-dom"
import { Edit , Trash2 } from "react-feather"
import axios from "axios"

const SellerPage = () => {
    const dispatch = useDispatch() 
    let sellerProducts =  useSelector(selectsellerProduct) 

    const [isUpdate , setIsUpdate] = useState(false)
    const [formData , setFormData] = useState({})

    useEffect(()=>{
        dispatch(fetchSellerProduct())
    } , [])

    async function saveUpdateProduct(product){
        console.log(formData)
        const res = await axios.post('http://localhost:4000/product/update/' + product , formData )
        setIsUpdate(false)
        dispatch(fetchSellerProduct())
    }

    async function updateProduct( product ){
        setIsUpdate(true)
        setFormData({
            productName : product.productName ,
            price : product.price ,
            category : product.category ,
            _id : product._id
        })
    }

    async function deleteProduct(productId){
        const res = await axios.delete("http://localhost:4000/product/" + productId )
        dispatch(fetchSellerProduct())
    }

    function handleUpdateChange(e){
        const {name , value} = e.target ;
        setFormData( prev => ({
                ...prev , 
                [name]  : value ,
            }
            ))
    }

    return(
        <>
        <div id="seller-page">

        {
            isUpdate 
            &&

            <div className="update-modal">
                <h1>update info</h1>

                <div>
                <label htmlFor="productName">Product Name:</label>
                <input 
                  type="text" 
                  name="productName"
                  value={formData.productName}
                  id="productName"
                  onChange={handleUpdateChange} />
                  </div>

                  <div>
                    <label htmlFor="category">Category:</label>
                   
                    <select 
                        name="category"
                        onChange={handleUpdateChange} 
                        value={formData.category}
                        >
                            <option value="other" defaultValue={"other"}>Select a Category</option>
                            <option value="Technolgy">Technology</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Home Appliance">Home Appliance</option>
                        </select>
                  </div>

                  <div>
                    <label htmlFor="price">Price: </label>
                   
                    <input 
                        type="text" 
                        name="price" 
                        value={formData.price}
                        onChange={handleUpdateChange} />
                    
                  </div>
                
                <div id="btn-wrapper-update">
                    <button onClick={()=>{saveUpdateProduct(formData._id)}}>save</button>
                    <button className="cancel-btn" onClick={()=>{setIsUpdate(false)}}>cancel</button>
                </div>
            </div>
        }

            <Link to="/admin"> <p className="add-new-product">Add New Product</p> </Link> 

            <table>
                <tbody>
                    <tr>
                        <th>Product Name</th>
                        <th>Categories</th>
                        <th>Added on</th>
                        <th>Task</th>
                    </tr>

                {
                        ( sellerProducts.status == "success" ) ? 
                        sellerProducts.data.map(( item )=>{
                            return <tr key={item.id}>
                                    <td>{item.productName}</td> 
                                    <td>{ item.category }</td>
                                    <td>{ item.createdAt.substring(0 , 10)}</td>
                                        <td className="task-btn-wrapper">
                                            <button onClick={ ()=>{ updateProduct(item)}}><Edit></Edit></button>
                                            <button onClick={ ()=>{ deleteProduct(item._id)} }><Trash2></Trash2></button>
                                         </td>
                                </tr>
                        })

                    :  
                        <tr>
                            <td>Loading</td>
                            <td>Loading</td>
                        </tr> 
                     }

                    </tbody>
            </table>
            </div>
        </>
    )
}

export default SellerPage