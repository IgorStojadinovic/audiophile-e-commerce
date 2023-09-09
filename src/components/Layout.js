import React from "react";
import { Outlet } from 'react-router-dom';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import Cart from './shared/Cart';




export const Layout = () => {
  

  return (
    <>
      <Navbar />
      <Cart/>
      <Outlet />
      <Footer />
    </>
  );
};
