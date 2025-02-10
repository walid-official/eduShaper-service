import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Aos from "aos";
import { ThemeContext } from "../context/ThemeContext";
// https://education-service-d2fdb.web.app/
const Main = () => {
   const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease',
      once: false,
      offset: 0,
    });
}, []);



  return (
    <div className={`${theme === "light" ? "backdrop-blur-xl bg-white/30" : "dark:bg-gray-900 dark:text-white"}`}>
      <Navbar></Navbar>
      <div className="min-h-[500px]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
