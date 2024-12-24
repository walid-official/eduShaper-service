import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import axios from "axios";
import SingleBookService from "../components/SingleBookService/SingleBookService";
import useAxios from "../components/Hook/useAxios";


const BookedServices = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const axiosSecure = useAxios()
  const [bookedServices, setBookedServices] = useState([]);

  useEffect(() => {
   
    const fetchBookedServices = async () => {
      try {
        const { data } = await axiosSecure.get(
          `/bookServices/${user?.email}`
        );
        setBookedServices(data);
      } catch (error) {
        console.log(error);
     
      }
    };
    fetchBookedServices();
  }, [user]);
  console.log(bookedServices);
  return (
    <div>

      {bookedServices.length === 0 ? (
        <h2 className="font-bold text-4xl flex justify-center items-center text-center">No Service Is Booked Yet</h2>
      ) : (
        bookedServices.map((bookService, index) => (
          <SingleBookService
            key={index}
            bookService={bookService}
          ></SingleBookService>
        ))
      )}
    </div>
  );
};

export default BookedServices;
