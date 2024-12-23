
// import { format } from "date-fns";
import React from "react";

const SingleBookService = ({ bookService }) => {
  const {
    serviceName,
    serviceImage,
    providerEmail,
    providerName,
    currentUserEmail,
    currentUserName,
    startDate,
    serviceStatus,
    specialInstruction,
    Price,
  } = bookService || {};


  return (
    <div>
      <div className="w-[70%] mx-auto my-10">
        <div className="">
          <div className="grid md:grid-cols-3 p-4 bg-base-100 shadow-xl">
            <figure className="flex justify-center border-r items-center">
              <img
                className="rounded-full w-[250px]  h-[250px] object-cover border-[#8e67f1] border-b-4"
                src={serviceImage}
                alt="Service"
              />
            </figure>
            <div className="border-r px-4 ">
              <p className="font-bold text-3xl">Booked Info</p>
              <div className="py-2">
                <h2 className="text-2xl">{serviceName}</h2>
                <h2 className="text-sm font-bold py-4">{specialInstruction}</h2>
              </div>
              <div className="flex gap-4  items-center">
              <h2 className="btn shadow-2xl bg-gradient-to-r from-[#8e67f1] to-[#8e67f1ae] text-white badge">
                  {Price}$
                </h2>
                <h2 className="btn shadow-2xl bg-gradient-to-r from-[#8e67f1] to-[#8e67f1ae] text-white badge ">
                  {serviceStatus}
                </h2>
              </div>
            
              {/* <p className="badge btn shadow-2xl" >{serviceStatus}</p>  */}
            </div>
            <div className="px-4">
              <h2 className="text-xl">Name : {providerName}</h2>
              <h2 className="font-bold py-4">Email: {providerEmail}</h2>
             {/* <h2>Date: {format(new Date(startDate), 'P')}</h2> */}
             <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBookService;
