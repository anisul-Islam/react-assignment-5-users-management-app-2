import { useEffect } from 'react';
import { useState } from 'react';

const useFetch = (url) => {
  // Task 1: complete this custom hook
  // step1: create 3 states: data, isLoading, error
  // step2: fetch data & handle error
  // step3: return 3 states
  const [users, setUsers] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setUsers(data);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [url]);

  return { users, isloading, error };
};

export default useFetch;
