import React, { useContext, useEffect, useState } from "react";
import loginLottieJson from "../../assets/images/login.json";
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const Login = () => {
  const { createSignInUser,regex } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});

  useEffect(() => {
    document.title = "Edu-Service | Login";
  }, []);

  const handleSIgnInUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setErrorMessage({});

    if (password.length < 6) {
      setErrorMessage("you must commit 6 characters");
      return;
    }
    if (!regex.test(password)) {
      setErrorMessage(
        "You Must Commit one upperCase one LowerCase and min 6 characters"
      );
      return;
    }


    createSignInUser(email, password)
      .then((result) => {
        console.log(result);
        toast.success("Successfully Logged in");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage((prev) => ({ ...prev, login: error.message }));
      toast.error("Login failed");
      });
  };


  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-50%">
          <Lottie animationData={loginLottieJson} loop={true} />;
        </div>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <form onSubmit={handleSIgnInUser} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              {errorMessage.login && (
                <label className="label">
                  <span className="label-text text-red-500">
                    {errorMessage.login}
                  </span>
                </label>
              )}
              <div
                onClick={() => setShowPassword(!showPassword)}
                className=" absolute right-3 top-[52px]"
              >
                {showPassword ? (
                  <i className="text-xl">
                    <FaEyeSlash></FaEyeSlash>
                  </i>
                ) : (
                  <i className="text-xl">
                    <FaEye></FaEye>
                  </i>
                )}
              </div>
              {errorMessage.password && (
                <label className="label">
                  <span className="label-text text-red-500">
                    {errorMessage.password}
                  </span>
                </label>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <p className="text-sm">
                Don't have an account ? Please{" "}
                <Link to="/register" className="text-[#8e67f1]">
                  Register
                </Link>{" "}
              </p>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-gradient-to-r from-[#8e67f1] to-[#8e67f1ae] text-white"
              >
                Login
              </button>
            </div>
            <GoogleLogin />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
