import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../components/AuthProvider/AuthProvider';
import SingleServiceToDo from '../components/SingleServiceToDo/SingleServiceToDo';

const ServiceToDo = () => {
    const {user} = useContext(AuthContext)
    const [bookedToDoServices, setBookedServices] = useState([]);
  useEffect(() => {
    const fetchBookedServices = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/bookToDoServices/${user?.email}`
        );
        setBookedServices(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBookedServices();
  }, []);

  console.log(bookedToDoServices);

    return (
        <div>
            {bookedToDoServices.length === 0 ? <h2 className='font-bold text-center text-3xl'>Nobody is Booked Your Service!!</h2> : bookedToDoServices.map((bookToDo,index) => <SingleServiceToDo key={index} bookToDo={bookToDo} ></SingleServiceToDo> )  }
        </div>
    );
};

export default ServiceToDo;