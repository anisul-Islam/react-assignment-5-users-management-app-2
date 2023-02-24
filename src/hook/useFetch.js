
import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
  // Task 1: complete this custom hook
  // step1: create 3 states: data, isLoading, error
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  // step2: fetch data & handle error
     useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        const users = await res.json();
        setUsers(users);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();

    return fetchData;
  }, []);


  // step3: return 3 states
  return {
    users,
    isLoading,
    error
  };
};


export default useFetch;
