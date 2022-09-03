import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
// import { useState, useEffect } from "react";

const Layout = () => {
  return (
    <div id="main-container" className="flex flex-row-reverse dark:text-white dark:bg-slate-900">
      <Navbar />
      <Outlet />
    </div>
  )
};

export default Layout;
