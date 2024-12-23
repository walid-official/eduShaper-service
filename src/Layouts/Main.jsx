import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
// https://education-service-d2fdb.web.app/
const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[500px]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
