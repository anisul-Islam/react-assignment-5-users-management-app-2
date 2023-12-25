import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
  // Task 1: complete this custom hook
  // step1: create 3 states: data, isLoading, error
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  // step2: fetch data & handle error
  useEffect(() => {
    setIsLoading(true)
    fetch(url)
    .then((response) => {
      if(!response.ok){
        throw Error('Data not found')
      }
      return response.json()
    })
    .then((data) => {
      setData(data)
      setIsLoading(false)
    })
    .catch((error) => {
      setError(error)
      setIsLoading(false)

    })
  
  },[url])
  // step3: return 3 states
  return {data, isLoading, error}
};

export default useFetch;
