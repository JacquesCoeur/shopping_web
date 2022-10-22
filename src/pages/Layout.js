import React from "react";
import {BeMember, Footer, Logo, Navbar} from "../landingPage";
import { Outlet, Link } from "react-router-dom";
import '../App.css';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Logo/>
      <BeMember/>
      <Outlet />
      <Footer/>
    </>
  );
};

export default Layout;