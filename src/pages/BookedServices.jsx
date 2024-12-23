import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../components/AuthProvider/AuthProvider';
import axios from 'axios';
import SingleBookService from '../components/SingleBookService/SingleBookService';

const BookedServices = () => {
    const { user } = useContext(AuthContext);
    console.log(user?.email);
  
    const [bookedServices, setBookedServices] = useState([]);
    useEffect(() => {
      const fetchBookedServices = async () => {
        try {
          const { data } = await axios.get(
            `${import.meta.env.VITE_API_URL}/bookServices/${user?.email}`
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
            {
                bookedServices.map((bookService,index) => <SingleBookService key={index} bookService={bookService} ></SingleBookService> )
            }
        </div>
    );
};

export default BookedServices;