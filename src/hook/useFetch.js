import React from 'react';
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  // Task 1: complete this custom hook


  // step1: create 3 states: data, isLoading, error
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // step2: fetch data & handle error
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error('Your link is not working')
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      })
  }, [url])


  // step3: return 3 states
  return { data, error, isLoading }
};

export default useFetch;
