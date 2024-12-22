import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterLottieJson from "../../assets/images/register1.json";
import Lottie from "lottie-react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegisterForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value
    const email = form.email.value;
    const password = form.password.value;
    try {
      const userCredential = await createUser(email, password);
      await updateUserProfile({
        displayName: name,
        photoURL: photoURL
      });
      console.log("User Registered", userCredential);
      navigate("/");
    } catch (error) {
      console.log("Error Registering User", error);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-[50%]">
          <Lottie animationData={RegisterLottieJson} loop={true} />;
        </div>
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <form onSubmit={handleRegisterForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
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
                name="photoURL"
                className="input input-bordered"
                required
              />
            </div>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="text-sm py-3">
                Already have an account ? Please{" "}
                <Link to="/login" className="text-[#8e67f1]">
                  Login
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-gradient-to-r from-[#8e67f1] to-[#8e67f1ae] text-white">
                Register
              </button>
            </div>
            <GoogleLogin />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
