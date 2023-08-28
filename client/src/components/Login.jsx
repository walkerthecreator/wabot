import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import { toast , ToastContainer } from 'react-toastify';

const Login = () => {

    const [userData , setUserData ] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem("token")
        
    } , [])

    const loginHandler = async() => {
        try{
            let res = await axios.post("http://localhost:4000/user/login" , userData );
            res = res.data
            localStorage.setItem("token" , JSON.stringify(res) )
            navigate('/products')
        }
        catch( err ){
            toast.error("Please enter all fields", err )
        }
        
    }

    const dataHandler = (e) => {
        const { value , name } = e.target
        setUserData( prev => ({ ...prev , [name] : value }))
    } 

    return(
        <>
        <div className='login-form'>
                <h1>Login</h1>
                    <input type="text" placeholder='enter email' onChange={ dataHandler }  name='email' required/>
                    <input type="password" placeholder='enter password' onChange={ dataHandler } name="password" required/>
                    <button onClick={ loginHandler }>Login</button>
                

                <p><Link to='/signup'> Don't have an account?</Link></p>
                <Link to='/admin'>Became a seller</Link>

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
        </div>
        </>
    )
}

export default Login;