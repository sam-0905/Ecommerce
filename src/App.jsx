import "./App.css";
// import { useState } from 'react'
import './App.css'
import "font-awesome/css/font-awesome.min.css";
import { Routes, Route } from 'react-router-dom';
import Body from "./Body";
import LoginComp from "./Pages/Login";
import CartCompo from "./Pages/Cart";
import WishListCompo from "./Pages/Wishlist";
import Error from "./components/Error";

// import { Link } from 'react-router-dom';
//Error
// import { NotFound } from './Pages/Error';
//Nav link
import { NavLink } from 'react-router-dom';
// import LoginComponent from './Pages/Login';
// import UserComponent from './Pages/User';

const getActiveLink = ({ isActive, isPending }) => ({
  margin: '1rem 0',
  color: isActive ? 'yellow' : isPending ? 'pending' : 'cornsilk',
});

function App() {
  return (
    <>
      <nav className="Nav link ">
        <NavLink style={getActiveLink} to="/">
        <i className="fa fa-home"></i>
          Home
        </NavLink>
        <NavLink style={getActiveLink} to="/login">
          <i className="fa fa-sign-in" ></i>
          Login
        </NavLink>
        <NavLink style={getActiveLink} to="/cart">
        <i className="fa fa-cart-arrow-down "></i>
          cart
        </NavLink>
        <NavLink style={getActiveLink} to="/wish">
        <i className="fa fa-heart"></i>
          Wishlist
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Body/>} />
        <Route path="/login" element={<LoginComp />} />
        <Route path="/cart" element={<CartCompo />} />
        <Route path="/wish" element={<WishListCompo />} />
        <Route path="*" element={<Error />} /> 

        {/* <Route path="/user" element={<UserComponent />} /> */}

        {/* <Route path="/about" element={<AboutComponent />} /> */}
        {/* this route shld also map to a component. */}
        {/* <Route path="/product/:ProductId" element={<ProductComponent />} />
        <Route path="/cateogry" element={<Category />} />*/}
      </Routes>
    </>
  );
}

export default App;