import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <>
        <div className='container'>
            {/* <h2 >Wabot</h2> */}
            <h2 ><Link to='/'>Wabot</Link></h2>
            <ul>
                <li><Link to='/cart'>Cart</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
            </ul>
        </div>
        <Outlet/>
        </>
    )
}

export default Navbar;