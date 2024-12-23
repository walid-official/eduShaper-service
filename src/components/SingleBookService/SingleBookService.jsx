import React from "react";

const SingleBookService = ({ bookService }) => {
  const {
    serviceName,
    serviceImage,
    serviceEmail,
    currentEmail,
    currentUserName,
    serviceStatus,
    specialInstruction,
    Price,
  } = bookService || {};
  return (
    <div>
      <div className="w-[70%] mx-auto my-10">
        <div className="">
          <div className="grid md:grid-cols-2 p-4 bg-base-100 shadow-xl">
            <figure className="flex justify-center items-center">
              <img
                className="rounded-full w-[250px]  h-[250px] object-cover border-[#8e67f1] border-b-4"
                src={serviceImage}
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-2xl font-extrabold">{serviceName}</h2>
              <h2 className="font-bold">dfsdfsd</h2>
              <p>sdgsgsdfgs</p>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBookService;
