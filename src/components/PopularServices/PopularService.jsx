import axios from "axios";
import React, { useEffect, useState } from "react";
import SinglePopularService from "./SinglePopularService";

const PopularService = () => {
  const [popularServices, setPopularServices] = useState([]);
  useEffect(() => {
    const fetchPopularServices = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/services`
        );
        setPopularServices(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPopularServices();
  }, []);
  console.log(popularServices);
  return (
    <div className="w-11/12 mx-auto">
      <div className="pt-20 pb-6">
        <div className="flex py-4 gap-3 justify-center items-center">
          <div className="bg-[#8e67f1] w-14 h-1"></div>
          <h3 className="text-center font-bold text-3xl">
            Popular Services
          </h3>
          <div className="bg-[#8e67f1] w-14 h-1"></div>
        </div>
        <p className="w-[40%] mx-auto text-center font-bold">Our top-rated educational services include tutoring, exam preparation, and creative workshops, tailored to empower learners of all ages and levels.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
        {popularServices.map((popularService, index) => (
          <SinglePopularService
            key={index}
            popularService={popularService}
          ></SinglePopularService>
        ))}
      </div>
    </div>
  );
};

export default PopularService;
