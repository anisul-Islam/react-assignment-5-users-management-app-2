import { useEffect, useState } from 'react';

const useFetch = (url) => {
  // Task 1: complete this custom hook
  // step1: create 3 states: data, isLoading, error
  // step2: fetch data & handle error
  // step3: return 3 states
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const res = await fetch(url);
        const data = await res.json();
        setdata(data);
        setloading(false);
      } catch (error) {
        seterror(error.message);
        setloading(false);
      }
    };

    fetchData();

    return fetchData;
  }, []);

  return {
    data,
    loading,
    error
  };
};

export default useFetch;
