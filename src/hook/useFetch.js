import { useEffect, useState } from 'react';

const useFetch = (url) => {
  // Task 1: complete this custom hook
  // step1: create 3 states: data, isLoading, error
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // step2: fetch data & handle error

  useEffect(() => {
    setTimeout(()=>{
      fetch(url)
      .then(res =>{
        if(!res.ok){
          throw Error("data is Not Found")
        }else{
          return res.json()
        }
      })
      .then(data => {
        setIsLoading(false);
        setData(data);
        setError(null);
      })
      .catch(error => {
        setIsLoading(false);
        setError(error.message);
        setData(null);
      })
    },2000)
  }, [url]);

  // step3: return 3 states
  return { data, isLoading, error };

};

export default useFetch;
