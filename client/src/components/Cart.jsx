import React, { useContext } from "react";
import { Store } from "../context/cart";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartCard, ReduceButton, RemoveButton } from "./styles/cart.styled";
import { Trash , Minus1} from "react-feather"
// redux
import { useSelector , useDispatch } from "react-redux";
import { selectCart } from "../feature/ProductSlice";


const Cart = () => {

  const cart = useSelector( selectCart )

  const handleReduceBtn = (id) => {
    
    toast.warn("Item Reduced to one" , {icon : "-"});
  };

  const handleRemoveBtn = (id) => {

    toast.error("Removed item from the Cart" , { icon : "🗑️"});
  };

  

  return (
    <>
      <div className="cart-div">
        {cart.length === 0 ? (
          <>
            <img
              className="cart-img"
              src="https://www.kindpng.com/picc/m/636-6363064_empty-shopping-cart-coloring-page-empty-shopping-cart.png"
            ></img>
            <h1>Your Cart is empty</h1>
          </>
        ) : (
          <>
            {cart.map((item, index) => {
              return (
                <>
                  <CartCard className="cart-card">
                    
                  </CartCard>
                </>
              );
            })}
          </>
        )}

        <Link to="/Products">
          {" "}
          <button> Shop Products </button>
        </Link>
      </div>
      <div className="cart-div-2">
        <div>
          <center>
            <div className="cart-btn-grp"></div>
          </center>
        </div>
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

export default Cart;
