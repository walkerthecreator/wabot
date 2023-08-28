import axios from "axios";
import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const SignUp = () => {
  const [formData, setFormData] = useState("");
  const retype = useRef();
  const country = [91 , 12, 122 , 112, 45 , 67 ,634 ,56]
  const [token , setToken] = useState()
  const navigate = useNavigate()

  function handleFormDate(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    console.log(formData);
  }

  async function signUpHandler() {
    if (formData.password === formData.repassword) {
      if (formData.isSeller !== "on") {
        let res = await axios.post("http://localhost:4000/user/signup", formData);
        res = res.data
        
        if(res.message) { toast.warning(res.message) }
        
        if(res.token) {
            setToken(res.token)
            toast.success("logged in")
            navigate('/products')
             }
            }
            } else {
            toast.error("Password and RePassword did not matched");
            retype.current.focus();
            retype.current.style.outline = "2px solid red";
            }
  }

  return (
    <>
      <div className="signup-container">
        <h1>Create New Account</h1>

        <input
          type="text"
          placeholder="Enter your Name"
          onChange={handleFormDate}
          name="name"
          required
        />

        <div>   
            
            <select 
            name="country-code" 
            >
               {
                country.map((item , index)=>{
                    return <option value={item} key={index}> +{item} </option>
                })
               }
            </select>

            <input 
            type="number" 
            placeholder="Enter your number" 
            name="phone"
            onChange={handleFormDate} 
            required
            />

        </div>

        <input
          type="email"
          placeholder="enter new email"
          onChange={handleFormDate}
          name="email"
          required
        />
        
        <input
          type="password"
          placeholder="create new password"
          onChange={handleFormDate}
          name="password"
          required
        />
        <input
          type="password"
          placeholder="enter password again"
          name="repassword"
          onChange={handleFormDate}
          ref={retype}
        />

        <div>
          <input
            type="checkbox"
            name="isSeller"
            onChange={handleFormDate}
            id="admin"
          />

          <label htmlFor="isSeller">create a seller account</label>
        </div>
e
        <button onClick={signUpHandler}>SignUp</button>
        <p>
          <Link to="/" onClick={signUpHandler}>
            already have an account!
          </Link>
        </p>
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

export default SignUp;
