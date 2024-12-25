import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
const BookModal = ({ service }) => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());

  const {
    _id: id,
    serviceName,
    description,
    servicePhoto,
    serviceArea,
    serviceProviderData,
    price,
  } = service || {};

  const handleBookService = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const bookData = Object.fromEntries(formData.entries());

    const bookPurchase = {
      ...bookData,
      serviceStatus: "pending",
      startDate,
    };

    if (user?.email === serviceProviderData?.email) {
      return toast.error("Action Is Invalid");
    }

    console.log(bookPurchase);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/bookServices`,
        bookPurchase
      );
   Swal.fire({
          title: "Successfully Booked Service!",
          icon: "success",
          draggable: true
        });
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-4xl">
          <form onSubmit={handleBookService} className="card-body">
            <div className="grid grid-cols-2 gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">ServiceId</span>
                </label>
                <input
                  type="text"
                  placeholder="ServiceId"
                  value={id}
                  className="input input-bordered w-full"
                  name="serviceId"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Service Name"
                  value={serviceName}
                  className="input input-bordered w-full"
                  name="serviceName"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Image</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  name="serviceImage"
                  value={servicePhoto}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Provider Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Provider Email"
                  name="providerEmail"
                  value={serviceProviderData?.email}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Provider Name</span>
                </label>
                <input
                  placeholder="Provider Name"
                  name="providerName"
                  value={serviceProviderData?.name}
                  className="input input-bordered w-full"
                ></input>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Current User Email</span>
                </label>
                <input
                  placeholder="Current User Email"
                  name="currentUserEmail"
                  value={user?.email}
                  className="input input-bordered w-full"
                ></input>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Current User Name</span>
                </label>
                <input
                  placeholder="Current User Name"
                  name="currentUserName"
                  value={user?.displayName}
                  className="input input-bordered w-full"
                ></input>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  placeholder="Price"
                  name="Price"
                  value={price}
                  className="input input-bordered w-full"
                ></input>
              </div>
            </div>

            <div className="form-control w-full flex flex-col gap-2 ">
              <label className="text-gray-700">Service Taking Date</label>

              <DatePicker
                className="border p-2 w-full rounded-md"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Special instruction</span>
              </label>

              <textarea
                placeholder="Special instruction"
                name="specialInstruction"
                className="textarea textarea-bordered pb-10 w-full"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button
                onClick={() => document.getElementById("my_modal_4").close()}
                className="btn bg-gradient-to-r from-[#8e67f1] to-[#8e67f1ae] text-white"
              >
                Purchase Service
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default BookModal;
