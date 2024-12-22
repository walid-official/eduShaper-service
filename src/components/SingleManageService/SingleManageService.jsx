import axios from "axios";
import React from "react";

const SingleManageService = ({ manageService,handleDeleteService }) => {
  const {
    _id,
    serviceName,
    description,
    servicePhoto,
    serviceArea,
    serviceProviderData,
    price,
  } = manageService || {};




  return (
    <div className="w-[70%] mx-auto my-10">
      <div className="">
        <div className="grid md:grid-cols-2 p-4 bg-base-100 shadow-xl">
          <figure className="flex justify-center items-center">
            <img
                className="rounded-full w-[250px]  h-[250px] object-cover border-[#8e67f1] border-b-4"
              src={servicePhoto}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-extrabold">{serviceName}</h2>
            <h2 className="font-bold">{serviceArea}</h2>
            <p>{description.slice(0,120)}...</p>
            <div className="card-actions justify-start">
              <button onClick={() => handleDeleteService(_id)} className="btn bg-gradient-to-r from-[#8e67f1] to-[#8e67f1ae] text-white">Delete</button>
              <button className="btn bg-gradient-to-r from-[#8e67f1] to-[#8e67f1ae] text-white">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleManageService;
