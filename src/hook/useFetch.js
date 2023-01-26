import React,{useState,useEffect} from 'react';

const useFetch = (url) => {
  // Task 1: complete this custom hook
  // step1: create 3 states: data, isLoading, error
  // step2: fetch data & handle error
  // step3: return 3 states
  const [data,setData]=useState([]);
  const[isLoading,setIsLoading]=useState(true);
  const[error,setError]=useState(null);

  useEffect(()=>{
    fetch(url)
    .then((res)=>{
      if(!res.ok)
      {
        throw Error("Fetch is not Completed");
      }
      else{
        return res.json();
      }
    })
    .then((res)=>{
      setData(res);
      setIsLoading(false)
      setError(null)
    })
    .catch((error)=>{
      setIsLoading(false)
      setError(error.message);
    })
  },[url])
  return [data,isLoading,error]
};

export default useFetch;
