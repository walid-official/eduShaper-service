import React, { useContext } from "react";
import loginLottieJson from "../../assets/images/login.json";
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";

const Login = () => {
  const {createSignInUser} = useContext(AuthContext);
  const navigate = useNavigate(); 
  const location = useLocation();
  const handleSIgnInUser = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form[0].value;
    const password = form[1].value;
    try {
      const userCredential = await createSignInUser(email, password);
      console.log("User Logged In", userCredential);
      navigate( location?.state || "/");
    } catch (error) {
      console.log("Error Logging In User", error);
    }
  }
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
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password? 
                </a>
              </label>
              <p className="text-sm">Don't have an account ? Please <Link to="/register" className="text-[#8e67f1]">Register</Link> </p>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-gradient-to-r from-[#8e67f1] to-[#8e67f1ae] text-white">
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
