import React,{useState,useEffect} from 'react';

const useFetch = (url) => {
  // Task 1: complete this custom hook
  // step1: create 3 states: setUsers, isLoading, error
  // step2: fetch data & handle error
  // step3: return 3 states
  const [users,setUsers]=useState([])
  const [isLoading,setisLoading]=useState(true)
  const [error,setError]=useState(null)

  // useEffect(() => {
  //   fetch(url)
  //   .then((res)=>{
  //     setisLoading(false)
  //     if(!res.ok){
  //       throw new Error('data fetch error')
  //     }
  //     return res.json()
  //   })
  //   .then((data)=>{
  //     setUsers(data)
  //   })
  //   .catch((error)=>{
  //     setError(error.message)
  //     setisLoading(false)
  //   })

  // }, []);

  // writing an async function
  const fetchData=async(url)=>{
    try{
      const reponse= await fetch(url)
      const data= await reponse.json()
      setisLoading(false)
      setUsers(data)
    }catch(error){
      setError(error.message)
    }
  }


  useEffect(()=>{
    fetchData(url)
  },[])

  return {users,isLoading,error}

};

export default useFetch;
