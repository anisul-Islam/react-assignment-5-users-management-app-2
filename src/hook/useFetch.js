import { useEffect, useState } from 'react';

const useFetch = (url) => {
  // Task 1: complete this custom hook
  // step1: create 3 states: data, isLoading, error
  const [ data, setData ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(true)
  const [ error, setError ] = useState(null)
  
  // step2: fetch data & handle error
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if ( !res.ok ) {
          throw Error('Error loading data...')
        }
        return res.json()
      })
      .then((resData) => {
        setData(resData)
        setError(null)
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false))
    }, [url])

  // step3: return 3 states
  return { data, isLoading, error }
};

export default useFetch;
