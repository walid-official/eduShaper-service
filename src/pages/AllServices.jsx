import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllService from '../components/AllService/AllService';

const AllServices = () => {
      const [allServices, setAllServices] = useState([]);
      useEffect(() => {
        const fetchAllServices = async () => {
          try {
            const { data } = await axios.get(
              `${import.meta.env.VITE_API_URL}/allServices`
            );
            setAllServices(data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchAllServices();
      }, []);

      console.log(allServices);

    return (
        <div>
            {
                allServices.map((singleService,index)  => <AllService key={index} singleService={singleService} ></AllService> )
            }
        </div>
    );
};

export default AllServices;