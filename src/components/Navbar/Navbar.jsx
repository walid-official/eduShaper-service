import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    userSignOut().then(() => {
      navigate("/login");
    });
  };

  const Links = (
    <>
      <NavLink to="/">
        <li className="pt-2 font-bold">Home</li>
      </NavLink>
      <NavLink to="/allServices">
        <li className="pt-2 font-bold">Services</li>
      </NavLink>
      <NavLink to="/about">
        <li className="pt-2 font-bold">About</li>
      </NavLink>
      <NavLink to="/contact">
        <li className="pt-2 font-bold">Contact</li>
      </NavLink>
      {user && (
        <li>
          <details>
            <summary className="font-bold">Dashboard</summary>
            <ul className="w-full md:w-72 z-10">
              <NavLink to="/add-service">
                <li className="py-2 font-bold">Add Service</li>
              </NavLink>
              <NavLink to="/ManageService">
                <li className="py-2 font-bold">Manage Service</li>
              </NavLink>
              <NavLink to="/BookedServices">
                <li className="py-2 font-bold">Booked Services</li>
              </NavLink>
              <NavLink to="/Service-to-do">
                <li className="py-2 font-bold">Service To-Do</li>
              </NavLink>
            </ul>
          </details>
        </li>
      )}
    </>
  );

  return (
    <div className={`sticky top-0 ${theme === "light" ? "backdrop-blur-xl bg-white/30" : "dark:bg-gray-900 dark:text-white"} z-10`}>
      <div className="navbar py-6 border-b w-11/12 mx-auto">
        {/* Left Section */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {Links}
            </ul>
          </div>

          {/* Logo */}
          <NavLink to="/" className="flex gap-2 items-center">
            <img className="w-16" src="https://cdn-icons-png.flaticon.com/512/4319/4319160.png" alt="EduSphere" />
            <h2 className="font-bold text-xl hidden md:flex">EduSphere</h2>
          </NavLink>
        </div>

        {/* Center Links (Desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-8 font-medium">{Links}</ul>
        </div>

        {/* Right Section */}
        <div className="navbar-end flex gap-4">
          {/* 🌙 Dark Mode Toggle */}
          <label className="swap swap-rotate cursor-pointer">
            <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"} />
            {/* Sun Icon */}
            <svg className="swap-off h-6 w-6 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34Z" />
            </svg>
            {/* Moon Icon */}
            <svg className="swap-on h-6 w-6 fill-current text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z" />
            </svg>
          </label>

          {/* User Authentication */}
          {user ? (
            <div className="flex gap-3 items-center">
              <button onClick={handleSignOut} className="btn bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
                Logout
              </button>
              <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                <img referrerPolicy="no-referrer" src={user?.photoURL} alt="User" className="w-12 h-12 object-cover rounded-full" />
              </div>
            </div>
          ) : (
            <Link to="/login" className="btn bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
