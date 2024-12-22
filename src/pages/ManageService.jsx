import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import axios from "axios";
import SingleManageService from "../components/SingleManageService/SingleManageService";
import Swal from "sweetalert2";

const ManageService = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);

  const [manageServices, setManageServices] = useState([]);
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/services/${user?.email}`
        );
        setManageServices(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchServices();
  }, [user]);

  const handleDeleteService = async (id) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/deleteService/${id}`
      );
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
        const remainingServices = manageServices.filter(
          (service) => service._id !== id
        );
        setManageServices(remainingServices);
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(manageServices);
  return (
    <div>
      {manageServices.map((manageService, index) => (
        <SingleManageService
          key={index}
          handleDeleteService={handleDeleteService}
          manageService={manageService}
        ></SingleManageService>
      ))}
    </div>
  );
};

export default ManageService;
