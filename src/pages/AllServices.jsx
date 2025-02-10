import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AllService from "../components/AllService/AllService";
import Search from "../components/Search/Search";
import { ThemeContext } from "../context/ThemeContext";

const AllServices = () => {
  const [allServices, setAllServices] = useState([]);
  const [allServicesLoader, setAllServicesLoader] = useState(false);
const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.title = "Edu-Service | All Services"
    setAllServicesLoader(true);
    const fetchAllServices = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/allServices`
        );
        setAllServices(data);
        setAllServicesLoader(false);
      } catch (error) {
        console.log(error);
        setAllServicesLoader(false);
      }
    };
    fetchAllServices();
  }, []);

  console.log(allServices);

  return (
    <div>
      <div className="md:w-[40%] w-[90%] mx-auto py-7">
        <h2 className="font-bold text-center py-6 text-3xl">Explore Education Services</h2>
        <Search theme={theme} setAllServices={setAllServices}></Search>
      </div>
      {allServicesLoader ? (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        allServices.map((singleService, index) => (
          <AllService key={index} singleService={singleService} theme={theme}></AllService>
        ))
      )}
    </div>
  );
};

export default AllServices;
