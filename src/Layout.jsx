import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";

const Layout = () => {
  let [isDark, setDark] = useState(false);

  let handleDarkmode = () => {
    setDark(!isDark);
  }

  return (
    <div id="main-container" className={"border border-green-500 flex flex-row-reverse dark:text-white" + (isDark && " bg-slate-900")}>
      <Navbar handleDarkmode={handleDarkmode} />
      <Outlet isDark={isDark}/>
    </div>
  )
};

export default Layout;
