import axios from "axios";
import React, { useEffect, useState } from "react";
import SinglePopularService from "./SinglePopularService";

const PopularService = () => {
  const [popularServices, setPopularServices] = useState([]);
  const [PopularServicesLoader, setPopularServicesLoader] = useState(false);
  useEffect(() => {
    setPopularServicesLoader(true);
    const fetchPopularServices = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/services`
        );
        setPopularServices(data);
        setPopularServicesLoader(false);
      } catch (error) {
        console.log(error);
        setPopularServicesLoader(false);
      }
    };
    fetchPopularServices();
  }, []);
  console.log(popularServices);
  return (
    <div className=" w-[95%] md:w-11/12 mx-auto">
      <div className="pt-20 pb-6">
        <div className="flex py-4 gap-2 justify-center items-center">
          <div className="bg-[#8e67f1] w-8 h-1"></div>
          <h3 className="text-center font-bold text-2xl md:text-3xl">
            Popular Services
          </h3>
          <div className="bg-[#8e67f1] w-8 h-1"></div>
        </div>
        <p className="md:w-[40%] mx-auto text-center font-bold">
          Our top-rated educational services include tutoring, exam preparation,
          and creative workshops, tailored to empower learners of all ages and
          levels.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  md:gap-10 my-20 w-full lg:w-[60%] mx-auto">
        {PopularServicesLoader ? (
          <div className="flex justify-center items-center h-screen">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        ) : (
          popularServices?.map((popularService, index) => (
            <SinglePopularService
              key={index}
              popularService={popularService}
            ></SinglePopularService>
          ))
        )}
      </div>
    </div>
  );
};

export default PopularService;
