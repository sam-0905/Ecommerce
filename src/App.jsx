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
import SideBar from "./Sidebar/sidebar";
import Header from "./Pages/Header";
// import LoginComponent from './Pages/Login';
// import UserComponent from './Pages/User';


function App() {
  return (
    <>
      <SideBar/>
      <Header/>
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