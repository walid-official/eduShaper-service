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
      <NavLink
        to="/"
        className="hover:text-[#774ede] transition-colors duration-200"
      >
        <li className="py-2 font-bold">Home</li>
      </NavLink>
      <NavLink
        to="/allServices"
        className="hover:text-[#774ede] transition-colors duration-200"
      >
        <li className="py-2 font-bold">Services</li>
      </NavLink>
      <NavLink
        to="/about"
        className="hover:text-[#774ede] transition-colors duration-200"
      >
        <li className="py-2 font-bold">About</li>
      </NavLink>
      <NavLink
        to="/contact"
        className="hover:text-[#774ede] transition-colors duration-200"
      >
        <li className="py-2 font-bold">Contact</li>
      </NavLink>
      {user && (
        <li>
          <details className="dropdown">
            <summary
              className={`font-bold hover:text-[#774ede] transition-colors duration-200 cursor-pointer ${
                theme === "light" ? "" : "dark:text-black"
              }`}
            >
              Dashboard
            </summary>
            <ul className="dropdown-content bg-base-100 rounded-box shadow-lg mt-2 p-2 space-y-2 w-52">
              <NavLink to="/add-service">
                <li
                  className={`py-2 font-bold hover:text-[#774ede] transition-colors duration-200 ${
                    theme === "light" ? "" : "dark:text-black"
                  }`}
                >
                  Add Service
                </li>
              </NavLink>
              <NavLink to="/ManageService">
                <li
                  className={`py-2 font-bold hover:text-[#774ede] transition-colors duration-200 ${
                    theme === "light" ? "" : "dark:text-black"
                  }`}
                >
                  Manage Service
                </li>
              </NavLink>
              <NavLink to="/BookedServices">
                <li
                  className={`py-2 font-bold hover:text-[#774ede] transition-colors duration-200 ${
                    theme === "light" ? "" : "dark:text-black"
                  }`}
                >
                  Booked Services
                </li>
              </NavLink>
              <NavLink to="/Service-to-do">
                <li
                  className={`py-2 font-bold hover:text-[#774ede] transition-colors duration-200 ${
                    theme === "light" ? "" : "dark:text-black"
                  }`}
                >
                  Service To-Do
                </li>
              </NavLink>
            </ul>
          </details>
        </li>
      )}
    </>
  );

  return (
    <div
      className={`sticky top-0 ${
        theme === "light"
          ? "backdrop-blur-xl bg-white/30"
          : "dark:bg-gray-900 dark:text-white"
      } z-10`}
    >
      <div className="navbar py-4 border-b w-11/12 mx-auto">
        {/* Left Section */}
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg ${
                theme === "light" ? "" : "dark:text-black"
              }`}
            >
              {Links}
            </ul>
          </div>

          {/* Logo */}
          <NavLink to="/" className="flex gap-2 items-center">
            <img
              className="w-12 md:w-16"
              src="https://cdn-icons-png.flaticon.com/512/4319/4319160.png"
              alt="EduSphere"
            />
            <h2 className="font-bold text-xl hidden md:flex">EduSphere</h2>
          </NavLink>
        </div>

        {/* Center Links (Desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-8 font-medium">
            {Links}
          </ul>
        </div>

        {/* Right Section */}
        <div className="navbar-end flex gap-4 items-center">
          {/* 🌙 Dark Mode Toggle */}
          <label className="swap swap-rotate cursor-pointer">
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === "dark"}
              aria-label="Toggle dark mode"
            />
            {/* Sun Icon */}
            <svg
              className="swap-off h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            {/* Moon Icon */}
            <svg
              className="swap-on h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {/* User Authentication */}
          <div className="hidden md:flex ">
            {user ? (
              <div className="flex gap-3 items-center">
                <button
                  onClick={handleSignOut}
                  className="btn bg-gradient-to-r from-[#774ede] to-[#8e67f1cb] text-white hover:opacity-80 transition-opacity duration-200"
                >
                  Logout
                </button>
                <div
                  className="tooltip tooltip-bottom"
                  data-tip={user?.displayName}
                >
                  <img
                    referrerPolicy="no-referrer"
                    src={user?.photoURL}
                    alt="User"
                    className="w-10 h-10 object-cover rounded-full hover:ring-2 ring-[#774ede] transition-all duration-200"
                  />
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="btn bg-gradient-to-r from-[#774ede] to-[#8e67f1cb] text-white hover:opacity-80 transition-opacity duration-200"
              >
                Login
              </Link>
            )}
          </div>
          <div className="md:hidden flex">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className=" m-1">
                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>
              </div>
              <div
                tabIndex={0}
                className="dropdown-content menu bg-base-100 w-40 rounded-box z-[1] p-2 shadow"
              >
                {user ? (
                  <div className="block  gap-3 items-center">
                    <button
                      onClick={handleSignOut}
                      className="btn w-full bg-gradient-to-r from-[#774ede] to-[#8e67f1cb] text-white hover:opacity-80 transition-opacity duration-200"
                    >
                      Logout
                    </button>
                    <div
                      className="tooltip tooltip-bottom"
                      data-tip={user?.displayName}
                    >
                      <img
                        referrerPolicy="no-referrer"
                        src={user?.photoURL}
                        alt="User"
                        className="w-10 h-10 mt-3 object-cover rounded-full hover:ring-2 ring-[#774ede] transition-all duration-200"
                      />
                    </div>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="btn bg-gradient-to-r from-[#774ede] to-[#8e67f1cb] text-white hover:opacity-80 transition-opacity duration-200"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
