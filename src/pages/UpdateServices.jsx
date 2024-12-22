import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateServices = () => {
    const { id } = useParams();
const [updateServices, setUpdateServices] = useState([]);
useEffect(() => {
    const fetchUpdateServices = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/service/${id}`
        );
        setUpdateServices(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUpdateServices();
}, []);

console.log(updateServices);

  //   const handleUpdateService = async (e) => {
  //     e.preventDefault();
  //     const serviceName = e.target.serviceName.value;
  //     const servicePhoto = e.target.servicePhoto.value;
  //     const price = e.target.price.value;
  //     const serviceArea = e.target.serviceArea.value;
  //     const description = e.target.description.value;

  //     const updateServiceData = {
  //         serviceName,
  //         servicePhoto,
  //         price,
  //         serviceArea,
  //         description,
  //     }

  //     try {
  //       const { data } = await axios.patch(
  //         `${import.meta.env.VITE_API_URL}/updateService/${id}`,
  //         updateServiceData
  //       );
  //       setUpdateServices(data);
  //     } catch (error) {
  //       console.log(error);
  //   }
  //   };

  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="card bg-base-100  max-w-lg shrink-0 shadow-2xl">
        <form className="card-body">
          <div className="flex gap-3 justify-between">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Name</span>
              </label>
              <input
                type="text"
                placeholder="Service Name"
                className="input input-bordered w-full"
                defaultValue={updateServices?.serviceName}
                name="serviceName"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="PhotoURl"
                className="input input-bordered w-full"
                defaultValue={updateServices?.servicePhoto}
                name="servicePhoto"
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="Price"
              name="price"
              className="input input-bordered"
              defaultValue={updateServices?.price}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service Area</span>
            </label>
            <input
              type="text"
              placeholder="Service Area"
              name="serviceArea"
              defaultValue={updateServices?.serviceArea}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              placeholder="Description"
              name="description"
              defaultValue={updateServices?.description}
              className="textarea textarea-bordered pb-10 w-full"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-gradient-to-r from-[#8e67f1] to-[#8e67f1ae] text-white">
              Update Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateServices;
