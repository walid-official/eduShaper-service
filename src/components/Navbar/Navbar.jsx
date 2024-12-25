import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo3.png";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignOUt = () => {
    userSignOut().then(() => {
      navigate("/login")
    })
  };

  const handleThemeChange = (e) => {
    const theme = e.target.checked ? "aqua" : "light";
    document.documentElement.setAttribute("data-theme", theme);
  };

  const Links = (
    <>
      <NavLink to="/">
        {" "}
        <li className="pt-2 font-bold">Home</li>{" "}
      </NavLink>
      <NavLink to="/allServices">
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
            <NavLink to="/ManageService">
              {" "}
              <li className="py-2 font-bold">Manage Service</li>{" "}
            </NavLink>
            <NavLink to="/BookedServices">
              {" "}
              <li className="py-2 font-bold">Booked-Services</li>{" "}
            </NavLink>
            <NavLink to="/Service-to-do">
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
      <div className="navbar py-6 border-b w-11/12 mx-auto">
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
          {/* LOGO DIV */}
          <div className="flex gap-2 items-center">
            <div className="">
              <img
                className="w-16"
                src="https://cdn-icons-png.flaticon.com/512/4319/4319160.png"
                alt=""
              />
            </div>
            <div className="md:flex hidden">
              <h2 className="font-bold">EduSphere</h2>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-8 font-medium">
            {Links}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="pr-2">
            <label>
              <input
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller"
                onChange={handleThemeChange} // Handle theme toggle
              />
            </label>
          </div>
          <div className="md:hidden flex">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1">
                Click
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
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
                          className="w-12 h-12 object-cover rounded-full"
                        />
                      </div>
                    ) : (
                      <div className="btn bg-[#8e67f1] flex justify-center items-center w-12 h-12 rounded-full"></div>
                    )}
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="btn bg-gradient-to-r from-[#8e67f1] to-[#8e67f1ae] text-white"
                  >
                    Login
                  </Link>
                )}
              </ul>
            </div>
          </div>

          {/* Show In Large Device */}
          <div className="md:flex hidden">
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
                to="/login"
                className="btn bg-gradient-to-r from-[#8e67f1] to-[#8e67f1ae] text-white"
              >
                Login
              </Link>
            )}
          </div>

          {/* <Link to="/register" className="btn bg-gradient-to-r from-[#8e67f1] to-[#8e67f1ae] text-white">Login / Register</Link>
           <Link to="/register" className="btn bg-gradient-to-r from-[#8e67f1] to-[#8e67f1ae] text-white">Login / Register</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
