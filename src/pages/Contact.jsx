import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import { LiaAddressCardSolid } from "react-icons/lia";
import mail from "../assets/images/mail2.gif"
const Contact = () => {
  return (
    <div>
      <div className="bg-[#f2f2f2] py-10">
        <h2 className="font-bold text-center text-4xl">Contact Us</h2>

        <div className="flex justify-center py-3 gap-2 ">
          <Link to="/" className="font-bold">
            Home
          </Link>
          <p className="">-</p>

          <Link to="/contact" className="font-bold">
            Contact
          </Link>
        </div>
      </div>
      <div className="w-11/12 mx-auto  pt-10">
        <div className="grid grid-cols-3 gap-4">
          <div className="card border rounded-none bg-base-100  shadow-xl hover:shadow-lg duration-300">
            <div className=" py-6 flex gap-5">
              <div className="">
                <h2 className="text-white p-5 bg-[#8638d9d4] text-3xl">
                  <FaPhoneVolume></FaPhoneVolume>
                </h2>
              </div>
              <div className="">
                <p className="font-bold text-xl">phone Number</p>
                <div className="py-3">
                  <p>+8 (800) 123 45 69</p>
                  <p>+8 (800) 123 45 69</p>
                  <p>+8 (800) 123 45 69</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card border rounded-none bg-base-100  shadow-xl hover:shadow-lg duration-300">
            <div className=" py-6 flex gap-5">
              <div className="">
                <h2 className="text-white p-5 bg-[#8638d9d4] text-3xl">
                  <SiMinutemailer></SiMinutemailer>
                </h2>
              </div>
              <div className="">
                <p className="font-bold text-xl">Email & Chat</p>
                <div className="py-3">
                  <p>hello@eduma.com</p>
                  <p>support@eduma.com</p>
                  <p>eduma@company.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card border rounded-none bg-base-100  shadow-xl hover:shadow-lg duration-300">
            <div className=" py-6 flex gap-5">
              <div className="">
                <h2 className="text-white p-4 bg-[#8638d9d4] text-4xl">
                  <LiaAddressCardSolid ></LiaAddressCardSolid>
                </h2>
              </div>
              <div className="">
                <p className="font-bold text-xl">Address & Hours</p>
                <div className="py-3">
                  <p>st. 567, Los Angeles, California, US.</p>
                  <p>1800 Abbot Kinney Blvd. Unit D & E Venice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="">
            <div className="">
                <img src={mail} alt="" />
            </div>
            <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
