import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
  // Task 1: complete this custom hook

  // step1: create 3 states: data, isLoading, error
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // step2: fetch data & handle error
  const dataFetch = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw Error('Data fetching is not completed perfectly.');
      } else {
        const data = await res.json();
        setIsLoading(false);
        setData(data);
        setError(null);
      }
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    dataFetch(url);
  }, []);

  // step3: return 3 states
  return { data, isLoading, error };
};

export default useFetch;
