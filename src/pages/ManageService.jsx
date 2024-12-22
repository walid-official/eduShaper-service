import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../components/AuthProvider/AuthProvider';
import axios from 'axios';

const ManageService = () => {
    const {user} = useContext(AuthContext);
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
    }, [user])
    console.log(manageServices);
    return (
        <div>
            
        </div>
    );
};

export default ManageService;