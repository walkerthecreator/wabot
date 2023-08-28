import './App.css';
import {BrowserRouter as Router , Routes,Route, Navigate} from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import About from './components/About'
import Contact from './components/Contact';
import Login from './components/Login'
import SignUp from './components/SignUp';
import AddProduct from './components/AddProduct';
import ProtectiveRoutes from './ProtectRoutes/ProtectiveRoutes';
import SellerPage from './pages/SellerPage';

function App() {
  return (
    <>     
    <Routes> {/*switch component*/}
        <Route path='/' element={<Navbar/>}> {/*define component paths*/}
            <Route index element={<Login/>}/> {/*index - default page which will be loaded in browser*/}
            <Route
                exact
                path='/cart'
                element={
                <ProtectiveRoutes  isAuthenticated={ true } >
                    <Cart />
                </ProtectiveRoutes>
            }
            />

            {/* <Route path='/cart' element={<Cart/>}/> */}
            <Route path='/home' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/admin' element={<AddProduct/>}/>
            <Route path='/sellerProduct' element={ <SellerPage /> } />
        </Route>
    </Routes>
    
   </>
  );
}

export default App;
