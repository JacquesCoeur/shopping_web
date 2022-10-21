import React from "react";
import {BeMember, Logo, Navbar} from "../landingPage";
import { Outlet, Link } from "react-router-dom";
import '../App.css';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Logo/>
      <BeMember/>
      <Outlet />
    </>
  );
};

export default Layout;