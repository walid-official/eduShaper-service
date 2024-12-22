import React from "react";
import AddServiceImg from "../assets/images/addService.png"
import { motion } from "motion/react";
const AddService = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-[50%]">
            <motion.div
              animate={{ y: 20, x: 20 }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            className="">
              <img src="https://img.freepik.com/premium-vector/learning-support-icon-3d-illustration-from-elearning-collection-creative-learning-support-3d-icon-web-design-templates-infographics-more_676904-747.jpg?ga=GA1.1.1662778785.1716400131&semt=ais_hybrid" />
            </motion.div>
          </div>
          <div className="card bg-base-100  max-w-lg shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="flex gap-3 justify-between">
                <div className="form-control">  
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label> 
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full"
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
                  className="input input-bordered"
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
                  className="textarea textarea-bordered textarea-lg w-full"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-gradient-to-r from-[#8e67f1] to-[#8e67f1ae] text-white">
                  Add Service
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
