import axios from "axios";
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux"
import { addProduct } from "../feature/ProductSlice"
import { useNavigate } from "react-router-dom";

const AddProduct = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [array , setArray] = useState([{
        productName : "iphone" ,
        category : "Technology" ,
        price : 2000 
    }])

    const [updateModel , setUpdateModel] = useState(false)
    const [updatedFormData , setUpdatedFormData] = useState({})

    function updateHandler(product){
        setUpdateModel(!updateModel)
        setUpdatedFormData(product)
    }

    function saveUpdate( id ){
        const index = array.findIndex((item)=>{
            return item.price === id  
        })
        console.log(index)

        array[index] = updatedFormData
        console.log(array)
        setUpdateModel(false)
    }
    
    const [formData , setFormData ] = useState({ })

    function handleChange(e){
            const {name , value} = e.target ;

            setFormData( prev => ({
                    ...prev , 
                    [name]  : value ,
                }
                ))
        }

    function handleUpdateChange(e){
        const { name , value } = e.target
        setUpdatedFormData((prev) => ({...prev , [name] : value}))
    }


        
     async function handleSubmit(e) {
        if( formData.productName && formData.price && formData.category ){
                dispatch( addProduct(formData) )
                toast.success(`Added ${ formData.productName } product`)
                setFormData({ productName : '' , category : "" , price : '' })
                navigate('/sellerProduct')
            }
            else{
                toast.error(`Product Detail Missing`)
            }
        }
        return(
        <>
    
        { updateModel &&  <div className="update-modal">
                <h1>update info</h1>
                <input 
                  type="text" 
                  name="productName"
                  value={updatedFormData.productName}
                  onChange={handleUpdateChange} />

                <select 
                name="category"
                onChange={handleUpdateChange} 
                value={updatedFormData.category}
                >
                    <option value="other" defaultValue={"other"}>Select a Category</option>
                    <option value="Technolgy">Technology</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Home Appliance">Home Appliance</option>
                </select>

                <input 
                type="text" 
                name="price" 
                value={updatedFormData.price}
                onChange={handleUpdateChange} />

                <button onClick={()=>{saveUpdate(updatedFormData.price)}}>save</button>
                <button onClick={()=>{setUpdateModel(false)}}>cancel</button>
            </div>}


            <div className="add-product">
                <h1>Add new Product</h1>
                <input 
                type="text"
                placeholder="Ipad Air"
                name="productName"
                onChange={handleChange}
                value={formData.productName}
                required
                />

                <select 
                name="category"
                onChange={handleChange} 
                value={formData.category}
                >
                    <option value="other" defaultValue={"other"}>Select a Category</option>
                    <option value="Technolgy">Technology</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Home Appliance">Home Appliance</option>
                </select>

                <input 
                type="text" 
                placeholder="Rs.1000"
                onChange={handleChange}
                name="price"
                value={formData.price}

                />

                <button onClick={handleSubmit}>Add Product</button>

            </div>


            {/* <div className="seller-products-wrapper">
                {
                    array.map((item, index) => {
                        return (
                            <>
                            <div className="seller-products" key={index}>
                                <div>
                                    <h3>{item.productName}</h3>
                                    <mark>{item.category}</mark>    
                                    <p >{ item.price }</p>
                                </div>
                                <div>
                                    <button onClick={()=>{updateHandler(item)}}>update</button>
                                    <button>delete</button>
                                </div>
                            </div>
                            </>
                        ) 
                    })
                }
            </div> */}

            <ToastContainer
                closeButton={false}
                position="bottom-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

        </>)
    
}

export default AddProduct;


