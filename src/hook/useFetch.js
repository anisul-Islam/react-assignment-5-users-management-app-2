import { useState, useEffect } from 'react';

const useFetch = (url) => {
  // Task 1: complete this custom hook
  // step1: create 3 states: data, isLoading, error
  // step2: fetch data & handle error
  // step3: return 3 states

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);

  // const fetchData = async (url) => {
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setUsers(data);
  //     setIsLoading(false);
  //     setError(null);
  //   } catch (error) {
  //     setError(error);
  //     setIsLoading(false);
  //   }
  // };

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error('Something is wrong');
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [url]);

  return { isLoading, error, users };
};

export default useFetch;
