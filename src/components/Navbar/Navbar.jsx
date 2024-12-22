import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo3.png";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignOUt = () => {
    userSignOut();
    navigate("/login");
  };

  const Links = (
    <>
      <NavLink to="/">
        {" "}
        <li className="pt-2 font-bold">Home</li>{" "}
      </NavLink>
      <NavLink>
        {" "}
        <li className="pt-2 font-bold">Services</li>{" "}
      </NavLink>
      <li>
        <details>
          <summary className="font-bold">DashBoard</summary>
          <ul className="px-8 w-72 z-10">
            <NavLink to="/add-service">
              {" "}
              <li className="py-2 font-bold">Add Service</li>{" "}
            </NavLink>
            <NavLink>
              {" "}
              <li className="py-2 font-bold">Manage Service</li>{" "}
            </NavLink>
            <NavLink>
              {" "}
              <li className="py-2 font-bold">Booked-Services</li>{" "}
            </NavLink>
            <NavLink>
              {" "}
              <li className="py-2 font-bold">Service-To-Do</li>{" "}
            </NavLink>
          </ul>
        </details>
      </li>
    </>
  );
  return (
    <div className=" ">
      <div className="navbar py-0 w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <div className="">
            <img className="w-40" src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-8 font-medium">
            {Links}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-3 items-center">
              <Link
                onClick={handleSignOUt}
                className="btn bg-gradient-to-r from-[#8e67f1] to-[#8e67f1ae] text-white"
              >
                Logout
              </Link>
              {user ? (
                <div
                  className="tooltip tooltip-bottom"
                  data-tip={user?.displayName}
                >
                  <img
                    referrerPolicy="no-referrer"
                    src={user?.photoURL}
                    alt=""
                    className="w-12 h-12 rounded-full"
                  />
                </div>
              ) : (
                <div className="btn bg-[#8e67f1] flex justify-center items-center w-12 h-12 rounded-full"></div>
              )}
            </div>
          ) : (
            <Link
              to="/register"
              className="btn bg-gradient-to-r from-[#8e67f1] to-[#8e67f1ae] text-white"
            >
              Login / Register
            </Link>
          )}
          {/* <Link to="/register" className="btn bg-gradient-to-r from-[#8e67f1] to-[#8e67f1ae] text-white">Login / Register</Link>
           <Link to="/register" className="btn bg-gradient-to-r from-[#8e67f1] to-[#8e67f1ae] text-white">Login / Register</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
