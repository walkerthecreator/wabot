import React, { useContext, useEffect, useState } from "react";
import List from "./List";
import { Store } from "../context/cart";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { ShoppingBag } from "react-feather"
import { truncateFunction } from "../utils";
// redux 
import { useDispatch , useSelector } from "react-redux"
import { fetchProduct, selectProduct } from "../feature/ProductSlice"
import  { Star} from "react-feather"

const Gadgets = ({ title, id, price, category, description, image , data , rating }) => {

    const dispatch = useDispatch()

  return (
    <div className="cards">
      <img src={image} alt={image} />
        <h4>{truncateFunction(title)}</h4>
        <div>
            <small>${price}</small>
            <span> <Star></Star>  {rating?.rate} ({rating?.count})</span>
        </div>
        <button
        onClick={() => {
            dispatch()
          toast.success(`Added ${title} to the Cart`)
        }}
      >
        Add to Cart <ShoppingBag/>
      </button>
    </div>
  );
};

const LoadingProduct = () => {
    return (
    <>
        <div className="loading-div">
            <div>

            </div>
            <p></p>
            <button></button>
        </div>

        <div className="loading-div">
            <div>

            </div>
            <p></p>
            <button></button>
        </div>

        <div className="loading-div">
            <div>

            </div>
            <p></p>
            <button></button>
        </div>
    </>)
}

const Products = () => {

    const dispatch = useDispatch();
    const productData = useSelector(selectProduct)


    useEffect(()=>{
        dispatch(fetchProduct())

        const verifyToken = () => {
            
        }
        

    } , [])

  return (
    <>
      <h1 className="product-header">Products Available</h1>
      <div className="product-header-wrapper">
        <h1 className="header-product-heading">Airpod </h1>
        <div className="product-header-img"></div>
      </div>

      <div className="product-card-container">

        {
            (productData.status !== "success") ? 
            
                <LoadingProduct />
                
                :

                productData.data.map((item , index) => {
                    return <Gadgets 
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    rating={item.rating}
                    data={item}
                    />
                })
        }
    
      </div> 

     
      

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
    </>
  );
};

export default Products;
