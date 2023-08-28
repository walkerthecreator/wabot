import { configureStore } from "@reduxjs/toolkit"
import ProductSlice from "../feature/ProductSlice"


const store = configureStore({
    reducer : {
    product : ProductSlice
    }
})

export default store