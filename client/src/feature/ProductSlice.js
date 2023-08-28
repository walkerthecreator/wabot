import { createAsyncThunk , createSlice } from "@reduxjs/toolkit"
import requests from "../utils/request"
import axios from "../utils/axios"


const initialState = {
    allProducts : {
        status : null ,
        data : null ,
        error : null
    } ,
    sellerProducts : {
        status : null ,
        data : [] ,
        error : null 
    } ,
    cart : []
}

export const fetchProduct = createAsyncThunk(
    'product/allProducts' ,
    async ()=>{
        const response = await axios.get(requests.getProduct)
        return response.data
    }
)


    export const addProduct = createAsyncThunk(
        'product/sellerProducts' ,
        async ( product ) => {
            const res = await axios.post("http://localhost:4000/product" , product)
            return res.data
        }
    )

    export const fetchSellerProduct = createAsyncThunk(
        'product/fetchSellerProducts' ,
        async () => {
            let res = await axios.get("http://localhost:4000/product")
            return res.data
        }
    )

const productSlice = createSlice({
    name : "product"  , 
    initialState : initialState ,
    reducers : {

        addToCart : (state , action ) => {
            let product = state.product.cart.findIndex((item) => {
                return item.id === action.payload.id
            })
            state.cart.push(action.payload)
        } ,

        removeFromCart : ( state , action ) => {
            let product = state.cart.findIndex( item => item.id === action.payload.id )
            if( product!= -1 ){
                state.cart.splice(product , 1 )
            }
        }


    } , 
        extraReducers : (builder) => {
            builder
            .addCase(fetchProduct.pending, (state) => {
                state.allProducts.status = "loading";
            })
            .addCase(fetchProduct.fulfilled, (state , action) => {
                state.allProducts.status = "success" ;
                state.allProducts.data = action.payload;
            })
            .addCase(fetchProduct.rejected, (state , action) => {
                state.allProducts.error = action.error.message;
                state.allProducts.status = "failed";
            })
            // adding seller products in database
            .addCase(addProduct.pending , (state)=>{
                state.sellerProducts.status = "loading" ;
            })
            .addCase(addProduct.rejected , (state , action ) => {
                state.sellerProducts.status = "failed"
                state.sellerProducts.error = action.error.message
            })
            .addCase(addProduct.fulfilled , (state, action )=>{
                state.sellerProducts.data = action.payload
                state.sellerProducts.status = "success" 
            })
            // getting seller products in databse
            .addCase( fetchSellerProduct.rejected , (state , action)=>{
                state.sellerProducts.status = "failed"
                state.sellerProducts.error = action.error.message
            })
            .addCase( fetchSellerProduct.fulfilled , (state , action)=>{
                state.sellerProducts.status = "success"
                state.sellerProducts.data = action.payload
            } )
            .addCase( fetchSellerProduct.pending , (state ) => {
                state.sellerProducts.status = "loading"
            })
        } 
})


export const selectProduct = (state) => state.product.allProducts
export const selectCart = (state) => state.product.cart
export const selectsellerProduct = ( state ) => state.product.sellerProducts


export default productSlice.reducer