import { UploadTwoTone } from "@mui/icons-material";
import React, { createContext, useState } from "react";

export const Store = createContext()

const AppProvider = ({children}) => {

    const [cart , setCart ] = useState([])
    
    const addToCart = ( product ) => {
        const findElem = cart.findIndex( item => item.id === product.id)
        if(findElem === -1){
            setCart([...cart , { ...product , count : 1 }])
        }
        else {
            cart[findElem].count+=1;
        }
    }

    const removeFromCart = ( id ) => {
            const updatedCart = [...cart]

            const prod = updatedCart.findIndex( item  => item.id === id )

            if( prod !== -1 ){
                updatedCart.splice( prod , 1)
                setCart(updatedCart)
            }
    }

    const reduceFromCart = ( id ) => {
        const updatedCart = [...cart]
        const prod = updatedCart.findIndex(item => item.id === id)
        if( updatedCart[prod].count  - 1 !== 0  ){
            updatedCart[prod].count -= 1
            setCart(updatedCart)
        }
        else{
            updatedCart.splice(prod , 1)
            setCart(updatedCart)
        }

    }

    return(
    <>
        <Store.Provider value={{ cart , addToCart , removeFromCart , reduceFromCart }}>
            {children}  
        </Store.Provider>  
    </>)
}

export default AppProvider