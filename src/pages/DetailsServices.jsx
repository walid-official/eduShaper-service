import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import BookModal from "../components/BookModal/BookModal";

const DetailsServices = () => {
  const [service, setService] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchDetailsServices = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/service/${id}`
        );
        setService(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetailsServices();
  }, []);
  console.log(service);
  const {
    serviceName,
    description,
    servicePhoto,
    serviceArea,
    serviceProviderData,
    price,
  } = service;
  return (
    <div className="">
      <div
        className="bg-cover bg-gradient-to-r from-[#8e67f1] to-[#8e67f1ae] px-20 py-16 bg-center"
        // style={{
        //   backgroundImage: `url(https://img.freepik.com/premium-vector/gradient-abstract-purple-background_23-2151877370.jpg?semt=ais_hybrid)`,
        // }}
      >
        <div className="flex items-center gap-4">
          <div className="bg-white w-1 h-10"></div>
          <h2 className="font-bold text-3xl text-white py-4">{serviceName}</h2>
        </div>
      </div>
      <div className="flex w-11/12 py-20 mx-auto">
        <div className="w-[50%] flex justify-center items-center">
          <img
            src="https://cdn.pixabay.com/animation/2022/08/22/15/52/15-52-12-557_512.gif"
            alt=""
          />
        </div>
        <div className="w-[50%]">
            <div className="rounded-full shadow-2xl ">

          <div className="card  shadow-2xl">
            <div className="flex border-b items-center">
              <figure className="p-5">
                <img
                  className="rounded-full w-[200px] h-[200px] object-cover border-[#8e67f1] border-b-4"
                  src={servicePhoto}
                  alt="Service"
                />
              </figure>
              <div className="">
                <h2 className="font-extrabold text-xl">{serviceName}</h2>
                <h2 className="font-bold py-2">{serviceArea}</h2>
              </div>
            </div>
            <div className="card-body bg-center bg-cover border-b">
              <h2 className="card-title ">Personalized Education for Diverse Learners</h2>
              <p className="text-sm font-bold">{description}</p>
              <div className="flex justify-center py-2">
                <NavLink>
                  <button  onClick={() => document.getElementById("my_modal_4").showModal()} className="btn bg-gradient-to-r from-[#8e67f1] to-[#8e67f1ae] text-white">
                    Book Now
                  </button>
                </NavLink>
              </div>
            </div>
            <div className=" py-4 px-3">
              <div className="flex justify-between items-center px-4 py-2">
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={serviceProviderData?.photoURL}
                    alt="Service Provider"
                  />
                  <p className="pl-2 font-bold">{serviceProviderData?.name}</p>
                </div>
                <div>
                  <p className="text-[#8e67f1] font-bold">${price}</p>
                </div>
              </div>
            </div>
          </div>
            </div>
        </div>
      </div>
      <BookModal service={service}></BookModal>
    </div>
  );
};

export default DetailsServices;
