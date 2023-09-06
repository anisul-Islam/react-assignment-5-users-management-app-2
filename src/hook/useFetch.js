/* eslint-disable prettier/prettier */
// /* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
const useFetch = (url) => {
  // step1: create 3 states: data, isLoading, error
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  // Task 1: complete this custom hook
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setIsLoading(false);
      setData(data);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, [url]);

  // step2: fetch data & handle error
  // step3: return 3 states
  return { data, isLoading, error };
};

export default useFetch;
