import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Search = ({setAllServices,theme}) => {

    const [search, setSearch] = useState("");

    useEffect(() => {
    
        const fetchAllServices = async () => {
          try {
            const { data } = await axios.get(
              `${import.meta.env.VITE_API_URL}/allServices/search?searchParams=${search}`
            );
            setAllServices(data)
          } catch (error) {
            console.log(error);
            
          }
        };
        fetchAllServices();
      }, [search]);


    return (
        <label className="input input-bordered flex items-center gap-2">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="grow text-black"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70 text-black"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
    );
};

export default Search;