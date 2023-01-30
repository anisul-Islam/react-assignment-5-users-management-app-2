/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react';

const useFetch = (url) => {
  // Task 1: complete this custom hook
  // step1: create 3 states: data, isLoading, error
  // step2: fetch data & handle error
  // step3: return 3 states
  const [data,setData] = useState(null)
  const [isLoading,setIsLoadding] = useState(true)
  const [error,setError] = useState(null)
  useEffect(()=>{
    fetch(url).then((res)=>{
      if(!res.ok){
        throw Error("Data Fetching Failed")
      }
      return res.json()
    }).then((data)=>{
      setData(data)
      setIsLoadding(false)
      setError(null)
    }).catch((error)=>{
      setError(error.message)
      setIsLoadding(false)
    })
  },[url])
  return {data,isLoading,error}
};

export default useFetch;
